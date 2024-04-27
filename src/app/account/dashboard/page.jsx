import React from 'react'
import { auth } from '../../../utils/auth'
import { getSession } from '@auth0/nextjs-auth0';

const DashboardPage = async () => {
  const session = await getSession();
  return (
    <>
    <div>Hello from dashboard!</div>
    <pre>{JSON.stringify(session, null, 2)}</pre>
    </>
  )
}

export default DashboardPage;