import React, { useContext, useState } from 'react'
import { configContext } from '../context/CdlConfig'

function Exam() {
  const { questionsArr, selectedExamType } = useContext(configContext)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [btnDisabled, setBtnDisable] = useState(true)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const { title, options } = questionsArr[currentIndex] ?? {}
  const totalCount = questionsArr.length

  const onSelectedAnswer = answer => {
    setSelectedAnswer(answer)
    setBtnDisable(false)
  }

  const onHandleNext = () => {
    if (currentIndex < questionsArr.length - 1) {
      setBtnDisable(true)
      setCurrentIndex(currentIndex + 1)
      setSelectedAnswer(null)
    }
  }

  return (
    <section className='bg-lime-500 relative  w-screen h-screen flex flex-col justify-start  overflow-hidden'>
      <div className='bg-lime-950 text-lime-50 font-semibold flex flex-col items-center py-8'>
        <h3>{selectedExamType}</h3>
        <p>
          Question {currentIndex + 1} of {totalCount}
        </p>
      </div>
      <div className='fade-left px-4 mt-4' key={currentIndex}>
        <p className='mb-4 text-lime-950 font-semibold'>{title}</p>
        <ul>
          {Object.entries(options).map(([key, value]) => {
            const isClicked = selectedAnswer && selectedAnswer === key
            const isAnswered = selectedAnswer !== null

            let bgColor = 'bg-lime-50'

            if (isAnswered && key === questionsArr[currentIndex].answer) {
              bgColor = 'bg-green-500'
            } else if (isAnswered && isClicked) {
              bgColor = 'bg-red-500'
            }
            return (
              <li className={` pl-2 pt-2  h-12 overflow-auto  mb-2 rounded-lg leading-tight text-base bg-lime-50 ${bgColor}`} onClick={!isAnswered ? onSelectedAnswer.bind(this, key) : undefined} key={key}>
                {value}
              </li>
            )
          })}
        </ul>
      </div>
      <div className='flex flex-row items-center justify-end px-8 mt-4 '>
        <button disabled={btnDisabled} className={`${!btnDisabled ? 'opacity-1' : 'opacity-0'} bg-lime-50 rounded-md w-1/2 py-1 font-semibold`} onClick={onHandleNext}>
          Next
        </button>
      </div>
    </section>
  )
}

export default Exam
