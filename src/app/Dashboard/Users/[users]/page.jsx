import Link from "next/link";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { IndianRupee, CreditCard, Plus, User } from "lucide-react";
import { Component } from "@/components/DataChar";


async function Page({ params }) {
  const { users } = await params;

  return (
    <div className="flex flex-col h-auto w-auto border-2 mx-6 my-1 rounded-lg shadow-lg p-4">
      {/* <Separator className="my-2 w-full mx-0" /> */}
      <div className="flex w-auto flex-wrap h-auto gap-2 items-center justify-around">
        <Card className={"w-80"}>
          <CardHeader className="flex items-center justify-between text-2xl">
            <CardTitle className={"flex items-center justify-between w-full"}>
              <h1>Total Revenue</h1>
              <IndianRupee size={"20"} />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h2 className="flex text-xl items-center">
              <IndianRupee size={20} />
              45000.00
            </h2>
            <h2 className="text-sm text-gray-400">+21.04% form last month</h2>
          </CardContent>
        </Card>
        <Card className={"w-80"}>
          <CardHeader className="flex items-center justify-between text-2xl">
            <CardTitle className={"flex items-center justify-between w-full"}>
            <h1>Total Sale</h1>
            <CreditCard size={20}/>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h2 className="text-xl flex items-center">
              <Plus size={20} /> 12,234
            </h2>
            <h2 className="text-sm text-gray-400">+19% from last month</h2>
          </CardContent>
        </Card>
        <Card className={"w-80"}>
          <CardHeader className="flex items-center justify-between text-2xl">
            <CardTitle className={"flex items-center justify-between w-full"}>
            <h1>Active Staff</h1>
            <User size={20}/>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h2 className="text-xl flex items-center">Active</h2>
            <h2 className="text-sm text-gray-400">+201 since last hour</h2>
          </CardContent>
        </Card>
        <div className="flex h-auto border p-4 rounded-lg shadow-lg">
          <Component />
        </div>
      </div>
    </div>
  );
}

export default Page;
