import dbConnection from "@/lib/dbConnection";
import saleModel from "@/models/Sales";
import productModel from "@/models/Product";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { userId } = getAuth(request);

  if (!userId) {
    return NextResponse(
      {
        success: false,
        message: "No user id found",
      },
      {
        status: 400,
      }
    );
  }

  try {
    await dbConnection();

    const salesreturn = await saleModel
      .find()
      .select(
        "_id customerName contact saleDate paymentMethod product totalamount"
      );

    if (!salesreturn) {
      return NextResponse();
    }

    console.log(salesreturn);

    return NextResponse.json({success: true, salesreturn }, {status: 200})
    

  } catch (error) {
    console.log("error accuord when data fetaching", error);
    return NextResponse(
      {
        success: false,
        message: "error show when data fetaching from database",
      },
      {
        status: 500,
      }
    );
  }
}
