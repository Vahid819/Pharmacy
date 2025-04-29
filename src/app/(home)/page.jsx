  'use client'
  import React, { useState, useEffect } from 'react'

  function Page() {
    const [data, setData] = useState({ firstName: 'Loading...', lastName: 'Loading...' });
    const [count, setCount] = useState('Loading...');

    useEffect(() => {
      fetch('/api/Admin/Staffdata')
      .then((response)=>{
        if(!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data)=>{
        setData(data.Info);
        setCount(data.Count);
      }) 
      .catch((error)=>{
        console.error('Error fetching data:', error);
        setData({ firstname: 'Error', lastname: 'Error' });
        setCount('Error');
      })
        
    }, []);

    return (
      <div>
        <p>API says: "{data.firstname}", "{data.lastname}"</p>
        <p>Total number of staff: "{count}"</p>
      </div>
    );
  }

  export default Page;
