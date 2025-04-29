import DashboardNavbar from "@/components/DashboardNavbar"
// import { useAuth } from "@clerk/nextjs"


const metadata = {
    title: "User Dashboard",
    description: "User Dashboard",
}

export default function DashboardLayout({children}){
    // const { userId } = useAuth(req)
    // console.log("User ID:", userId)
    return(
        <div>
            <div>
                <DashboardNavbar />
                {children}
            </div>
        </div>
    )

}