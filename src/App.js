import WelcomePage from './components/WelcomePage'
import { Routes, Route } from 'react-router-dom'
import ExamTypePage from './components/ExamTypePage'
import ExamParts from './components/ExamParts'
import StatesPage from './components/StatesPage'
import Exam from './components/Exam'
import NotFoundPage from './components/NotFoundPage'
import { Helmet } from 'react-helmet'
import { Fragment } from 'react'
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <Fragment>
      <Helmet>
        <title>CDL Permit Pro - Pass Your CDL Permit Test with Confidence</title>
        <meta
          name='description'
          content="CDL Permit Pro is a comprehensive online practice test platform designed to help you pass your CDL permit test with confidence. Our app offers a variety of CDL permit practice tests covering all topics, including general knowledge, air brakes, and hazardous materials. With detailed explanations and instant feedback, you'll be able to identify your weaknesses and improve your knowledge. Try CDL Permit Pro today and get ready to ace your CDL permit test\!"
        />
        <meta name='keywords' content='CDL, Permit, Test, Practice, Platform , Truck permit ,road test, road permit test' />
        <meta name='robots' content='index, follow' />
        <meta name='author' content='Atamurad B' />
        <meta name='language' content='en' />
        <meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
      </Helmet>
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/cdl' element={<StatesPage />} />
        <Route path='/cdl/:stateName' element={<ExamTypePage />} />
        <Route path='/cdl/:usersState/:examType' element={<ExamParts />} />
        <Route path='/cdl/:usersState/:examType/:examPart' element={<Exam />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Analytics />
    </Fragment>
  )
}

export default App
