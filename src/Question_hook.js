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

  const getQuestions = () => {
    // TODO : get questions from backend
    const a = async () => {
      const {
          data: {msg}
      } = await instance.get('/api/getContents', { params: { ID: 123 }})
      let newContent=contents.push(msg)
      console.log(newContent)
      setContents(newContent)
      return
    }
    //const a = await instance.get('/api/getContents', { params: { ID: 1 }})
    a()
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
            Question {contents[0]} of 4
            </div>
          </div>

          <div id="question-title">
            
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
