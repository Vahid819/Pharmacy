"use client";
import Link from "next/link";
import React from "react";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { Menubar, MenubarTrigger, MenubarMenu } from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";
import {ArrowRight} from 'lucide-react'
import { ModeToggle } from "./Theme";

function Navbar(props) {
  const { isSignedIn } = useUser();
  const { isLoaded } = useUser();
  const userId  = props.userid;
  // console.log(userId);
  
  return (
    <div className="flex justify-around items-center p-4 bg-gray-800 text-white">
      <Link href={"/"}><div>Logo</div></Link>

      <div className="bg-bg-gray-800">
        <Menubar className={"bg-bg-gray-800 border-none"}>
          <MenubarMenu>
            <Link href={"/"} className="bg-gray-800 border-none">
              <MenubarTrigger className={"bg-gray-800 cursor-pointer border-none"}>
                Home
              </MenubarTrigger>
            </Link>
          </MenubarMenu>
          <MenubarMenu>
            <Link href={"/About"} className="bg-gray-800 border-none">
              <MenubarTrigger className={"bg-gray-800 cursor-pointer border-none"}>
                About
              </MenubarTrigger>
            </Link>
          </MenubarMenu>
          <MenubarMenu>
            <Link href={"/Features"} className="bg-gray-800 border-none">
              <MenubarTrigger className={"bg-gray-800 cursor-pointer border-none"}>
                Features
              </MenubarTrigger>
            </Link>
          </MenubarMenu>
          <MenubarMenu>
            <Link href={"/Pricing"} className="bg-gray-800 border-none">
              <MenubarTrigger className={"bg-gray-800 cursor-pointer border-none"}>
                Pricing
              </MenubarTrigger>
            </Link>
          </MenubarMenu>
          <MenubarMenu>
            <Link href={"/Services"} className="bg-bg-gray-800 border-none">
              <MenubarTrigger className={"bg-gray-800 cursor-pointer border-none hover:bg-gray-800"}>
                Services
              </MenubarTrigger>
            </Link>
          </MenubarMenu>
        </Menubar>
      </div>

      {isSignedIn ? (
        <div>{!isLoaded ? <p>Loadding....</p> : <div className="flex justify-center items-center gap-2"><UserButton /> <Link href={`/Dashboard/Users/${userId}`}><Button className={"border-2 cursor-pointer border-indigo-500 p-2 px-4 rounded-xl hover:bg-white hover:text-black"}>Dashbord<ArrowRight /></Button></Link></div>}</div>
      ) : (
        <div>
          {!isLoaded ? (
            <p>Loadding.....</p>
          ) : (
            <div className="flex gap-4 items-center justify-center">
              <Link
                href={"/sign-in"}
                className="border-2 border-indigo-500 p-2 px-4 rounded-xl hover:bg-gray-200 hover:text-black"
              >
                <div>Sign In</div>
              </Link>
              <Link
                href={"/sign-up"}
                className="border-2 border-indigo-500 p-2 px-4 rounded-xl hover:bg-gray-200 hover:text-black"
              >
                <div>Sign Up</div>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar;
