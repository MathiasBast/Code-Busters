import React from 'react'
import { Link, Route } from 'react-router-dom'

import ShowHint from './ShowHint'

class Hints extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showHint: false
    }
  }

  render () {
    const { name } = this.props.match.params
    return (
    <>
      <Link to={`/game/${name}/hint`}>Need a hint?</Link>
      <Route path='/game/:page/hint' component={ShowHint} />
    </>
    )
  }
}

export default Hints
