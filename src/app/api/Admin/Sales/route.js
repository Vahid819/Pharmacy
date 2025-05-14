import saleModel from "@/models/Sales";
import dbConnection from "@/lib/dbConnection";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    await dbConnection();

    const {
      customerName,
      contact,
      product,
      totalamount,
      paymentMethod,
      salername,
      totalproduct,
      discount,
      saveamount,
      saleDate,
    } = req.body;

    const newSale = new saleModel({
      customerName,
      contact,
      product,
      totalamount,
      paymentMethod,
      salername,
      totalproduct,
      discount,
      saveamount,
      saleDate,
    });

    await newSale.save();

    return res.status(201).json({ message: "Sale recorded successfully" });
  } catch (error) {
    console.error("Error saving sale:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
