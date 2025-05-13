import { Home, Tag, LayoutList, ShoppingBag, Settings } from "lucide-react"


import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/Dashboard/Users/",
    icon: Home,
  },
  {
    title: "Sale",
    icon: Tag,
  },
  {
    title: "Purchase",
    icon: ShoppingBag,
  },
  {
    title: "Inventory",
    icon: LayoutList,
  },
  {
    title: "Settings",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar variant="sidebar | floating | inset" >
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
      <SidebarFooter>
        Hello world
      </SidebarFooter>
    </Sidebar>
  )
}
