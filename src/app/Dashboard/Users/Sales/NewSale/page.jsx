"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import NewSaleSchema from "@/zodSchema/Newsale.Schema";
import { Button } from "@/components/ui/button";
// import { useAuth } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useFeatch from "@/Hooks/Fetchdata";

function NewSale() {
  const { data, loading, error, fetchData } = useFeatch("/api/Admin/Staffdata");
  const router = useRouter()
  const form = useForm({
    resolver: zodResolver(NewSaleSchema),
    defaultValues: {
      customerName: "",
      customerContact: "",
      productName: [],
      productPrice: 0,
      quantity: 1,
      paymentMethod: "cash",
      paymentStatus: "pending",
      discount: 0,
      saleDate: new Date().toISOString().split("T")[0],
      staff: "",
    },
  });

  useEffect(()=>{
    if(data && !error){
      console.log(data.message)
      router.push('/')
    }else if(error){
      console.log(error.message)

    }
  }, [ data, error, loading])

  function onSubmit(data) {
    console.log(data);
    const sendData = async()=>{
      try {
        const form = new FormData()
        form("customerName", data.customerName)
        form.append("customerContact", data.customerContact)
        form.append("productPrice", data.productPrice)
        form.append("quantity", data.quantity)
        form.append("paymentMethod", data.paymentMethod)
        form.append("paymentStatus", data.paymentStatus)
        form.append("discount", data.discount)
        form.append("saleDate", data.saleDate)
        form.append("staff", data.staff)

        await fetchData({
          url: "/api/Sale/newSale",
          method: "POST",
          body: form
        })
      } catch (error) {
        console.log(error.message)
      }
    }
    sendData()
  }


  return (
    <>
      <div className="w-[95%] mx-auto mt-3 border rounded-lg h-auto shadow-md p-2">
        <header>
          <nav>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="customerName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Coustomer Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Customer Name" {...field} />
                      </FormControl>
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
                        <Input placeholder="Contact No" {...field} />
                      </FormControl>
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
                        <Input placeholder="Product Price" {...field} />
                      </FormControl>
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
                        <Input placeholder="Product quantity" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="paymentMethod"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Payment Method</FormLabel>
                      <FormControl>
                        {/* <Input placeholder="Product quantity"   /> */}
                        <Select defaultValue="cash">
                          <SelectTrigger className="w-[180px]">
                            <SelectValue
                              placeholder="Payment Method"
                              {...field}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Payment Method</SelectLabel>
                              <SelectItem value="cash">cash</SelectItem>
                              <SelectItem value="credit_card">
                                credit_card
                              </SelectItem>
                              <SelectItem value="debit_card">
                                debit_card
                              </SelectItem>
                              <SelectItem value="mobile_payment">
                                mobile_payment
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="paymentStatus"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Payment Status</FormLabel>
                      <FormControl>
                        <Select defaultValue="pending">
                          <SelectTrigger className="w-[180px]">
                            <SelectValue
                              placeholder="Payment Method"
                              {...field}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Payment Method</SelectLabel>
                              <SelectItem value="paid">paid</SelectItem>
                              <SelectItem value="pending">pending</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
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
                        <Input placeholder="Discount" {...field} />
                      </FormControl>
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
                        <Input type="date" {...field} />
                      </FormControl>
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
                    </FormItem>
                  )}
                />

                <Button type="submit" className="mt-4">
                  Submit Sale
                </Button>
              </form>
            </Form>
          </nav>
        </header>
        <Separator />
      </div>
    </>
  );
}

export default NewSale;
