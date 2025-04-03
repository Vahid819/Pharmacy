import React from "react";
import { CalendarForm } from "./CalendarForm";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BriefcaseMedical } from "lucide-react";



function Salenavbar() {
  return (
    <div className="flex items-center justify-around gap-3 w-full p-6 bg-white shadow-lg rounded-lg border">
      <div className="card flex items-center w-auto gap-2 bg-gray-50 shadow-md rounded-lg p-4">
        <div className="bg-gray-100 p-2 rounded-full">
          <CalendarMonthIcon className="text-blue-500 text-3xl" />
        </div>
        <CalendarForm />
      </div>
      <div className="card flex items-center w-auto gap-2 bg-gray-50 shadow-md rounded-lg p-4">
        <div className="bg-gray-100 p-2 rounded-full">
          <AccountCircleIcon className="text-blue-500 text-3xl" />
        </div>
        <div>
          <Label className="text-gray-500 text-sm">
            Customer Mobile / Name
          </Label>
          <Input type="text" placeholder="Search..." className="w-full" />
        </div>
      </div>
      <div className="card flex items-center w-auto gap-2 bg-gray-50 shadow-md rounded-lg p-4">
        <div>
          <Label className="text-gray-500 text-sm">Bill for</Label>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="For bill" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Father</SelectItem>
              <SelectItem value="dark">Mother</SelectItem>
              <SelectItem value="system">Son</SelectItem>
              <SelectItem value="system">Daugther</SelectItem>
              <SelectItem value="system">Parents</SelectItem>
              <SelectItem value="system">Sister</SelectItem>
              <SelectItem value="system">Brother</SelectItem>
              <SelectItem value="system">Uncle</SelectItem>
              <SelectItem value="system">Grandfather</SelectItem>
              <SelectItem value="system">Grandmother</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="card flex items-center w-auto gap-2 bg-gray-50 shadow-md rounded-lg p-4">
        <div className="bg-gray-100 p-2 rounded-full">
        <BriefcaseMedical className="text-blue-500 text-3xl"/>
        </div>
        <div>
          <Label className="text-gray-500 text-sm">Doctor</Label>
          <Input type="text" placeholder="Doctor Name" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default Salenavbar;
