import React from 'react'
import { Link } from 'react-router-dom'

const Quiz = () => {
  return(
    <div className="quiz container">
      <p>Quiz page</p>
    
      {/* {/* {
        //if fail then fail page, if success then success page
      } */}
      <Link to="/success">Next</Link> 
    </div>
  )
}

export default Quiz