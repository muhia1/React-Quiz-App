import React from 'react'
import Welcome from './Welcome'

const Header = () => {
  return (
    <div className='flex flex-col items-center text-center gap-6
    bg-green-800 from-l'>
      <li className='font-semibold text-gray-800 rounded-2xl
       hover:text-green-700'>Home</li>
      <li className='font-semibold rounded-3xl text-gray-800 hover:text-green-700'>About Us</li>
      <li className='text-gray-700 font-semibold hover:text-green-700 rounded-2xl'>Services</li>
      <li className='font-semibold text-gray-700 rounded-2xl hover:text-green-700'>Contact Us</li>
    </div>
  )
}

export default Header
