import React from 'react'
import { Link } from 'react-router-dom'

const Path = () => {
  return(
    <div className="path container">
      <p>Path page</p>
      <Link to="/game/quiz"><img src="/images/ghost.png" alt="tiny ghost missing his burgers"/></Link>
    </div>
  )
}

export default Path