import React, { useContext } from 'react'
import { configContext } from '../context/CdlConfig'
import { useNavigate } from 'react-router-dom'

function StatesPage() {
  const { states, setSelectedState, selectedState, createURLFromString } = useContext(configContext)
  const navigate = useNavigate()
  const onStateChange = stateName => {
    setSelectedState(stateName)
    navigate('/cdl/' + createURLFromString(stateName))

    // setConfig(prevConfig => {
    //   if (!prevConfig[stateName]) {
    //     return { ...config, [stateName]: {} }
    //   } else {
    //     return prevConfig
    //   }
    // })
  }
  console.log('setSelectedState :>> ', selectedState)
  return (
    <section className='bg-lime-500 relative   w-screen h-screen flex flex-col justify-between overflow-hidden'>
      <div className='bg-lime-950 py-8'>
        <p className='text-center font-bold text-lime-100'>Select Your State</p>
      </div>
      <div className='mt-5 overflow-y-scroll'>
        <ul className=' w-screen flex flex-col items-center  '>
          {Object.entries(states).map(([key, value]) => {
            const isSelected = selectedState === key
            return (
              <li className={`fade-up bg-lime-50 text-lime-950 font-semibold w-4/5  py-3  rounded-md mb-2 text-center ${isSelected ? 'selected' : 'unselected'}`} onClick={onStateChange.bind(this, key)} key={key}>
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
