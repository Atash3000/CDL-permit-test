import React, { useContext, useEffect, useState } from 'react'
import { configContext } from '../context/CdlConfig'
import { useLocation, useNavigate } from 'react-router-dom'

function Exam() {
  const location = useLocation()
  const navigate = useNavigate()
  const currentPath = location.pathname
  const { questionsArr, selectedExamType, selectedExamPart } = useContext(configContext)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [btnDisabled, setBtnDisable] = useState(true)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [corretAnswers, setCorrectAnwers] = useState([])
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false)
  const [wrongAnswers, setWrongAnswers] = useState([])
  const [testComleted, setTestComleted] = useState(false)
  const { title, options, explanation } = questionsArr[currentIndex] ?? {}
  const totalCount = questionsArr.length

  const onSelectedAnswer = answer => {
    if (answer === questionsArr[currentIndex].answer) {
      setIsAnswerCorrect(true)
      setCorrectAnwers([...corretAnswers, questionsArr[currentIndex].id])
    } else {
      setIsAnswerCorrect(false)

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

  const handleGoback = () => {}

  useEffect(() => {
    if (questionsArr.length === currentIndex + 1) {
      setTestComleted(true)
    }
  }, [currentIndex])

  return (
    <section className='relative gradient-2 bg-gray-50  w-screen h-screen flex flex-col justify-start  overflow-hidden'>
      <div className='bg-lime-950 text-lime-50 font-semibold flex flex-col items-center py-4'>
        <h3 className='text-base'>{selectedExamType}</h3>
        <p className='text-base'>
          Question {currentIndex + 1} of {totalCount}
        </p>
      </div>
      {testComleted && (
        <div className=' w-full mt-4  flex flex-col items-center justify-center font-medium '>
          <h3 className='text-lime-950 text-xl capitalize  '>{selectedExamPart} completed</h3>
          <p className='text-lime-950 text-xl'> Total questions: {questionsArr.length - 1} </p>
          <p className='text-lime-950 text-xl'> Correct answers : {corretAnswers.length} </p>
          <p className='pb-4 text-lime-950 text-xl'>Wrongs answers : {wrongAnswers.length} </p>

          <button className='bg-lime-50 w-3/5 rounded-md py-2 mb-2 '>Restart test</button>
          <button onClick={handleGoback} className='bg-lime-50 w-3/5 rounded-md py-2 '>
            Go back
          </button>
        </div>
      )}
      {!testComleted && (
        <>
          <div className='fade-left px-4 mt-4' key={currentIndex}>
            <p className='mb-2 text-gray-900 font-medium text-lg'>{title}</p>
            <ul>
              {Object.entries(options).map(([key, value]) => {
                const isClicked = selectedAnswer && selectedAnswer === key
                const isAnswered = selectedAnswer !== null

                let bgColor = '#fff'

                if (isAnswered && key === questionsArr[currentIndex].answer) {
                  bgColor = '#78d623'
                } else if (isAnswered && isClicked) {
                  bgColor = '#ff1744'
                }
                return (
                  <li
                    style={{ background: bgColor }}
                    className={` px-2 py-6 border-solid border-2 border-gray-500   h-16 flex items-center justify-start  overflow-hidden  mb-2 rounded-lg leading-tight text-base bg-lime-50 `}
                    onClick={!isAnswered ? onSelectedAnswer.bind(this, key) : undefined}
                    key={key}
                  >
                    {value}
                  </li>
                )
              })}
            </ul>
          </div>
          {selectedAnswer && !isAnswerCorrect && (
            <div className='explanation px-4  '>
              <p className='text-gray-900 text-left italic '>{explanation}</p>
            </div>
          )}
          <div className='flex flex-row items-center justify-end px-8 mt-4 '>
            <button disabled={btnDisabled} className={`${!btnDisabled ? 'opacity-1' : 'opacity-0'} bg-lime-950 text-gray-100 rounded-md w-full py-3 text-lg mt-4 font-semibold`} onClick={onHandleNext}>
              Next
            </button>
          </div>
        </>
      )}
    </section>
  )
}

export default Exam
