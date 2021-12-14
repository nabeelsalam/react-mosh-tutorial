import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: 36,
    fontWeight: "bold",
  };

  constructor(props) {
    super(props);
    this.state = {
      count: props.count,
    };
    console.log("Counter Created");
  }

  componentDidMount() {
    console.log("Counter did mount");
  }

  componentDidUpdate(previousProps, previousState) {
    console.log("Counter did update", previousProps, previousState);
  }

  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <p style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount(this.state.count)}
        </p>
        <button
          onClick={() => {
            this.handleIncrement(this.state.count);
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            this.props.onDelete(this.props.id);
          }}
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  handleIncrement = (count) => {
    this.setState({ count: this.state.count + 1 });
    console.log(count);
  };

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
