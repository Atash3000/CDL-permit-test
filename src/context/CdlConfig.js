import React, { createContext, useState, useEffect } from 'react'
import { states } from '../data/states'
import { data } from '../data/data'
import { airBrakesData } from '../data/air-brakes'
import { generalKnowledge } from '../data/general-knowledge'
export const configContext = createContext()

function CdlConfig(props) {
  const configObj = JSON.parse(localStorage.getItem('config'))
  const [selectedState, setSelectedState] = useState(localStorage.getItem('lastSelectedState'))
  const [config, setConfig] = useState(configObj ?? {})
  const [selectedExamType, setSelectedExamtype] = useState('')
  const [selectedExamPart, setSelectedExamPart] = useState('')
  const examTypes = { 'General Knowledge': generalKnowledge, Trailer: data, 'Air Brake': airBrakesData }
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
    partCount = 5
  } else if (selectedExamType === 'Air Brake') {
    partCount = 4
  } else {
    partCount = 2
  }
  const examParts = createExamParts(examQuestionsArr, partCount)
  const questionsArr = examParts[selectedExamPart] ?? []

  useEffect(() => {
    // save to local storage
    if (Object.keys(config).length > 0) {
      localStorage.setItem('config', JSON.stringify(config))
    }
  }, [config])

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
    questionsArr,
    config,
    setConfig,
    airBrakesData
  }
  return <configContext.Provider value={values}>{props.children}</configContext.Provider>
}

export default CdlConfig
