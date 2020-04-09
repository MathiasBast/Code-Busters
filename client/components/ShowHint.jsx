import React from 'react'
import { Link } from 'react-router-dom'

const ShowHint = props => {
  const name = props.match.params.page
  console.log(name)
  return (
    <>
    {/* {if(name === find){
      return <p>Hello</p>
    }} */}
    <Link to={`/game/${name}`} >Back</Link>
    <Link to='/'>Restart</Link>
    <p>hi {name}</p>
    </>
  )
}

export default ShowHint
