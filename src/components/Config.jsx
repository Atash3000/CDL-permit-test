import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import { FiSettings } from 'react-icons/fi'

const Config = () => {
  const [showConfig, setShowConfig] = useState(false)
  const containerRef = useRef(null)
  const toggleButtonRef = useRef(null)
  const navigate = useNavigate()

  const toggleConfig = () => {
    setShowConfig(!showConfig)
  }

  useEffect(() => {
    const handleClickOutside = event => {
      // Check if the target is the toggle button, if so, do not close the config container
      if (toggleButtonRef.current && toggleButtonRef.current.contains(event.target)) {
        return
      }

      if (containerRef.current && !containerRef.current.contains(event.target)) {
        toggleConfig()
      }
    }

    if (showConfig) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showConfig, toggleConfig])

  return (
    <>
      <button ref={toggleButtonRef} onClick={toggleConfig} className='absolute top-10    right-6 rounded-sm '>
        <FiMenu color='#fff' size='25' />
      </button>

      <div className={`config-container overflow-hidden ${showConfig ? 'show' : ''}`} ref={containerRef}>
        <div className='text-white  w-full h-full flex flex-col items-start py-2 px-2  '>
          <button onClick={() => navigate('/cdl')} className='flex w-full flex-row items-center border-b-[0.5px] border-gray-400 pb-2  '>
            <FiSettings className='text-white' color='#fff' size='20' />
            <span className='ml-3'> Change State</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Config
