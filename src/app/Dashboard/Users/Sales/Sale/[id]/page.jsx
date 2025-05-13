import React from 'react'

async function page({params}) {
    const { users } = await params;
  return (
    <div>page</div>
  )
}

export default page