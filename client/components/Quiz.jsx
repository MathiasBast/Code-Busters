import React from 'react'
import { Link } from 'react-router-dom'

import questionsData from '../data/questions'

class Quiz extends React.Component {
  state = {
    questions: []
  }

  getQuestions = () => {
    questionsData().then(question => {
      this.setState( 
        { questions: question }
      )
    })
  }

  componentDidMount() {
    this.getQuestions()
  }

  render() {
    return(
      <div className="container">
        <div className="title">Ghost Quiz</div>
        {this.state.questions.length > 0 && 
        this.state.questions.map(({question, answer, correct}) => <h4>{question}</h4>)}
      </div>
    )
  }
}

  // const Quiz = () => {
  //   return(
  //   <div className="quiz container">
  //     <p>Quiz page</p>
  //     <form>
  //     </form>
      
  //       {/*
  //       if fail then fail page, if success then success page
  //       */} 
  //     <Link to="/success">Next</Link> 
  //     </div> 
  //   )
  // }

export default Quiz