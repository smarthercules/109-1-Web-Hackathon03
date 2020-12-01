import Question from '../models/question'
import Answer from '../models/answer'

exports.GetContents = async (req, res) => {
  // TODO : get questions from mongodb and return to frontend
  //let _id = Question.exportSchema.find({questionID})
  //let _question = Question.exportSchema.find({question})
  //let _options = Question.exportSchema.find({options})
  const db = mongoose.connection
  let questionData = Question.find()

  if(!questionData){
    res.status(403).send({
      message: 'error',
      contents: [],
    })
    //console.log('no data got')  
  }
  else{
    res.status(200).send({
      message: 'success',
      contents: questionData,
    })
    //console.log('got data')  
  }
}

exports.CheckAns = async (req, res) => {
  // TODO : get answers from mongodb,
  // check answers coming from frontend and return score to frontend
}
