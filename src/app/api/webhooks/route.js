import { Webhook } from "svix";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import dbConnection from "@/lib/dbConnection";
import userModel from "@/models/User";

export async function POST(req) {
    try {
        // Connect to the database
        await dbConnection();

        const SIGNING_SECRET = process.env.CLERK_WEBHOOK_SIGNING_SECRET;

        if (!SIGNING_SECRET) {
            console.error("Missing Clerk Webhook Signing Secret");
            return NextResponse.json(
                { message: "Server misconfiguration" },
                { status: 500 }
            );
        }

        // Get and validate headers
        const headerPayload = await headers();
        const svixId = headerPayload.get("svix-id");
        const svixSignature = headerPayload.get("svix-signature");
        const svixTimestamp = headerPayload.get("svix-timestamp");

        if (!svixId || !svixSignature || !svixTimestamp) {
            return NextResponse.json({ message: "Missing webhook headers" }, { status: 400 });
        }

        // Parse and verify the webhook
        const body = await req.text();
        const webhook = new Webhook(SIGNING_SECRET);

        let event;
        try {
            event = webhook.verify(body, {
                "svix-id": svixId,
                "svix-signature": svixSignature,
                "svix-timestamp": svixTimestamp,
            });
        } catch (err) {
            console.error("Webhook verification failed:", err);
            return NextResponse.json({ message: "Invalid webhook signature" }, { status: 400 });
        }

        const eventType = event.type;
        const { id, first_name, last_name, username, email_addresses, image_url } = event.data;

        if (eventType === "user.created") {
            const email = email_addresses?.[0]?.email;

            if (!email) {
                return NextResponse.json({ message: "Email not found in payload" }, { status: 400 });
            }

            const existingUser = await userModel.findOne({ email });

            if (!existingUser) {
                const newUser = new userModel({
                    clerkId: id,
                    firstname: first_name,
                    lastname: last_name,
                    username,
                    email,
                    image: image_url,
                });

                await newUser.save();
                console.log("✅ User created:", newUser);

                return NextResponse.json({ message: "User created successfully" }, { status: 201 });
            } else {
                console.log("ℹ️ User already exists:", existingUser.email);
            }
        } else {
            console.log("Unhandled event type:", eventType);
        }

        return NextResponse.json({ message: "Event processed" }, { status: 200 });

    } catch (error) {
        console.error("🚨 Internal error:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
