import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <span
          containerViewStyle={{ width: "100%" }}
          className={this.getBadgeClasses()}
        >
          {this.formatCount()}
        </span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>

        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          -
        </button>

        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const count = this.props.counter.value;
    const zeroText = "Zero";
    return count === 0 ? zeroText : count;
  }
}

export default Counter;
