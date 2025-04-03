import React from "react";
import { MenubarDemo } from "./Menubar";
// import Search from "./Search";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

function Navbar() {
  return (
    <div className="w-full flex gap-4 justify-around">
      <div>
        <MenubarDemo />
      </div>
      {/* <Search /> */}
      <div className="flex items-center gap-2">
        
        <Input type="text" placeholder="Search..." className="w-full" />
      </div>
      {/* Save data */}
      <div>
        <Button className="bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ease-in-out">
          Save
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
