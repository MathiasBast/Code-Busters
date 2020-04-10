import React from 'react'
import { Link } from 'react-router-dom'

// import ghost from '/images/ghost'

const Find = () => {
  return (
    <div className="find container">
      <p><Link to="/game/path">Follow me to find the ghost...</Link></p>
    </div>
  )
}

export default Find
