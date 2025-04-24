import DashboardNavbar from "@/components/DashboardNavbar"


const metadata = {
    title: "User Dashboard",
    description: "User Dashboard",

}

export default function DashboardLayout({children}){
    return(
        <div>
            <div>
                <DashboardNavbar />
                {children}
            </div>
        </div>
    )

}