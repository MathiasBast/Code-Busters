
import React from 'react'
import { Link, Route } from 'react-router-dom'

import ShowHint from './ShowHint'

const Hints = props => {
  // '/#/game/:page'
  // '/#/success'
  const {name} = props.match.params
  return (
    <>
      <Link to={`/game/${name}/hint`}>Need a hint?</Link>
      <Route path='/game/:page/hint' component={ShowHint} />
    </>
  )
}

export default Hints
