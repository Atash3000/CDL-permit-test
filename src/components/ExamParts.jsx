import React, { useContext } from 'react'
import { configContext } from '../context/CdlConfig'
import { useLocation, useNavigate } from 'react-router-dom'

function ExamParts() {
  const { selectedExamType, examTypes, createExamParts, setSelectedExamPart, examParts } = useContext(configContext)
  const location = useLocation()
  const navigate = useNavigate()
  const currentPath = location.pathname

  const onExamPartChange = examPart => {
    setSelectedExamPart(examPart)
    navigate(`${currentPath}/${examPart}`)
  }
  //   const examQuestionsArr = examTypes[selectedExamType] ?? []

  //   let partCount = 0
  //   if (selectedExamType === 'General Knowledge') {
  //     partCount = 3
  //   } else {
  //     partCount = 2
  //   }

  //   const examParts = createExamParts(examQuestionsArr, partCount)
  return (
    <section className='gradient relative   w-screen h-screen flex flex-col justify-between overflow-hidden'>
      <div className='bg-lime-950 py-10'>
        <p className='text-center font-bold text-xl text-lime-50'> {selectedExamType} </p>
      </div>
      <div className='mt-5 overflow-y-scroll h-full pt-14'>
        <ul className=' w-screen flex flex-col items-center px-4 '>
          {Object.entries(examParts).map(([key, value]) => {
            const isSelected = false
            return (
              <li className={`fade-up bg-gray-50 text-lime-950 font-semibold w-full  py-5 text-lg shadow shadow-blue-500/40 hover:shadow-indigo-500/40  capitalize rounded-md mb-2 text-center ${isSelected ? 'selected' : 'unselected'}`} onClick={onExamPartChange.bind(this, key)} key={key}>
                {key}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default ExamParts
