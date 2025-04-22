import { Webhook } from "svix";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import dbConnection from "@/lib/dbConnection";
import userModel from "@/models/User";

export async function POST(req) {
  try {
    await dbConnection(); // Ensure the database connection is established

    const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SIGNING_SECRET;

    if (!WEBHOOK_SECRET) {
      return NextResponse.json(
        { error: "Webhook secret not configured" },
        { status: 500 }
      );
    }

    const wh = new Webhook(WEBHOOK_SECRET);

    const headerpayload = await headers();
    const svix_id = headerpayload.get("svix-id");
    const svix_timestamp = headerpayload.get("svix-timestamp");
    const svix_signature = headerpayload.get("svix-signature");

    if (!svix_id || !svix_timestamp || !svix_signature) {
      return NextResponse.json(
        { error: "Missing required headers" },
        { status: 400 }
      );
    }

    const body = await req.text(); // 🔥 RAW body required for signature validation

    let evt;

    try {
      evt = wh.verify(body, {
        "svix-id": svix_id,
        "svix-timestamp": svix_timestamp,
        "svix-signature": svix_signature,
      });
    } catch (error) {
      console.error("Error verifying webhook:", error);
      return NextResponse.json(
        { error: "Invalid webhook signature" },
        { status: 401 }
      );
    }

    const { first_name, last_name, username, email_addresses, verification, id } =
      evt.data;
    const email = email_addresses[0].email_address;
    const isverified = verification?.status === "verified" ? true : false;
    console.log("isverified", isverified);
    const eventType = evt.type;

    if (eventType === "user.created") {
      const user = await userModel.findOne({ email: email });
      if (!user) {
        const newUser = new userModel({
          clerkId: id,
          firstname: first_name,
          lastname: last_name,
          email: email,
          username: username,
          isverified: isverified
        });
        await newUser.save();
      }
    } else {
      console.log("Event type not handled:", eventType);
    }
    return NextResponse.json(
      { message: "Webhook processed successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing webhook:", error); // 👈 shows full error
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
}
}
