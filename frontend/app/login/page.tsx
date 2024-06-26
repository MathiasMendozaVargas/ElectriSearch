'use client';

// libraries
import React, { useState } from 'react'

// assets
import CarStation from '../assets/CarStation.png'

// icons
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

function Login () {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleLogin = async () => {
    // Make Post API call request to trigger backend login function
    const response = await fetch('http://localhost:4000/auth/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password })
    })
    if (response.ok){
      console.log(email);
      console.log(password);
      
      console.log('It worked');
      
    }
    else{
      console.log(response);
      
    }
  }
  

  return (
    <div className='w-full min-h-screen bg-green-900 pt-7'>
      <div className='block lg:flex text-center items-center px-10 md:px-20 pt-7 pb-16'>
        {/* Login Form */}
        <form className='w-[100%] md:w-[70%] lg:w-[40%] h-fit m-auto bg-neutral-900 p-6 rounded-lg block'>
          <h1 className='text-left text-2xl font-bold text-gray-100'>Login to your Account</h1>
          <div className='px-1'>
            <div className='w-full block lg:flex justify-between mt-5'>
              <a
                href='#'
                className='w-full lg:w-[48%] mb-5 md h-10 flex items-center gap-1 justify-center px-2 text-gray-300 border-gray-200 hover:bg-neutral-800 hover:text-white hover:scale-105 border-x border-y rounded-xl'
              >
                <FcGoogle />
                <p className='xl:text-sm text-xs font-bold font-opensans mb-0'>Log in with Google</p>
              </a>
              <a
                href='#'
                className='w-full lg:w-[48%] h-10 flex items-center gap-1 justify-center px-2 text-gray-300 border-gray-200 hover:bg-neutral-800 hover:text-white hover:scale-105 border-x border-y rounded-xl'
              >
                <FaApple />
                <p className='xl:text-sm text-xs font-bold font-opensans mb-0'>Log in with Apple</p>
              </a>
            </div>
            <div className='w-full flex items-center my-4'>
              <div className='w-[45%] h-[1px] bg-gray-300'></div>
              <p className='px-4 text-sm text-gray-200'>or</p>
              <div className='w-[45%] h-[1px] bg-gray-300'></div>
            </div>
            <h4 className='mt-2 text-left text-gray-100 mt-0'>Email</h4>
            <input
              type="email"
              id='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              className='w-[99%] h-10 m-auto px-3 my-2 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:border-indigo-700 focus:border-2'
              placeholder='Enter you email'
            />
            <h4 className='mt-2 text-left text-gray-100'>Password</h4>
            <input
              type="password"
              id='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              className='w-[99%] h-10 m-auto px-3 my-2 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:border-indigo-700 focus:border-2'
              placeholder='··········'
            />
            <div className='w-full flex items-center mt-3 justify-between'>
              <div className='flex gap-2 items-center text-left'>
                <input type="checkbox" className='w-[20px] h-[20px] hover:border-2 bg-gray-700 border-[1px] border-gray-400 rounded-md checked:border-2 hover:border-amber-500 checked:bg-amber-500 checked:border-amber-500 appearance-none' />
                <p className='text-gray-100 text-sm'>Show Password</p>
              </div>
              <a
                className='text-white hover:text-green-500 text-right text-sm'
                href="#"
              >Forgot Password?</a>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault()
                handleLogin()
              }}
              className='w-full h-10 mt-5 bg-indigo-700 hover:bg-indigo-600 text-sm text-gray-100 rounded-lg'
            >
              LOG IN
            </button>
            <div className='flex gap-2 text-left text-xs mt-5'>
              <p className='text-gray-400'>Don't have an account yet?</p>
              <a className='text-white hover:text-green-500' href="#">Sign up Here</a>
            </div>
          </div>
        </form>
        <img
          className='w-full lg:w-[50%] align-middle mt-10'
          src={CarStation.src}
        />
      </div>
    </div>
  )
}

export default Login;