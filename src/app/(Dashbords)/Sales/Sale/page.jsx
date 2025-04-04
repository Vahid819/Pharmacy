import React from 'react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

function page() {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      {/* new sales page */}
      <div className="mb-4">
        <Link href={"/Sales/Newsale "}><Button className="bg-blue-500 text-white hover:bg-blue-700 font-bold py-2 px-4 rounded">
          New Sale
        </Button>
        </Link>
      </div>
      <Separator className="my-2" />
      <div>
        {/* sales history table */}
        {
        <div className='p-6 bg-white shadow-md rounded-lg w-full'>
          
        </div>
        }
      </div>
    </div>
  )
}

export default page
