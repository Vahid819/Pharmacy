import React from 'react'

function Notfound() {
  return (
    <div>
        <h1 className="text-2xl font-bold">User Not Found</h1>
        <p className="text-gray-500">Please check the user ID and try again.</p>
        <Link href="/Dashboard/Users" className="text-blue-500 hover:underline">Go back to Users</Link>
    </div>
  )
}

export default Notfound