import DashboardNavbar from "@/components/DashboardNavbar";
import {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

const metadata = {
  title: "User Dashboard",
  description: "User Dashboard",
};

export default function DashboardLayout({ children }) {
  // const { userId } = useAuth(req)
  // console.log("User ID:", userId)
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <SidebarTrigger />
        {children}
      </main >
    </SidebarProvider>
  );
}
