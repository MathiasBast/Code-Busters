import React from 'react'
import { Route } from 'react-router-dom'

import Quiz from './Quiz'
import Find from './Find'
import Path from './Path'

const Game = props => {
  const { name } = props.match.params
  return (
    <>
      <Route path={`/game/${name}`} render={() => {
        if (name === 'quiz') {
          return <Quiz />
        }
        if (name === 'find') {
          return <Find />
        }
        if (name === 'path') {
          return <Path />
        }
      }} />
    </>
  )
}

export default Game
