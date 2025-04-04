import React from "react";
import { TableDemo } from "@/components/TableDemo";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

function page() {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg border border-gray-200">
      <div>
        <Input placeholder="Product name" className="w-full mb-2" />
      </div>
      <Separator className="mb-4" />
      <div>
        <TableDemo />
      </div>
    </div>
  );
}

export default page;
