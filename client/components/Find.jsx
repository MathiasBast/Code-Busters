import React from 'react'
import { Link } from 'react-router-dom'

const Find = () => {
  return(
    <div className="find container">
      <p>Find Page</p>
      <Link to="/game/path">Next</Link>
    </div>
  )
}

export default Find