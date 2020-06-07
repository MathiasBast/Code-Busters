import React from 'react'
import { Link, Redirect, Route } from 'react-router-dom'

class Path extends React.Component {
  state = {
    mouseOutOfBounds: false
  }
  changeState = () => {
    this.setState({
      mouseOutOfBounds: true
    })
  }
  render () {
    return (
      <div onMouseLeave={this.changeState} className="path container">
        <div> {this.state.mouseOutOfBounds ? <Route exact path='/game/path'>{<Redirect to='/fail' />} </Route> : null}</div>
        {/* ghost */}
        <div className='row' style={{ height: 80 }}>
          <div className='death' style={{ width: 1100, height: 80 }} onMouseEnter={this.changeState}></div>
          <Link to="/game/quiz"><img src="/images/ghost.png" alt="tiny ghost missing his burgers" className='ghost'/></Link>
        </div>
        {/* down */}
        <div className='row' style={{ height: 80 }}>
          <div onMouseEnter={this.changeState} className='death' style={{ width: 1130, height: 80 }}></div>
          <div style={{ width: 20, height: 80 }}></div>
          <div onMouseEnter={this.changeState} className='death' style={{ width: 50, height: 80 }}></div>
        </div>
        {/* across */}
        <div className='row' style={{ height: 23 }}>
          <div onMouseEnter={this.changeState} className='death' style={{ width: 800, height: 23 }}></div>
          <div style={{ width: 350, height: 23 }}></div>
          <div onMouseEnter={this.changeState} className='death' style={{ width: 50, height: 23 }}></div>
        </div>
        {/* down */}
        <div className='row' style={{ height: 200 }}>
          <div onMouseEnter={this.changeState} className='death' style={{ width: 800, height: 200 }}></div>
          <div style={{ width: 20, height: 200 }}></div>
          <div onMouseEnter={this.changeState} className='death' style={{ width: 380, height: 200 }}></div>
        </div>
        {/* back across */}
        <div className='row' style={{ height: 23 }}>
          <div onMouseEnter={this.changeState} className='death' style={{ width: 800, height: 23 }}></div>
          <div style={{ width: 250, height: 23 }}></div>
          <div onMouseEnter={this.changeState} className='death' style={{ width: 150, height: 23 }}></div>
        </div>
        {/* down p1 */}
        <div className='row' style={{ height: 100 }}>
          <div onMouseEnter={this.changeState} className='death' style={{ width: 1030, height: 100 }}></div>
          <div style={{ width: 20, height: 100 }}></div>
          <div onMouseEnter={this.changeState} className='death' style={{ width: 150, height: 100 }}></div>
        </div>
        {/* along up and down */}
        <div className='row' style={{ height: 23 }}>
          <div onMouseEnter={this.changeState} className='death' style={{ width: 100, height: 23 }}></div>
          <div style={{ width: 420, height: 23 }}></div>
          <div onMouseEnter={this.changeState} className='death' style={{ width: 510, height: 23 }}></div>
          <div style={{ width: 20, height: 23 }}></div>
          <div onMouseEnter={this.changeState} className='death' style={{ width: 150, height: 23 }}></div>
        </div>
        {/* down up and down */}
        <div className='row' style={{ height: 177 }}>
          <div onMouseEnter={this.changeState} className='death' style={{ width: 100, height: 177 }}></div>
          <div style={{ width: 20, height: 177 }}></div>
          <div onMouseEnter={this.changeState} className='death' style={{ width: 380, height: 177 }}></div>
          <div style={{ width: 20, height: 177 }}></div>
          <div onMouseEnter={this.changeState} className='death' style={{ width: 510, height: 177 }}></div>
          <div style={{ width: 20, height: 177 }}></div>
          <div onMouseEnter={this.changeState} className='death' style={{ width: 150, height: 177 }}></div>
        </div>
        {/* start and along bottom */}
        <div className='row' style={{ height: 23 }}>
          <div style={{ width: 200, height: 23 }}></div>
          <div onMouseEnter={this.changeState} className='death' style={{ width: 300, height: 23 }}></div>
          <div style={{ width: 550, height: 23 }}></div>
          <div onMouseEnter={this.changeState} className='death' style={{ width: 150, height: 23 }}></div>
        </div>
        {/* bottom */}
        <div className='row' style={{ height: 71 }}>
          <div style={{ width: 200, height: 71 }}></div>
          <div onMouseEnter={this.changeState} className='death' style={{ width: 1000, height: 71 }}></div>
        </div>
      </div>
    )
  }
}

export default Path
