import React from 'react'

import { Link } from 'react-router-dom'

const Fail = () => {
  return (
<div align="center" className="fail container">
      <h1>Too bad you failed your mission with the ghost!</h1>
      <p><Link to='/game/find'>*Click here to try again*</Link></p>
      <p>Good Luck!</p>
      <img src="https://media3.picsearch.com/is?n5HVAqxhGXFWrJ_iOGy2Vl7PKFiGt3a2jl22m0DOnpc&height=341" alt="scare1"/>
      <img src="https://media1.picsearch.com/is?lujw47Zq_GZQhda8J9lpCbg9MRgKKehHBFJgforYv_E&height=227" alt="baby crying"/>
      <img src="https://media3.picsearch.com/is?XQ4N6OQpdiHuXSLp4SWVAPX_LSNMB5UVDQE2gIr3YzA&height=341" alt="scare2"/>
    </div>
  )
}











export default Fail
