import { NextResponse } from "next/server";
import dbConnection from "@/lib/dbConnection";
import userModel from "@/models/User";
import { getAuth } from "@clerk/nextjs/server";

export async function GET(request) {
  try {
    const { userId } = getAuth(request);

    await dbConnection();

    // 👉 Add await here!
    const userData = await userModel.countDocuments({role: "staff"})

    if (!userData) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ name: userData }, { status: 200 });
  } catch (error) {
    console.error("Error fetching staff data:", error);
    return NextResponse.json({ error: "Failed to fetch staff data" }, { status: 500 });
  }
}
