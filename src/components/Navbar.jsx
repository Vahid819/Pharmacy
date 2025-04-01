import React from "react";
import { MenubarDemo } from "./Menubar";
// import Search from "./Search";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex gap-4">
      <MenubarDemo />
      {/* <Search /> */}
    </div>
  );
}

export default Navbar;
