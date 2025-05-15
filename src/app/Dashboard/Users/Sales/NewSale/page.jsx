"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import NewSaleSchema from "@/zodSchema/Newsale.Schema";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { IndianRupee } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useFeatch from "@/Hooks/Fetchdata";
import useProductStorage from "@/Hooks/localstorage";

function NewSale() {
  const { data, loading, error, fetchData } = useFeatch("/api/Admin/Staffdata");
  const { products, addProduct, clearProducts, removeProduct } =
    useProductStorage();
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(NewSaleSchema),
    defaultValues: {
      customerName: "",
      customerContact: "",
      productName: "",
      productPrice: 0,
      quantity: 1,
      paymentMethod: "cash",
      paymentStatus: "pending",
      discount: 0,
      totalAmount: 0,
      saleDate: new Date().toISOString().split("T")[0],
      staff: "",
    },
  });

  const totalAmount = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const handleAddProduct = () => {
    const productData = form.getValues();
    addProduct({
      name: productData.productName,
      price: productData.productPrice,
      quantity: productData.quantity,
    });

    form.resetField("productName");
    form.resetField("productPrice");
    form.resetField("quantity");
  };
 const onSubmit = async (formData) => {
  try {
    const saleData = {
      salername: formData.staff, // assuming 'staff' is staff name
      contact: formData.customerContact,
      paymentMethod: formData.paymentMethod, // double-check enum in your Mongoose schema
      paymentStatus: formData.paymentStatus,
      saleDate: formData.saleDate,
      discount: formData.discount,
      totalamount: totalAmount - formData.discount, // use lowercase
      totalproduct: products.reduce((acc, p) => acc + p.quantity, 0),
      products, // already an array of products
    };

    console.log("Submitting saleData:", saleData);

    const res = await fetch("/api/Admin/Sales", {
      method: "POST",
      body: JSON.stringify(saleData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      clearProducts();
      form.reset();
      router.push("/Dashboard/Users/Sales/Sale");
    } else {
      const errorRes = await res.json();
      console.error("API Error:", errorRes);
    }
  } catch (err) {
    console.error("Sale submission failed:", err);
  }
};



  return (
    <div className="w-[95%] mx-auto mt-3 border rounded-lg h-auto shadow-md p-2">
      <header>
        <nav>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Customer Info */}
              <div className="flex gap-4 flex-wrap">
                <FormField
                  control={form.control}
                  name="customerName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Customer Name</FormLabel>
                      <FormControl>
                        <Input
                          className="w-56"
                          placeholder="Customer Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="customerContact"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact</FormLabel>
                      <FormControl>
                        <Input
                          className="w-56"
                          placeholder="Contact No"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="paymentMethod"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Payment Method</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-28">
                            <SelectValue placeholder="Select payment method" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="cash">Cash</SelectItem>
                          <SelectItem value="credit_card">
                            Credit Card
                          </SelectItem>
                          <SelectItem value="debit_card">Debit Card</SelectItem>
                          <SelectItem value="mobile_payment">
                            Mobile Payment
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="paymentStatus"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Payment Status</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select payment status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="paid">Paid</SelectItem>
                          <SelectItem value="pending">Pending</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="discount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Discount</FormLabel>
                      <FormControl>
                        <Input
                          className="w-20"
                          type="number"
                          placeholder="Discount"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="saleDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sale Date</FormLabel>
                      <FormControl>
                        <Input type="date" className={"w-40"} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="staff"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Staff</FormLabel>
                      <FormControl>
                        <Input placeholder="Staff ID" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Add Product Section */}
              <div className="border p-4 rounded-lg">
                <h3 className="font-medium mb-4">Add Products</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="productName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Product Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Product Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="productPrice"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Price</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="Price" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="quantity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Quantity</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Quantity"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button
                  type="button"
                  onClick={handleAddProduct}
                  className="mt-4"
                >
                  Add Product
                </Button>
              </div>

              {/* Display Added Products with Cancel */}
              {products.length > 0 && (
                <div className="border p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Products Added</h3>
                  <ul className="divide-y">
                    {products.map((product, index) => (
                      <li
                        key={index}
                        className="py-2 flex justify-between items-center gap-4"
                      >
                        <div className="flex flex-col">
                          <span>
                            {product.name} (x{product.quantity})
                          </span>
                          <span className="text-sm text-gray-500">
                            <IndianRupee size={14} className="inline" />
                            {(product.price * product.quantity).toFixed(2)}
                          </span>
                        </div>
                        <Button
                          type="button"
                          variant="destructive"
                          size="sm"
                          onClick={() => removeProduct(index)}
                        >
                          Cancel
                        </Button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Total Amount Section */}
              <div className="border-t pt-4">
                <div className="flex justify-between font-medium text-lg">
                  <span>Subtotal:</span>
                  <span className="flex items-center">
                    <IndianRupee size={18} />
                    {totalAmount.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between font-medium text-lg">
                  <span>Discount:</span>
                  <span className="flex items-center">
                    -<IndianRupee size={18} />
                    {form.watch("discount").toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between font-bold text-xl mt-2">
                  <span>Total:</span>
                  <span className="flex items-center">
                    <IndianRupee size={18} />
                    {(totalAmount - form.watch("discount")).toFixed(2)}
                  </span>
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Processing..." : "Submit Sale"}
              </Button>
            </form>
          </Form>
        </nav>
      </header>
      <Separator />
    </div>
  );
}

export default NewSale;
