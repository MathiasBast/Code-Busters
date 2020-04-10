import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div align="center" className="success container">
      <h1>Well Done</h1>
      <p>You have successfully helped the ghost</p>
      <p>It has now found its true calling!</p>
      <img src="https://media2.picsearch.com/is?SNenMyCdChZMTuH6Eh5iM-1nbarJSKVlNkRKHg6HhZs&height=337" alt="balloon"/>
      <img src="https://i.kinja-img.com/gawker-media/image/upload/c_scale,f_auto,fl_progressive,q_80,w_1600/blg6zu7taguihvt84brn.jpg" width="500" height="323" alt="ghost whopper"/>
      <img src="https://media2.picsearch.com/is?SNenMyCdChZMTuH6Eh5iM-1nbarJSKVlNkRKHg6HhZs&height=337" alt="balloon"/>
      <h3><Link to='/game/find' id='yellow'>Play again?</Link></h3>
    </div>
  )
}

export default Success
