// /pages/api/Sale/newSale.js or /app/api/Sale/newSale/route.js (depending on your setup)
import saleModel from "@/models/Sales";
import dbConnection from "@/lib/dbConnection";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await dbConnection();

    const body = await req.json(); // ✅ get parsed body
    console.log("Incoming Sale Data:", body);

    let saleDate = new Date(body.saleDate);
    if (isNaN(saleDate)) {
      console.warn("Invalid saleDate format, using current date");
      saleDate = new Date();
    }

    // Create a new sale document using instance
    const newSale = new saleModel({
      customerName: body.customerName,
      contact: body.contact,
      saleDate: new Date(body.saleDate),
      product: body.product,
      paymentMethod: body.paymentMethod, // double-check enum in your Mongoose schema
      salername: body.salername, // assuming 'staff' is staff name
      totalproduct: body.totalproduct,
      discount: Number(body.discount),
      paymentStatus: body.paymentStatus,
      totalamount: body.totalamount,
    });

    console.log("This is route data", newSale.saleDate);
    // Save the sale to the DB
    await newSale.save(); // ✅ this is your user.save() pattern
    console.log("Data save successfully");
    return NextResponse.json({ success: true, data: newSale }, { status: 201 });
  } catch (error) {
    console.error("Error saving sale:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
