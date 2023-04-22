import React from 'react'
import { Link } from 'react-router-dom'

function WelcomePage() {
  const onButtonClick = () => {}
  return (
    <section className='bg-lime-500 h-screen flex flex-col justify-between '>
      <div className='flex flex-col justify-center items-left h-1/2  px-8 '>
        <h1 className='fade-up font-bold text-3xl text-lime-950 '>CDL pro</h1>
        <h2 className='fade-up font-bold text-xl italic text-lime-100 ml-5 mt-1'>Pass Your Test with Confidence</h2>
      </div>
      <div className='h-1/2  flex items-end justify-center pb-12'>
        <Link to='/cdl' className='fade-up  text-center bg-lime-100 px-12 py-3 rounded-md w-4/5 mb-2 text-lime-950 font-semibold'>
          Continue
        </Link>
      </div>
    </section>
  )
}

export default WelcomePage
