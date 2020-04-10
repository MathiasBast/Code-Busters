import React from 'react'
import { Link } from 'react-router-dom'

const ShowHint = props => {
  const name = props.match.params.page
  let rend = 'nope'
  if(name === 'find'){
    rend = "Invert the color to discover the truth about the sleuth"
  }
  if (name === 'quiz') {
    rend = "The awnsers should make you cringe"
  }
  if (name === 'path') {
    rend = "Feel your way around, trial and error is the way to go"
  }
  return (
    <div className='hintContainer'>
    <p className='hintChild'>{rend}</p>
    <button className='hintButton'><Link className='hintChild' to={`/game/${name}`} >Back</Link></button>
    <button className='hintButton'><Link className='hintChild' to='/'>Restart</Link></button>
    </div>
  )
}

export default ShowHint

/*
classes = hintContainer,
hintChild, 
hintButton,


*/