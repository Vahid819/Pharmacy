import UserNavbar from "@/components/UserNavbar";

export const metadata = {
  title: "User Dashboard",
  description: "User Dashboard",
};

export default async function UserLayout({ children, params }) {
  const { users } = await params;

  return (
    <div>
      <div>
        <UserNavbar userId={users} />
        {children}
      </div>
    </div>
  );
}
