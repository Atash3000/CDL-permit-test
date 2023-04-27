import React, { useContext } from 'react'
import { configContext } from '../context/CdlConfig'
import { useNavigate } from 'react-router-dom'

function StatesPage() {
  const { states, setSelectedState, selectedState, createURLFromString, setConfig, config } = useContext(configContext)
  const navigate = useNavigate()
  const onStateChange = stateName => {
    setSelectedState(stateName)
    navigate('/cdl/' + createURLFromString(stateName))
    setConfig(prevConfig => {
      if (!prevConfig[stateName]) {
        return { ...config, [stateName]: {} }
      } else {
        return prevConfig
      }
    })
  }
  console.log('setSelectedState :>> ', selectedState)
  return (
    <section className='bg-lime-500 relative  w-full   flex flex-col justify-start  '>
      <div className='bg-lime-950 py-10 flex justify-center items-center '>
        <p className='text-center font-semibold text-xl text-gray-50 '>Select Your State</p>
      </div>
      <div className='overflow-y-scroll pt-14 h-screen '>
        <ul className='w-screen flex flex-col items-center px-6 '>
          {Object.entries(states).map(([key, value]) => {
            const isSelected = selectedState === key
            return (
              <li className={`fade-up bg-lime-50 text-lime-950 text-lg font-semibold w-full  py-5  rounded-md mb-2 text-center ${isSelected ? 'selected' : 'unselected'}`} onClick={onStateChange.bind(this, key)} key={key}>
                {value}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default StatesPage
