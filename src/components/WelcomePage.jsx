import React from 'react'
import { Link } from 'react-router-dom'

function WelcomePage() {
  const onButtonClick = () => {}
  return (
    <section className='bg-lime-50 h-screen flex flex-col justify-between '>
      <header className='bg-image text-gray-50  '>
        <div className='inner-header fade-up w-4/5 md:w-2/3  m-auto '>
          <div className='logo mt-6'>
            <h1 className=' text-gray-50  text-2xl md:text-4xl text-center font-semibold'>
              CDL Permit <small className='text-lime-500 '> pro</small>
            </h1>
          </div>
          <div className='mt-12 md:mt-16   '>
            <p style={{ lineHeight: '1.5' }} className='text-3xl  md:text-7xl font-medium md:font-normal text-center mb-6 tracking-wide'>
              Ace your permit test with our straightforward solution
            </p>
            <h3 className=' text-center font-semibold text-base md:text-2xl'>Select your state to get started</h3>
          </div>
          <div className='flex items-center justify-center mt-8 md:mt-14  m-auto w-full md:w-2/5 bg-lime-600 hover:bg-lime-500 '>
            <Link to='/cdl' className='rounded-md py-2 md:py-6 shadow-black text-center text-gray-50 '>
              <span className='block text-2xl md:text-4xl font-normal tracking-wider'>Start Now! </span>
              <span className='block tracking-tight text-base md:text-xl font-normal mt-1 md:mt-2'>Free of charge</span>
            </Link>
          </div>
        </div>
      </header>
    </section>
  )
}

export default WelcomePage
{
  /* <div className='flex flex-col justify-center items-left h-1/2  px-8 '>
<h1 className='fade-up font-bold text-3xl text-lime-950 '>CDL pro</h1>
<h2 className='fade-up font-bold text-xl italic text-lime-100 ml-5 mt-1'>Ace your permit test with our straightforward solution</h2>
</div>
<div className='h-1/3  flex items-center justify-center '>
<Link to='/cdl' className='fade-up  text-center bg-lime-100 px-12 py-3 rounded-md w-4/5 mb-2 text-lime-950 font-semibold'>
  Start Now
</Link>
</div> */
}
