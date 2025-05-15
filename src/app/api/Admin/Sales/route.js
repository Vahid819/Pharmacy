// /pages/api/Sale/newSale.js or /app/api/Sale/newSale/route.js (depending on your setup)
import saleModel from "@/models/Sales";
import dbConnection from "@/lib/dbConnection";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await dbConnection();

    const body = await req.json(); // ✅ get parsed body
    console.log("Incoming Sale Data:", body);

    // Create a new sale document using instance
    const newSale = new saleModel({
      customerName: body.customerName,
      customerContact: body.customerContact,
      saleDate: body.saleDate,
      products: body.products, // array of { name, price, quantity }
      paymentMethod: body.paymentMethod,
      paymentStatus: body.paymentStatus,
      discount: body.discount,
      totalAmount: body.totalAmount,
      staff: body.salername,
    });

    console.log(newSale)
    // Save the sale to the DB
    await newSale.save(); // ✅ this is your user.save() pattern
    console.log("Data save successfully")
    return NextResponse.json({ success: true, data: newSale }, { status: 201 });

  } catch (error) {
    console.error("Error saving sale:", error);
    return NextResponse.json({ success: false, error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
