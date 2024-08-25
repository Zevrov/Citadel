import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Stats() {
  const [message, setMessage] = useState('');

  
  useEffect(() => {
    axios.get('http://localhost:5000/api/stats')
      .then(response => setMessage(response.data.message))
      .catch(error => console.error('Error fetching stats:', error));
  }, []);

  return (
    <div>
      <h1>Stats Page</h1>
      <p>{message}</p>
    </div>
  );
}

export default Stats;