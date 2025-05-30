import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import ComboboxDemo from "@/components/Combobox";
import { Input } from "@/components/ui/input";

async function UserNavbar({ userId }) {
  if (!userId) {
    redirect('/Error'); // ✅ Simple and correct
  }

  return (
    <div className="flex w-full items-center justify-around p-4">
      <div>
        <ComboboxDemo />
      </div>

      <div>
        <Menubar>
          <MenubarMenu>
            <Link href={`/Dashboard/Users/${userId}`}>
              <MenubarTrigger>Overview</MenubarTrigger>
            </Link>
          </MenubarMenu>
          <MenubarMenu>
            <Link href={`/Dashboard/Users/${userId}/Distributar`}>
              <MenubarTrigger>Distributar</MenubarTrigger>
            </Link>
          </MenubarMenu>
          <MenubarMenu>
            <Link href={`/Dashboard/Users/${userId}/Products`}><MenubarTrigger>Products</MenubarTrigger></Link>
          </MenubarMenu>
          <MenubarMenu>
            <Link href={`/Dashboard/Users/${userId}/Setting`}><MenubarTrigger>Setting</MenubarTrigger></Link>
          </MenubarMenu> 
        </Menubar>
      </div>

      <div>
        <Input placeholder="Search..." className="w-80" />
      </div>
    </div>
  );
}

export default UserNavbar;
