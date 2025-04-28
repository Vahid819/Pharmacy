import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <div>
        <h1 className="text-3xl font-bold underline text-center">404</h1>
        <h2 className="text-2xl font-bold text-center">This page is not Found</h2>
        <p className="text-lg text-center">Please check the URL or go back to the homepage.</p>
        <div className="flex justify-center mt-4">
            <Link href="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Go to Homepage</Link>
            </div>
    </div>
  )
}

export default page