// 'use server'
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import Link from "next/link";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from "./ui/menubar";
// import bcrypt from "bcryptjs";
import { Home } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { ModeToggle } from "@/components/Theme";

async function DashboardNavbar() {
  const { userId } = await auth();
  // const bycrept_id = bcrypt.hash(userId,10)
  return (
    <div>
      <div className="flex items-center border rounded-b-2xl justify-around p-4 shadow-md">
        <div>
          <Link href={`/Dashboard/Users/${userId}`}>
            <Home />
          </Link>
        </div>
        <div>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Sale</MenubarTrigger>
              <MenubarContent>
                <Link href={`/Dashboard/Users/Sales/Sale`}>
                  <MenubarItem>Sale</MenubarItem>
                </Link>
                <Link href={"/Dashboard/Users/Sales/NewSale"}>
                  <MenubarItem>New Sale</MenubarItem>
                </Link>
                <Link href={"/Dashboard/Users/Sales/SaleHistory"}>
                  <MenubarItem>Sale History</MenubarItem>
                </Link>
                <Link href={"/Dashboard/Users/Sales/SaleReturn"}>
                  <MenubarItem>Sale Return</MenubarItem>
                </Link>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Purchase</MenubarTrigger>
              <MenubarContent>
                <Link href={"/Dashboard/Users/Purchases/Purchase"}>
                  <MenubarItem>Purchase</MenubarItem>
                </Link>
                <Link href={"/Dashboard/Users/Purchases/NewPurchase"}>
                  <MenubarItem>New Purchase</MenubarItem>
                </Link>
                <Link href={"/Dashboard/Users/Purchases/PurchaseHistory"}>
                  <MenubarItem>Purchase History</MenubarItem>
                </Link>
                <Link href={"/Dashboard/Users/Purchases/PurchseReturn"}>
                  <MenubarItem>Purchase Return</MenubarItem>
                </Link>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Inventory</MenubarTrigger>
              <MenubarContent>
                <Link href={"/Dashboard/Users/Inventorys/Inventory"}>
                  <MenubarItem>Inventory</MenubarItem>
                </Link>
                <Link href={"/Dashboard/Users/Inventorys/NewInventory"}>
                  <MenubarItem>New Inventory</MenubarItem>
                </Link>
                <Link href={"/Dashboard/Users/Inventorys/InventoryHistory"}>
                  <MenubarItem>Inventory History</MenubarItem>
                </Link>
                <Link href={"/Dashboard/Users/Inventorys/InventoryReturn"}>
                  <MenubarItem>Inventory Return</MenubarItem>
                </Link>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>

        <div className="flex items-center space-x-4">
          <ModeToggle />
          <UserButton />
        </div>
      </div>
    </div>
  );
}

export default DashboardNavbar;
