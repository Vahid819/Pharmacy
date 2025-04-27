import Link from "next/link";
import React from "react";
import { Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
 } from "@/components/ui/menubar";
 import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
 } from "./ui/card";
import { Separator } from "@/components/ui/separator";
import ComboboxDemo from "@/components/Combobox";
import { Input } from "@/components/ui/input";
import { IndianRupee, CreditCard, Plus, User } from "lucide-react"
import { Component } from "@/components/DataChar"


async function Page({ params }) {
  const { users } = await params;

  return (
    <div className="flex flex-col h-auto w-auto border-2 mx-6 my-1 rounded-lg shadow-lg p-4">
      <div className="flex w-full items-center justify-around">
        <div>
          <ComboboxDemo />
        </div>
        <div>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>
                Overview
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Customer</MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Products</MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Setting</MenubarTrigger>
            </MenubarMenu>
          </Menubar>
        </div>
        <div>
          <Input placeholder="Search..." className="w-80" />
        </div>
        {/* <div></div> */}
      </div>
      <Separator className="my-2 w-full mx-0" />
      <div className="flex w-auto flex-wrap h-auto gap-2 items-center justify-around">
        <div className="flex flex-col flex-wrap w-80 h-auto border p-4 gap-3 rounded-lg shadow-lg">
          <div className="flex items-center justify-between text-2xl">
            <h1>Total Revenue</h1>
            <p><IndianRupee /></p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl flex items-center"><IndianRupee size={"20"}/> 450,000.00</h2> 
            <h2 className="text-sm text-gray-400">+21.04% from last month</h2>
          </div>
        </div>
        <div className="flex flex-col flex-wrap w-80 h-auto border p-4 gap-3 rounded-lg shadow-lg">
          <div className="flex items-center justify-between text-2xl">
            <h1>Total Sale</h1>
            <CreditCard />
          </div>
          <div>
            <h2 className="text-xl flex items-center"><Plus size={20} /> 12,234</h2>
            <h2 className="text-sm text-gray-400">+19% from last month</h2>
          </div>
        </div>
        <div className="flex flex-col flex-wrap w-80 h-auto border p-4 gap-3 rounded-lg shadow-lg">
          <div className="flex items-center justify-between text-2xl">
            <h1>Active Staff</h1>
            <User />
          </div>
          <div>
            <h2 className="text-xl flex items-center">Active</h2>
            <h2 className="text-sm text-gray-400">+201 since last hour</h2>
          </div>
        </div>
        <div className="flex h-auto border p-4 rounded-lg shadow-lg">
          <Component />
        </div>
      </div>
    </div>
  );
}

export default Page;
