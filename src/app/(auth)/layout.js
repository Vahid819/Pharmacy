const metadata = {
  title: "Auth",
  description: "Authentication pages",
};

export default function AuthLayout({ children }) {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100">
      {children}
    </div>
  );
}
