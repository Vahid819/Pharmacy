'use client'
import React from 'react'
import { useState, useEffect } from 'react'

function page() {
  const [data, setData] = useState('Loadding....')

  useEffect(()=>{
    fetch('/api/About')
    .then(res => {
      if(!res.ok) throw new Error('Network response was not ok')
      return res.json()
    })
    .then(data => setData(data.message))
    .catch(err => setData(err.message))
  },[])

  return (
    <div>
      API saya: "{data}"
    </div>
  )
}

export default page
