import React from 'react'
import { Navbar } from '../Navbar/Navbar'

const hero = () => {
  return (
    <div className=''>
        <Navbar />
        <div >
            <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white'>
                <h1 className='text-5xl font-bold'>Welcome to the Virtual Machine</h1>
                <p className='mt-4 text-lg'>A solution to the Machines which are in Progress</p>
                <div >
                <button className='mt-6 mr-6 w-2xs px-6 py-3 bg-white text-blue-500 rounded-full font-semibold hover:bg-gray-200 transition duration-300'>Create Your First Machine</button>
                <button className='mt-6 ml-6 w-2xs px-6 py-3 bg-white text-blue-500 rounded-full font-semibold hover:bg-gray-200 transition duration-300'>Start your Machine</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default hero