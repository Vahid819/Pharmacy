import dbConnection from "@/lib/dbConnection"
import newSale from "@/models/Sales"
import { NextResponse } from "next/server"
import {getAuth} from "@clerk/nextjs/server"


export async function POST(req){
    try {
        const {userId} = getAuth(req)
        await dbConnection();

        const formData = await req.formData()

       const newSales = {
        customerName: formData.get("customerName"),
        customerContact: formData.get("customerContact"),
        productPrice: formData.get("productPrice"),
        quantity: formData.get("quantity"),
        paymentMethod: formData.get("paymentMethod"),
        paymentStatus: formData.get("paymentStatus"),
        saleDate: formData.get("saleDate"),
        staff: formData.get("staff")
       }

       if(!newSale.customerName || !newSale.productPrice || !newSale.quantity || !newSale.saleDate || !newSale.staff )
       {
        return NextResponse.json(
            {message: "Please enter required filed", success: false},
            {status:400 }
        )
       }

       await newSale.save();

       return NextResponse.json(
        {message:"Sales data save successfuly", success: "true"},
        {status: 200}
       )
        
    } catch (error) {
        console.log("Error Saving sales data", error.message)
        return NextResponse.json(
            {
            error: "Faild  to Save the Sales data in datbase", details: error.message
        },
        {
            status:500
        }
        )
    }
}
