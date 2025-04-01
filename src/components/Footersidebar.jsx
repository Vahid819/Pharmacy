import React from "react";
import Avtar from "./Avtar";
import Badge from "@mui/material/Badge";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  User2,
  ChevronUp,
  SidebarFooter,
} from "@/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Footersidebar() {
  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Badge badgeContent={5} color="primary" className="z-10"> 
              <SidebarMenuButton>
                {/* <User2 /> */}
                  <Avtar className={"bg-transparent"}/>
                Username
                {/* <ChevronUp className="ml-auto" /> */}
              </SidebarMenuButton>
                </Badge>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="top"
              className="w-[--radix-popper-anchor-width]"
            >
              <DropdownMenuItem>
                <span>Account</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Billing</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Sign out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
}

export default Footersidebar;
