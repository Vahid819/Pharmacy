import saleModel from "@/models/Sales";
import dbConnection from "@/lib/dbConnection";
import product from "@/models/Product";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { userId } = getAuth(request);

    if (!userId) {
      return NextResponse(
        { success: false, message: "no user found plese first login" },
        {
          status: 500,
        }
      );
    }

    const {newSale} = await request.json();
    console.log(newSale)

    const customer = new saleModel({
        customerName: newSale.customer,
        contact: newSale.contact,
        saleDate: newSale.Date,
        product: newSale.product,
        paymentMethod: newSale.paymentMethod,
        salername: newSale.saler,
        totalproduct: newSale.totalproduct,
        discount: newSale.discount,
        saveamount: newSale.saveamount,
        totalamount: newSale.totalamount
    })

    await customer.save();



  } catch (error) {
    console.log("API ishue for data post", error);

    return NextResponse(
      { success: false, message: "error no data save" },
      {
        status: 500,
      }
    );
  }
}

export async function GET(request) {
  try {
    const { userid } = getAuth(request);

    if (!userid) {
      return Response.json(
        {
          success: false,
          message: "user not find please first login",
        },
        {
          status: 400,
        }
      );
    }

    await dbConnection();
    const customer = await saleModel
      .find()
      .select(
        " _id customerName contact saleDate paymentMethod product totalamount "
      );

    if (!customer) {
      return Response.json(
        {
          success: false,
          message: "no sales data found",
        },
        {
          status: 400,
        }
      );
    }

    console.log(customer);

    return NextResponse.json(customer, { status: 200 });
  } catch (error) {
    console.log("API isshue no data feturch", error);
    return Response.json(
      {
        success: false,
        message: "Error when data stored",
      },
      {
        status: 500,
      }
    );
  }
}
