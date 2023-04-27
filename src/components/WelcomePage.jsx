import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

function WelcomePage() {
  const onButtonClick = () => {}
  return (
    <section className='bg-lime-50 h-screen flex flex-col  '>
      <header className='bg-image text-gray-50 pb-12  '>
        <div className='inner-header fade-up w-4/5 md:w-2/3  m-auto '>
          <div className='logo mt-6'>
            <img src={require('../assets/images/logo.png')} alt='CDL Permit PRO Logo' className='w-1/2 m-auto' />
          </div>
          <div className='mt-12 md:mt-16'>
            <p style={{ lineHeight: '1.5' }} className='text-3xl  md:text-7xl font-medium md:font-normal text-center mb-6 tracking-wide'>
              Ace your permit test with our straightforward solution
            </p>
            <h3 className=' text-center font-semibold text-base md:text-2xl'>Select your state to get started</h3>
          </div>
          <div className='flex items-center justify-center mt-8 md:mt-14 shadow-black  m-auto w-full md:w-2/5 bg-lime-600 hover:bg-lime-500 rounded-md '>
            <Link to='/cdl' className='w-full py-2 md:py-6 k text-center text-gray-50 '>
              <span className='block text-2xl md:text-4xl font-normal tracking-wider'>Start Now! </span>
              <span className='block tracking-tight text-base md:text-xl font-normal mt-1 md:mt-2'>--- Free of charge ---</span>
            </Link>
          </div>
        </div>
      </header>
      <div className='content-1 px-6 py-10'>
        <h3 className='text-left text-xl mb-4'>Start with a free CDL permit practice test!</h3>
        <p className=' text-sm'>We offer a variety of sample permit test questions and online cheat sheets to help you prepare for the real exam.</p>
      </div>
      <div className='content-2 bg-gray-900 text-gray-100 px-4 py-6 '>
        <h4 className='text-2xl text-center font-medium mb-6'>Studying for the permit test?</h4>
        <p>
          At CDL Permit Pro, we understand how challenging it can be to pass the CDL permit test on your first try. That's why we've created a comprehensive online practice test platform to help you prepare and gain the confidence you need to ace the exam. Our app offers a variety of CDL permit
          practice tests covering all topics, including general knowledge, air brakes, and hazardous materials. We also provide detailed explanations and instant feedback to help you identify your weaknesses and improve your knowledge. With CDL Permit Pro, you'll have everything you need to pass
          your CDL permit test with confidence. Try it today and get ready to start your journey on the open road!
        </p>
      </div>
    </section>
  )
}

export default WelcomePage
