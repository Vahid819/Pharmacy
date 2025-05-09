import { NextResponse } from "next/server";
import dbConnection from "@/lib/dbConnection";
import userModel from "@/models/User";
import { getAuth } from "@clerk/nextjs/server";

/**
 * GET endpoint to fetch staff information
 * Returns:
 * - Current authenticated staff member's name
 * - Total count of staff members
 */
export async function GET(request) {
  try {
    // 1. Authentication
    const { userId } = getAuth(request);
    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized - Please log in" },
        { status: 401 }
      );
    }

    // 2. Database connection
    await dbConnection();

    // 3. Fetch current user data
    const currentStaff = await userModel.findOne({
      clerkId: userId,
      role: "staff"
    }).select("firstname lastname");

    if (!currentStaff) {
      return NextResponse.json(
        { error: "Staff member not found or insufficient permissions" },
        { status: 403 }
      );
    }
     const currentStaffdata = {
        firstName: currentStaff.firstname,
        lastName: currentStaff.lastname,
      }


      console.log(currentStaffdata)
    return NextResponse.json(currentStaffdata, { status: 200 });

  } catch (error) {
    console.error("Staff API Error:", error);
    
    // 7. Error handling with different status codes
    const statusCode = error.name === 'MongoError' ? 503 : 500;
    
    return NextResponse.json(
      {
        error: "Failed to retrieve staff data",
        details: process.env.NODE_ENV === "development" ? error.message : undefined,
        suggestion: "Please try again later or contact support"
      },
      { status: statusCode }
    );
  }
}