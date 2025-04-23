import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
      <Link href={"/sign-in"}>Sign In</Link>
      <Link href={"/sign-up"}>Sign Up</Link>
    </div>
  )
}

export default page
