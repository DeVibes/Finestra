'use client'
import React, { useEffect, useState } from 'react'

const DashboardPage = () => {
  const [serverStatus, setServerStatus] = useState('test');

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => setServerStatus(data.text))
  }, []);

  return (
    <div><h1>Dashboard page</h1>{serverStatus}</div>
  )
}

export default DashboardPage;