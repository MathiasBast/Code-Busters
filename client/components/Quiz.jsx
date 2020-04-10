import React from 'react'
import { Link, Redirect } from 'react-router-dom'

class Quiz extends React.Component {
  constructor() {
    super();

    this.state = {
      answer1: ''
    };

    this.onRadioChange = this.onRadioChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onRadioChange = (e) => {
    this.setState({
      answer1: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="quiz-questions" >
          <div className="myDiv" >
            <strong>What does a panda ghost eat?</strong>
            <ul>
              <li>
                <label>
                  <input
                    type="radio"
                    value="teddy"
                    checked={this.state.answer1 === "teddy"}
                    onChange={this.onRadioChange}
                  />
                  <span>Teddy bears</span>
                </label>
              </li>
              <li>
                <label>
                  <input 
                    type="radio"
                    value="bamboo"
                    checked={this.state.answer1 === "bamboo"}
                    onChange={this.onRadioChange}
                  />
                  <span>Bamboo</span> 

                  {this.state.answer1 === 'bamboo' ? <div class='progress'>Good work, keep going...</div> : "" }

                  <div className="answers">
                    {
                      this.state.answer1 === 'bamboo' ? "BOO YA!" : ""
                    }
                  </div>
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    value="leaves"
                    checked={this.state.answer1 === "leaves"}
                    onChange={this.onRadioChange}
                  />
                  <span>Ghost leaves</span>
                </label>
              </li>
            </ul>
          </div>
          <div className="myDiv">
            <strong>What did the ghost teacher say to the class?</strong>
            <ul>
              <li>
                <label>
                  <input
                    type="radio"
                    value="boohoo"
                    checked={this.state.answer1 === "boohoo"}
                    onChange={this.onRadioChange}
                  />
                  <span>Boo hoo. Just do the work!</span>

                  {this.state.answer1 === 'board' ? <div class='progress'>Nearly there...</div>: "" }
                  
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    value="haunt"
                    checked={this.state.answer1 === "haunt"}
                    onChange={this.onRadioChange}
                  />
                  <span>Don't be scared. I'm here to <span style={{textDecorationLine: "line-through"}}>haunt</span> help you.</span>
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    value="board"
                    checked={this.state.answer1 === "board"}
                    onChange={this.onRadioChange}
                  />
                  <span>Look at the board and I will go through it again!</span>
                  <div className="answers">
                      {
                        this.state.answer1 === 'board' ? "BOO YA!" : ""
                      }
                    </div>
                </label>
              </li>
            </ul>
          </div>               
          <div className="myDiv">
            <strong>What do you call a ghost comedian?</strong>
            <ul>
              <li>
                <label>
                  <input
                    type="radio"
                    value="dead"
                    checked={this.state.answer1 === "dead"}
                    onChange={this.onRadioChange}
                  />
                  <span>Dead funny!</span>
                  <div className="answers">
                      {
                        this.state.answer1 === 'dead' ? "BOO YA!" : ""
                      }
                    </div>
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    value="offGrid"
                    checked={this.state.answer1 === "offGrid"}
                    onChange={this.onRadioChange}
                  />
                  <span>Off the grid!</span>
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    value="nobody"
                    checked={this.state.answer1 === "nobody"}
                    onChange={this.onRadioChange}
                  />
                  <span>A Nobody!</span>
                </label>
              </li>
            </ul>
          </div>
        <div className="links">
          {this.state.answer1 === 'dead' ? <Redirect to="/success"></Redirect>: "" }
        </div>
      </div>
    );
  }
}

export default Quiz
