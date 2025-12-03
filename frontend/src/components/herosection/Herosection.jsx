import React from 'react'
import DailyStreak from './DailyStreak'
import Dashboard from './Dashboard'

const Herosection = () => {
  return (
    <div className='flex flex-col bg-gray-100'>
        <DailyStreak/>
        <Dashboard/>
    </div>
  )
}

export default Herosection