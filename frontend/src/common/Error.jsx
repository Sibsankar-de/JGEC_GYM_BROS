import React from 'react'

const Error = ({error}) => {
  return (
    <div>
        <h1 className='text-3xl font-bold text-red-600'>Error Occurred!</h1>
        <p className='text-xl mt-4'>{error}</p>
        
    </div>
  )
}

export default Error