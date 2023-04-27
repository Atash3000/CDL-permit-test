import React, { useContext, useEffect, useState } from 'react'
import { configContext } from '../context/CdlConfig'

function Exam() {
  const { questionsArr, selectedExamType } = useContext(configContext)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [btnDisabled, setBtnDisable] = useState(true)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [corretAnswers, setCorrectAnwers] = useState([])
  const [wrongAnswers, setWrongAnswers] = useState([])
  const [testComleted, setTestComleted] = useState(false)
  const { title, options } = questionsArr[currentIndex] ?? {}
  const totalCount = questionsArr.length - 1

  const onSelectedAnswer = answer => {
    if (answer === questionsArr[currentIndex].answer) {
      setCorrectAnwers([...corretAnswers, questionsArr[currentIndex].id])
    } else {
      setWrongAnswers([...wrongAnswers, questionsArr[currentIndex].id])
    }
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

  useEffect(() => {
    if (questionsArr.length === currentIndex + 1) {
      setTestComleted(true)
    }
  }, [currentIndex])

  return (
    <section className='bg-lime-500 relative  w-screen h-screen flex flex-col justify-start  overflow-hidden'>
      <div className='bg-lime-950 text-lime-50 font-semibold flex flex-col items-center py-8'>
        <h3>{selectedExamType}</h3>
        <p>
          Question {currentIndex + 1} of {totalCount}
        </p>
      </div>
      {testComleted && (
        <div className=' w-full flex flex-col items-center justify-center'>
          <h3 className='text-lime-950 text-xl '>Test comleted</h3>
          <p className='text-lime-950 text-xl'> Total questions: {questionsArr.length - 1} </p>
          <p className='text-lime-950 text-xl'> Correct answers : {corretAnswers.length} </p>
          <p className='pb-4 text-lime-950 text-xl'>Wrongs answers : {wrongAnswers.length} </p>

          <button className='bg-lime-50 w-3/5 rounded-md py-2 mb-2 '>Restart test</button>
          <button className='bg-lime-50 w-3/5 rounded-md py-2 '>Go Back</button>
        </div>
      )}
      {!testComleted && (
        <>
          <div className='fade-left px-4 mt-4' key={currentIndex}>
            <p className='mb-4 text-lime-950 font-semibold'>{title}</p>
            <ul>
              {Object.entries(options).map(([key, value]) => {
                const isClicked = selectedAnswer && selectedAnswer === key
                const isAnswered = selectedAnswer !== null

                let bgColor = '#fff'

                if (isAnswered && key === questionsArr[currentIndex].answer) {
                  bgColor = 'green'
                } else if (isAnswered && isClicked) {
                  bgColor = 'red'
                }
                return (
                  <li style={{ background: bgColor }} className={` pl-2 pt-2  h-12 overflow-auto  mb-2 rounded-lg leading-tight text-base bg-lime-50 `} onClick={!isAnswered ? onSelectedAnswer.bind(this, key) : undefined} key={key}>
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
        </>
      )}
    </section>
  )
}

export default Exam
