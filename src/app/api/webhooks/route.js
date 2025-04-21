import { Webhook } from "svix";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import connectDB from "@/lib/dbConnection";
import userModel from "@/models/User";

export async function POST(req) {
    try {
        await connectDB();

        const SIGNING_SECRET = process.env.CLERK_WEBHOOK_SIGNING_SECRET;

        if (!SIGNING_SECRET) {
            return NextResponse.json(
                { message: "SIGNING_SECRET not found" },
                { status: 500 }
            );
        }

        const wh = new Webhook(SIGNING_SECRET);

        const headerpayload = await headers();
        const svix_id = headerpayload.get("svix-id");
        const svix_signature = headerpayload.get("svix-signature");
        const svix_timestamp = headerpayload.get("svix-timestamp");

        if (!svix_id || !svix_signature || !svix_timestamp) {
            return NextResponse.json({ message: "Missing headers" }, { status: 400 });
        }

        const payload = await req.json();
        const body = JSON.stringify(payload);

        let evt;

        try {
            evt = wh.verify(body, {
                "svix-id": svix_id,
                "svix-signature": svix_signature,
                "svix-timestamp": svix_timestamp,
            });
        } catch (error) {
            return NextResponse.json({ message: "Invalid payload" }, { status: 400 });
        }

        const { id, first_name, last_name, username, email_addresses, image_url } =
            evt.data;
        const eventType = evt.type;

        if (eventType === "user.created") {
            const user = await userModel.findOne({ email: email_addresses[0].email });
            if (!user) {
                const newUser = await userModel.create({
                    clerkId: id,
                    fristname: first_name,
                    lastname: last_name,
                    username: username,
                    email: email_addresses[0].email,
                    image: image_url,
                });

                console.log("User created:", newUser);
                await newUser.save();
                return NextResponse.json(
                    { message: "User created successfully" },
                    { status: 201 }
                );
            }
        } else {
            console.log("Unknown event type:", evt.type);
        }

        return NextResponse.json(
            { message: "Event processed successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
}
