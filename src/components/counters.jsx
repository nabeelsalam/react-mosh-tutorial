import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [101, 102, 103],
  };

  render() {
    return (
      <ul>
        {this.state.counters.map((counter) => (
          <li key={counter}>
            <Counter count={counter} onDelete={this.deleteCounter} id={counter}>
              <h3>Counter #{counter}</h3>
            </Counter>
          </li>
        ))}
      </ul>
    );
  }

  deleteCounter = (id) => {
    let counters = this.state.counters.filter((counter) => {
      return counter !== id;
    });
    this.setState({ counters });
  };
}

export default Counters;
