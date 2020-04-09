import React from 'react'

import { Link } from 'react-router-dom'

const Fail = () => {
  return (
<div className="fail container">
      <h1>Too bad you failed your mission with the ghost!</h1>
      <p><Link to='/game/find'>Click here to try again</Link></p>
      <p>Good Luck!</p>
    </div>
  )
}











export default Fail
