import React from 'react'
import { Link } from 'react-router-dom'

class Quiz extends React.Component {
  constructor() {
    super();

    this.state = {
      answer: 'teddy'
    };

    this.onRadioChange = this.onRadioChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onRadioChange = (e) => {
    this.setState({
      answer: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="quiz-questions">
        <form onSubmit={this.onSubmit}>
          <strong>What does a panda ghost eat?</strong>
          <ul>
            <li>
              <label>
                <input
                  type="radio"
                  value="teddy"
                  checked={this.state.answer === "teddy"}
                  onChange={this.onRadioChange}
                />
                <span>Teddy bears</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  value="correct1"
                  checked={this.state.answer === "correct1"}
                  onChange={this.onRadioChange}
                />
                <span>Bamboo</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  value="leaves"
                  checked={this.state.answer === "leaves"}
                  onChange={this.onRadioChange}
                />
                <span>Ghost leaves</span>
              </label>
            </li>
          </ul>

          <strong>What did the ghost teacher say to the class?</strong>
          <ul>
            <li>
              <label>
                <input
                  type="radio"
                  value="boohoo"
                  checked={this.state.answer === "boohoo"}
                  onChange={this.onRadioChange}
                />
                <span>Boo hoo. Just do the work!</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  value="haunt"
                  checked={this.state.answer === "haunt"}
                  onChange={this.onRadioChange}
                />
                <span>Don't be scared. I'm here to <span style={{textDecorationLine: "line-through"}}>haunt</span> help you.</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  value="correct2"
                  checked={this.state.answer === "correct2"}
                  onChange={this.onRadioChange}
                />
                <span>Look at the board and I will go through it again!</span>
              </label>
            </li>
          </ul>
          <strong>What do you call a ghost comedian?</strong>
          <ul>
            <li>
              <label>
                <input
                  type="radio"
                  value="correct3"
                  checked={this.state.answer === "correct3"}
                  onChange={this.onRadioChange}
                />
                <span>Dead funny!</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  value="offGrid"
                  checked={this.state.answer === "offGrid"}
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
                  checked={this.state.answer === "nobody"}
                  onChange={this.onRadioChange}
                />
                <span>A Nobody!</span>
              </label>
            </li>
          </ul>
          <button type="submit">Ghost it</button>
        </form>
      </div>
    );
  }
}

export default Quiz