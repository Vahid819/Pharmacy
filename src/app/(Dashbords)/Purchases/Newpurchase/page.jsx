import React from "react";
import { CalendarForm } from "@/components/CalendarForm";
import { Separator } from "@/components/ui/separator";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";


function page() {
  return (
    <div className="p-2">
      <div className="Purchasenavbar bg-white shadow-lg rounded-lg p-4 flex justify-around items-center border border-gray-200">
        <div className="flex items-center gap-2 bg-gray-100 w-auto rounded-lg shadow-md p-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="Input" className="text-gray-500">
              Distributor
            </Label>
            <Input
              id="Distributor"
              placeholder="Distributor name"
              className="w-64 appearance-none -moz-appearance:textfield"
            />
          </div>
        </div>
        <div className="flex items-center gap-2 bg-gray-100 w-auto rounded-lg shadow-md p-4">
          <div className="gap-2 flex flex-col">
            <Label htmlFor="number" className="text-gray-500">
              Order No
            </Label>
            <Input
              id="OrderNo"
              placeholder="Order no"
              className="w-64 appearance-none -moz-appearance:textfield"
            />
          </div>
        </div>
        <div className="flex items-center gap-2 bg-gray-100 w-auto rounded-lg shadow-md p-4">
          <div className="bg-gray-200 p-2 rounded-full">
            <CalendarMonthIcon className="text-gray-500" />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-gray-500">Bill Date</Label>
            <CalendarForm />
          </div>
        </div>
        <div className="flex items-center gap-2 bg-gray-100 w-auto rounded-lg shadow-md p-4">
          <div className="bg-gray-200 p-2 rounded-full">
            <CalendarMonthIcon className="text-gray-500" />
          </div>
          <div className="flex flex-col gap-2">
            <Label className={"text-gray-500"}>Due Date</Label>
            <CalendarForm />
          </div>
        </div>
      </div>
      <Separator className="my-2" />
      <div className="TableContainer bg-white h-[70vh] shadow-lg rounded-lg p-4 flex flex-col gap-2 border border-gray-200">
  
        <div className="flex items-center gap-2 bg-gray-100 w-auto rounded-lg shadow-md p-4">
          <Input placeholder="Enter product name" className="w-full " />
        </div>
      </div>
    </div>
  );
}

export default page;
