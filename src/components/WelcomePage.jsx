import React from 'react'
import { Link } from 'react-router-dom'

function WelcomePage() {
  // useEffect(() => {
  //   // check if user has been before on website
  //   const lastSelectedState = localStorage.getItem('lastSelectedState')

  //   if (lastSelectedState) {
  //     navigate('/cdl/' + createURLFromString(lastSelectedState))
  //   }
  // }, [navigate])

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
        <h3 className='fade-up text-left text-xl mb-4'>Start your CDL journey with confidence by taking our free practice test!</h3>
        <p className=' fade-up text-sm'>We offer a variety of sample permit test questions and online cheat sheets to help you prepare for the real exam.</p>
      </div>
      <div className='  content-2 text-gray-100 px-4 py-6 '>
        <h4 className=' fade-up text-xl text-center font-medium mb-6'>Looking for help with the CDL permit test?</h4>
        <p className='fade-up'>
          Pass your CDL permit test with confidence using CDL Permit Pro's online practice test platform. Our comprehensive CDL permit practice tests cover all the topics you need to know, including general knowledge, air brakes, and hazardous materials. With detailed explanations and instant
          feedback for each question, CDL Permit Pro ensures that you have all the resources you need to pass your CDL permit test with flying colors. Don't wait any longer, try CDL Permit Pro today and take the first step towards becoming a licensed CDL driver
        </p>
      </div>
      <div className='content-1 text-gray-900 px-4 py-6 '>
        <h4 className='fade-up text-xl text-center  mb-6'>Pass Your CDL Permit Test with Flying Colors: Use CDL Permit Pro</h4>
        <p className='fade-up'>
          Looking to pass your CDL permit test and start your truck driving career with confidence? CDL Permit Pro has got you covered! Our online practice test platform provides comprehensive CDL permit practice tests covering all the necessary topics, along with detailed explanations and instant
          feedback to improve your knowledge and help you identify your weaknesses in real-time. Try CDL Permit Pro today and take the first step towards your new career as a licensed CDL driver
        </p>
      </div>
    </section>
  )
}

export default WelcomePage
