import React from 'react'
import { Link } from 'react-router-dom'

const ShowHint = props => {
  const name = props.match.params.page
  let rend = 'nope'
  if (name === 'find') {
    rend = 'Invert the colour to discover the truth about the sleuth...'
  }
  if (name === 'quiz') {
    rend = 'The answers should make you cringe...'
  }
  if (name === 'path') {
    rend = 'A skill it is indeed... or just go around ¯\_(ツ)_/¯'
  }
  return (
    <div className='hintContainer'>
      <p className='hintChild'>{rend}</p>
      <div className='hintButtonsCont'>
        <button className='hintButton'><Link className='hintChild' to='/'>Restart game</Link></button>
      </div>
    </div>
  )
}

export default ShowHint
