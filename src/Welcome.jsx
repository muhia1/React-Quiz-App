import React from 'react'
import reactLogo from '../public/react.png'

const Welcome = (onStart) => {
  return (
    <div className='flex flex-col items-center gap-6 text-center sm:8'>
        <img src={reactLogo} className='w-[200px] sm:w-[300px]' alt="" />


        <span className='text-lg font-semibold sm:text-3xl'>Test Your React Expertise!</span>

        <button className='text-7xl font-semibold sm:text-3xl hover:bg-green-600 text-red-600 p-1 w-1/2'>
          Start
        </button>

        <button onClick={onStart} className='w-1/2 rounded-full bg-black px-4 py-2 text-sm text-white hover:opacity-80 sm:w-13 sm-text-xl'>Start Quiz</button>
    </div>
  )
}

export default Welcome