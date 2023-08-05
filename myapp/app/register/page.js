'use client'

import React from 'react'

const Register = () => {
  return (
    <section className='flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow sm:px-6 md:px-8 lg:px-10 m-auto mt-24 bg-gray-900'>
    <h2 className='self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl'>Register</h2>
    <form>
        <div className='flex flex-col mb-2'>
        <div className='flex relative'>
        <input
        className='rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm w-full p-4'
          placeholder='Email'
          name='email'
          id='email'
          type='email'
    
        />
        </div>
        </div>
        <div className='flex flex-col mb-2'>
        <div className='flex relative'>
        <input
         className='rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm w-full p-4'
          placeholder='Password'
          name='password'
          id='password'
          type='password'
       
        />
           </div>
           </div>
           <div className='flex flex-col mb-2'>
        <div className='flex relative'>
        <input
          placeholder='Name'
          className='rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm w-full p-4'
          name='name'
          id='name'
          type='text'
     
        />
        </div>
        </div>
        <button
        className='py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg'
        type='submit'>Register</button>
      </form>   
    </section>
  )
}

export default Register