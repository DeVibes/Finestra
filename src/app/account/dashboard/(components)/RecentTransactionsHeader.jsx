import React from 'react'

const RecentTransactionsHeader = () => {
  return (
    <div className='flex justify-between mb-2'>
        <span className='text-xl'>Recent Transactions</span>
        <button className="text-catmauve">View All</button>
    </div>
  )
}

export default RecentTransactionsHeader