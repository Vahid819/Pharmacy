import { Home, Tag, LayoutList, ShoppingBag, Settings } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/Theme";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// Sidebar menu configuration
const sidebarItems = [
  {
    title: "Home",
    icon: Home,
    url: "/Dashboard/Users",
  },
  {
    title: "Sale",
    icon: Tag,
    subItems: [
      { label: "New Sale", url: "/Dashboard/Users/Sales/NewSale" },
      { label: "Sales History", url: "/Dashboard/Users/Sales/Sale" },
      { label: "Sales Return", url: "/Dashboard/Users/Sales/SaleReturn" },
    ],
  },
  {
    title: "Purchase",
    icon: ShoppingBag,
    subItems: [
      { label: "New Purchase", url: "/Dashboard/Users/Purchases/NewPurchase" },
      { label: "Purchase History", url: "/Dashboard/Users/Purchases/Purchase" },
      {
        label: "Purchase Return",
        url: "/Dashboard/Users/Purchases/PurchseReturn",
      },
    ],
  },
  {
    title: "Inventory",
    icon: LayoutList,
    url: "/Dashboard/Users/Inventory",
  },
  {
    title: "Settings",
    icon: Settings,
    url: "/Dashboard/Users/Settings",
  },
];

export function AppSidebar() {
  return (
    <Sidebar variant="floating" collapsible="icon">
      <Collapsible
        defaultOpen
        className={"h-full flex flex-col justify-between group/collapsible"}
      >
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {sidebarItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    {item.subItems ? (
                      <Collapsible
                        defaultOpen
                        className="group/collapsible w-full"
                      >
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton>
                            <item.icon />
                            <span>{item.title}</span>
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.subItems.map((sub) => (
                              <SidebarMenuSubItem key={sub.label}>
                                <SidebarMenuSubButton asChild>
                                  <Link href={sub.url}>
                                    <span>{sub.label}</span>
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </Collapsible>
                    ) : item.url ? (
                      <SidebarMenuButton asChild>
                        <Link href={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    ) : (
                      <SidebarMenuButton>
                        <item.icon />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <div className="flex flex-wrap justify-around items-center gap-2">
            <ModeToggle />
            <UserButton />
          </div>
        </SidebarFooter>
      </Collapsible>
    </Sidebar>
  );
}
