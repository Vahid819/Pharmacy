"use client";
import React from "react";
import { useState } from "react";
import Salenavbar from "@/components/Salenavbar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


const invoices = [
  {
    invoice: "INV001",
    mrp: 100.00,
    Batch: "Batch001",
    totalAmount: 250.00,
    paymentMethod: "Credit Card",
  },
   {
    invoice: "INV002",
    mrp: 200.00,
    Batch: "Batch002",
    totalAmount: 150.00,
    paymentMethod: "PayPal",
   },
   {
    invoice: "INV003",
    mrp: 300.00,
    Batch: "Batch003",
    totalAmount: 300.00,
    paymentMethod: "Bank Transfer",
   },
   {
    invoice: "INV004",
    mrp: 400.00,
    Batch: "Batch004",
    totalAmount: 500.00,
    paymentMethod: "Cash",
   }
]

function page() {
  
  const [amount, setAmount] = useState(invoices.map((amounts)=> amounts.totalAmount));
  let total = 0;
  amount.map((amounts) => {
    total += amounts;
  });

  return (
    <div>
      <Salenavbar />
      {/* new product add */}
      <div className="flex items-center gap-2 p-6 bg-white shadow-md rounded-lg w-full">
        <Input placeholder="Enter product name" className="" />
        <Button className="bg-blue-500 text-white hover:bg-blue-700 font-bold py-2 px-4 rounded">
          Add Product
        </Button>
      </div>
      <Separator className="my-2" />
      <div className="TableContainer bg-white h-auto shadow-lg rounded-lg p-4 flex flex-col gap-2 border border-gray-200">
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow className={""}>
                <TableHead className="w-[100px] text-center">Iteam</TableHead>
                <TableHead className={"text-center w-[100px] "}>Paymethod</TableHead>
                <TableHead className={"text-center w-[100px] "}>Batch</TableHead>
                <TableHead className={"text-center w-[100px] "}>Expiry</TableHead>
                <TableHead className={"text-center w-[100px] "}>MRP</TableHead>
                <TableHead className={"text-center w-[100px] "}>Qut</TableHead>
                <TableHead className={"text-center w-[100px] "}>Discount</TableHead>
                <TableHead className="text-right w-[100px]">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="text-center font-medium">
                    {invoice.invoice}
                  </TableCell>
                  <TableCell className={"text-center"}><Input className={"w-36"} /></TableCell>
                  {/* <TableCell className={"text-center"}><Input className={"w-36"} /></TableCell> */}
                  <TableCell className={"text-center"}>{invoice.Batch}</TableCell>
                  <TableCell className={"text-center"}><Input type={"date"} className={"w-36"}/></TableCell>
                  <TableCell className={"text-center"}><CurrencyRupeeIcon />{invoice.mrp}</TableCell>
                  <TableCell className={"text-center"}><Input className={"w-36"} /></TableCell>
                  <TableCell className={"text-center"}><Input className={"w-36"}/></TableCell>
                  <TableCell className="text-right">
                   <CurrencyRupeeIcon /> {invoice.totalAmount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={7}>Total</TableCell>
                <TableCell className="text-right"><CurrencyRupeeIcon />{total}</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
      </div>
    </div>
  );
}

export default page;
