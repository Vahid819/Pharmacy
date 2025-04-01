import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
// import Headersidebar from "./Headersidebar";
import Mainsidebar from "./Mainsidebar";
import Footersidebar from "./Footersidebar";
import {
  Sidebar,
  User2,
  ChevronUp,

} from "@/components/ui/sidebar";

export function AppSidebar() {
  return (
    <Sidebar
      className="w-64 h-screen bg-white shadow-lg"
      variant="floating"
      collapsible="icon"
    >
      {/* <Headersidebar /> */}
      <Mainsidebar />
      <Footersidebar />
    </Sidebar>
  );
}
