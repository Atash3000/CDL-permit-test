import WelcomePage from './components/WelcomePage'
import { Routes, Route } from 'react-router-dom'
import ExamTypePage from './components/ExamTypePage'
import ExamParts from './components/ExamParts'
import StatesPage from './components/StatesPage'
import Exam from './components/Exam'
import NotFoundPage from './components/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<WelcomePage />} />
      <Route path='/cdl' element={<StatesPage />} />
      <Route path='/cdl/:usersState' element={<ExamTypePage />} />
      <Route path='/cdl/:usersState/:examType' element={<ExamParts />} />
      <Route path='/cdl/:usersState/:examType/:examPart' element={<Exam />} />
      <Route element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
