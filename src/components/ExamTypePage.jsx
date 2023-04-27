import React, { useContext } from 'react'
import { configContext } from '../context/CdlConfig'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function ExamTypePage() {
  const { selectedState, examTypes, setSelectedExamtype, selectedExamType, states, createURLFromString, config, setConfig } = useContext(configContext)
  const navigate = useNavigate()
  const location = useLocation()
  const currentPath = location.pathname

  const onExamTypeChange = examType => {
    setSelectedExamtype(examType)
    navigate(`${currentPath}/${createURLFromString(examType)}`)

    const newConfig = {
      ...config,
      [selectedState]: {
        ...config[selectedState],
        [examType]: {}
      }
    }

    setConfig(newConfig)
  }

  return (
    <section className='gradient relative   w-screen h-screen flex flex-col justify-between overflow-hidden'>
      <div className='bg-lime-950 py-10'>
        <p className='text-center font-bold text-xl text-lime-50'>{states[selectedState]} CDL </p>
      </div>
      <div className='mt-5 overflow-y-scroll h-full pt-14 '>
        <ul className=' w-screen flex flex-col  items-center px-4'>
          {Object.entries(examTypes).map(([key, value]) => {
            const isSelected = false
            return (
              <li className={`fade-up bg-lime-50 text-lime-950 font-semibold w-full  shadow-black text-lg  py-5  rounded-md mb-2 text-center ${isSelected ? 'selected' : 'unselected'}`} onClick={onExamTypeChange.bind(this, key)} key={key}>
                {key}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default ExamTypePage
