import Navbar from "@/components/Navbar";
import {auth} from "@clerk/nextjs/server";


export default async function LandingLayout({ children }) {
  const { userId } = await auth();
  // console.log("userId:", userId); // Debug here

  return (
    <div>
      <Navbar userid={userId} />
      {children}
    </div>
  );
}