'use client'
import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Page() {
  const [data, setData] = useState({ 
    firstname: 'Loading...', 
    lastname: 'Loading...' 
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/Admin/Staffdata')
      .then((response) => {
        // More flexible response handling
        const apiData = response.data?.currentStaffdata || response.data;
        
        if (apiData && (apiData.firstname || apiData.firstName)) {
          setData({
            firstname: apiData.firstname || apiData.firstName, // handles both cases
            lastname: apiData.lastname || apiData.lastName
          });
        } else {
          throw new Error('API data format not recognized');
        }
      }) 
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError(error.message);
        setData({ 
          firstname: 'Error', 
          lastname: 'Error' 
        });
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <p>API says: "{data.firstname}", "{data.lastname}"</p>
    </div>
  );
}

export default Page;