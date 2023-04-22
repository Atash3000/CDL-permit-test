import React, { createContext, useState } from 'react'
import { states } from '../data/states'
import { data } from '../data/data'
export const configContext = createContext()

function CdlConfig(props) {
  const [selectedState, setSelectedState] = useState('')
  const [selectedExamType, setSelectedExamtype] = useState('')
  const [selectedExamPart, setSelectedExamPart] = useState('')
  const examTypes = { 'General Knowledge': data, Trailer: data, 'Air Brake': data }
  const createURLFromString = str => {
    // Replace any spaces with dashes and convert the string to lowercase
    const url = str.replace(/\s+/g, '-').toLowerCase()
    return url
  }

  const createExamParts = (array, num) => {
    const result = {}

    const chunkSize = Math.ceil(array.length / num)

    for (let i = 0; i < num; i++) {
      const start = i * chunkSize
      const end = start + chunkSize
      const part = array.slice(start, end)
      result[`part-${i + 1}`] = part
    }

    return result
  }
  const examQuestionsArr = examTypes[selectedExamType] ?? []
  let partCount = 0
  if (selectedExamType === 'General Knowledge') {
    partCount = 3
  } else {
    partCount = 2
  }
  const examParts = createExamParts(examQuestionsArr, partCount)
  const questionsArr = examParts[selectedExamPart] ?? []

  const values = {
    states,
    selectedState,
    setSelectedState,
    selectedExamType,
    setSelectedExamtype,
    selectedExamPart,
    setSelectedExamPart,
    examTypes,
    createURLFromString,
    createExamParts,
    examParts,
    questionsArr
  }
  return <configContext.Provider value={values}>{props.children}</configContext.Provider>
}

export default CdlConfig
