import { Webhook } from "svix";
import { headers } from "next/headers";
import dbConnection from "@/lib/dbConnection";
import userModel from "@/models/User";
import { verifyWebhook } from "@clerk/nextjs/webhooks";

export async function POST(req) {
  try {
    await dbConnection();
    const payload = await req.text();
    const headers = {
      "svix-id": req.headers.get("svix-id"),
      "svix-timestamp": req.headers.get("svix-timestamp"),
      "svix-signature": req.headers.get("svix-signature"),
    };

    const wh = new Webhook(process.env.CLERK_WEBHOOK_SIGNING_SECRET);

    let evt;
    try {
      evt = wh.verify(payload, headers);
    } catch (err) {
      return new Response("Invalid webhook", { status: 400 });
    }

    const { frist_name, last_name, email_addresses, id } = evt.data;
    const eventType = evt.type;

    if (eventType === "user.created") {
      const user = await userModel.findOne({ email: evt.data.email });

      if (!user) {
        const newuser = new userModel({
          frist_name: frist_name,
          last_name: last_name,
          email_adress: email_addresses,
          userId: id,
        });
        await newuser.save();
        console.log("data will stored in database");
      }
    } else {    
      console.log("Unknown event type:", evt.type);
    }

    // your event handling logic here
    return new Response("OK", { status: 200 });
  } catch (error) {
    console.log(error.message);
    return new Response("Error: Webhook error", { status: 500 });
  }
}
