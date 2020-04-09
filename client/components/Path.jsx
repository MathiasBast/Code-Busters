import React from 'react'
import { Link } from 'react-router-dom'

const Path = () => {
  return(
    <div className="path container">
      <p>Path page</p>
      <Link to="/game/quiz">Next</Link>
    </div>
  )
}

export default Path