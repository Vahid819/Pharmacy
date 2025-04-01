import React from "react";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  User2,
  ChevronUp,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Home",
    url: "/Dashbord",
    icon: Home,
  },
  {
    title: "Sales",
    url: "#",
    icon: Home,
  },
  {
    title: "Purchases",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Inventory",
    url: "#",
    icon: Calendar,
  },
];

function Mainsidebar() {
  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Application</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  );
}

export default Mainsidebar;
