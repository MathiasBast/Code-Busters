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

  handleClick = () => {
    if (this.state.showHint === false) {
      this.setState({
        showHint: true
      })
    } else {
      this.setState({
        showHint: false
      })
    }
  }

  render () {
    const { name } = this.props.match.params
    const { showHint } = this.state
    return (
    <>
      {showHint
        ? <Link onClick={this.handleClick} to={`/game/${name}`}>Need a hint?</Link>
        : <Link onClick={this.handleClick} to={`/game/${name}/hint`}>Need a hint?</Link>
      }
      <Route path='/game/:page/hint' component={ShowHint} />
    </>
    )
  }
}

export default Hints
