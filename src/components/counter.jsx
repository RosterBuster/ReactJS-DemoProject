import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <input
          className="m-2"
          type="checkbox"
          defaultChecked={this.props.isSelected}
          onChange={() => this.props.onSelectCounter(this.props.counter.id)}
        />

        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

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
