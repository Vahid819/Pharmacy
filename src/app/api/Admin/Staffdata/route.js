import { NextResponse } from "next/server";
import dbConnection from "@/lib/dbConnection";
import userModel from "@/models/User";
import { getAuth } from "@clerk/nextjs/server";

export async function GET(request) {
  try {
    const { userId} = getAuth(request);
    const db = await dbConnection();

    const user = await userModel.findOne({clerkId: userId, role: "staff"}).select("firstname lastname")
    const totalStaff = await userModel.countDocuments({ role: "staff" });
    // const userData = {
    //   firstName: user.firstname,
    //   lastName: user.lastname,
    // };
    console.log("Total staff count:", totalStaff);

    console.log("User data:", user);

    return NextResponse.json(
      { Info: user, Count: totalStaff },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching staff data:", error);
    return NextResponse.json(
      { error: "Failed to fetch staff data", details: error.message },
      { status: 500 }
    );
  }
}
