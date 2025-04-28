'use client'
import React from 'react'
import { useState, useEffect } from 'react'

function page() {
  const [data, setData] = useState('Loadding....')

  useEffect(()=>{
    fetch('/api/Admin/Staffdata')
    .then(res => {
      if(!res.ok) throw new Error('Network response was not ok')
      return res.json()
    })
    .then(data => {setData(data.name); console.log(data.name)})
    .catch(err => {setData(err.message); console.log(err.message)})

    console.log(data)
  },[])

  return (
    <div>
      API saya: "{data}"
    </div>
  )
}

export default page
