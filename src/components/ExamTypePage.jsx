import React, { useContext } from 'react'
import { configContext } from '../context/CdlConfig'
import { useNavigate, useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { createURLFromString } from '../helpers/createURLFromString'
import Config from './Config'

function isValidStateName(stateNameUrl, states) {
  return Object.values(states).find(name => name.replace(/\s+/g, '-').toLowerCase() === stateNameUrl.toLowerCase()) !== undefined
}
function stateNameFromURL(url, states) {
  return Object.values(states).find(name => name.replace(/\s+/g, '-').toLowerCase() === url.toLowerCase())
}

function ExamTypePage() {
  const { examTypes, setSelectedExamtype, states } = useContext(configContext)
  const navigate = useNavigate()
  const { stateName } = useParams()
  // Create the validation and conversion functions using the `states` object
  const isValid = isValidStateName(stateName, states)
  const originalStateName = stateNameFromURL(stateName, states)

  const location = useLocation()
  const currentPath = location.pathname

  const onExamTypeChange = examType => {
    setSelectedExamtype(examType)
    navigate(`${currentPath}/${createURLFromString(examType)}`)
  }

  useEffect(() => {
    if (!isValid) {
      // Redirect to a desired URL, for example to the main page
      navigate('/cdl')
    }
  }, [stateName, isValid, navigate])

  if (!isValid) {
    return null
  }

  return (
    <section className='gradient relative   w-screen h-screen flex flex-col justify-between overflow-hidden'>
      <div className='bg-lime-950 py-10'>
        <p className='text-center font-bold text-xl text-lime-50 capitalize'> {originalStateName} CDL </p>
      </div>
      <div className='mt-5 overflow-y-scroll h-full pt-14 '>
        <ul className=' w-screen flex flex-col  items-center px-4'>
          {Object.entries(examTypes).map(([key, value]) => {
            const isSelected = false
            return (
              <li className={`fade-up bg-gray-50 text-lime-950 font-semibold w-full  shadow shadow-blue-500/40 hover:shadow-indigo-500/40 text-lg  py-5  rounded-md mb-2 text-center ${isSelected ? 'selected' : 'unselected'}`} onClick={onExamTypeChange.bind(this, key)} key={key}>
                {key}
              </li>
            )
          })}
        </ul>
      </div>
      <Config />
    </section>
  )
}

export default ExamTypePage
