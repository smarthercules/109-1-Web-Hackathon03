import React, { useState, useEffect } from 'react'
import axios from 'axios'

const API_ROOT = 'http://localhost:4000/api'
const instance = axios.create({
  baseURL: API_ROOT
})

function Question() {
  const [complete, setComplete] = useState(false)  // true if answered all questions
  const [contents, setContents] = useState([])     // to store questions
  const [ans, setAns] = useState([])               // to record your answers
  const [score, setScore] = useState(0)            // Your score
  const [current_question, setCurrentQuestion] = useState(0) // index to current question

  const next = () => {
    // TODO : switch to the next question,
    // and check answers to set the score after you finished the last question
  }

  const choose = () => {
    // TODO : update 'ans' for the option you clicked
  }

  const getQuestions = async () => {
    // TODO : get questions from backend
      const {
          data: {
            message,
            contents
      }} = await instance.get('/getContents')
      //console.log(contents)
      setContents(contents)
    //const a = await instance.get('/api/getContents', { params: { ID: 1 }})
  }

  useEffect(() => {
    if (!contents.length)
      getQuestions()
  })

  // TODO : fill in the rendering contents and logic
  return (
    <div id="quiz-container">
      {contents.length ?
        <React.Fragment>
          <div id="question-box">
            <div className="question-box-inner">
            {'Question '+current_question+1+' of '+contents.length}
            </div>
          </div>

          <div id="question-title">
          {contents[current_question].question}
          </div>

          <div id="options">
          </div>
          
          <div id="actions" onClick={next}>
            NEXT
          </div>
        </React.Fragment>
        : <React.Fragment>no content</React.Fragment>
      }
    </div>
  )
}

export default Question
