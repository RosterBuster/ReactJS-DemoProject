import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onAddCounter,
      onDecrement,
      onSelectAll,
      onUnselectAll,
      onSelectCounter
    } = this.props;
    return (
      <React.Fragment>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        <button className="btn btn-primary btn-sm m-2" onClick={onAddCounter}>
          Add Counter
        </button>
        <button className="btn btn-danger btn-sm m-2" onClick={onDelete}>
          Delete
        </button>
        <br />
        <button className="btn btn-primary btn-sm m-2" onClick={onSelectAll}>
          Select All
        </button>
        <button className="btn btn-primary btn-sm m-2" onClick={onUnselectAll}>
          Unselect All
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            isSelected={counter.isSelected}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
            onSelectCounter={onSelectCounter}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
