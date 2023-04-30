import React from 'react'
import { Link } from 'react-router-dom'

function WelcomePage() {
  const onButtonClick = () => {}
  return (
    <section className='h-screen flex flex-col relative '>
      <header className='relative min-h-[70vh] text-gray-50'>
        <div className='bg-image'></div>
        <div className='h-full relative flex flex-col justify-end items-center pb-6'>
          <img src={require('../assets/images/logo.png')} alt='CDL Permit PRO Logo' className='fade-up  w-1/3  md:w-1/4 lg:w-1/5 m-auto  mt-4 sm:mt-6' />
          <div style={{ left: '50%' }} className=' absolute  top-[30%] transform -translate-x-1/2 -translate-y-1/2  w-full px-6'>
            <p style={{ lineHeight: '1.7' }} className='  fade-up text-lg min-[350px]:text-2xl min-[450px]:text-3xl md:text-4xl font-medium   text-center  tracking-wide'>
              Ace your permit test with our straightforward solution
            </p>
          </div>
          <Link to='/cdl' className=' fade-up  rounded-md bg-[#65a30c] hover:bg-[rgb(133,197,42)]  w-[65%] min-[400px]:w-[55%] min-[530px]:w-[45%] md:w-[40%] lg:w-[25%] py-2 md:py-4 lg:py-5 px-2 text-center text-gray-50 '>
            <span className='block text-lg md:text-xl lg:text-2xl  font-normal tracking-wider'>Start Now! </span>
            <span className='block tracking-tight text-sm md:text-base lg:text-lg font-normal mt-1'>--- Free of charge ---</span>
          </Link>
        </div>
      </header>
      <div className='content-1 px-6 py-10 '>
        <h3 className='fade-up text-left text-xl mb-4'>Start with a free CDL permit practice test!</h3>
        <p className=' fade-up text-sm'>We offer a variety of sample permit test questions and online cheat sheets to help you prepare for the real exam.</p>
      </div>
      <div className='  content-2 bg-gray-900 text-gray-100 px-4 py-6 '>
        <h4 className=' fade-up text-2xl text-center font-medium mb-6'>Studying for the permit test?</h4>
        <p className='fade-up'>
          At CDL Permit Pro, we understand how challenging it can be to pass the CDL permit test on your first try. That's why we've created a comprehensive online practice test platform to help you prepare and gain the confidence you need to ace the exam. Our app offers a variety of CDL permit
          practice tests covering all topics, including general knowledge, air brakes, and hazardous materials. We also provide detailed explanations and instant feedback to help you identify your weaknesses and improve your knowledge. With CDL Permit Pro, you'll have everything you need to pass
          your CDL permit test with confidence. Try it today and get ready to start your journey on the open road!
        </p>
      </div>
    </section>
  )
}

export default WelcomePage
