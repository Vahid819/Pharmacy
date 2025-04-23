
export const metadata = {
    title: "Sign up",
    description: "This is the sign up page",
  };

export default function AuthLayout({ children }) {
  return (
    <div>
      <div>
        {children}
      </div>
    </div>
  )
}