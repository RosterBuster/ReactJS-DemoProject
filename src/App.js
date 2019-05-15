import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor() {
    super();
    console.log("App - constructor");
    this.handleDelete = this.handleDelete.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleAddCounter = this.handleAddCounter.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleDelete(counterId) {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  }

  handleReset() {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  }

  handleIncrement(counter) {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  }

  handleDecrement(counter) {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    if (counters[index].value >= 0) {
      this.setState({ counters });
    }
  }

  handleAddCounter() {
    const counters = [...this.state.counters];
    const lastIndex = counters.length - 1;
    const lastCounter = counters[lastIndex];
    const indexPosToAddCounter = lastIndex + 1;
    counters[indexPosToAddCounter] = { id: lastCounter.id + 1, value: 0 };
    this.setState({ counters });
  }

  calculateTotalCount() {
    let count = 0;
    for (var i = 0, len = this.state.counters.length; i < len; i++) {
      let value = this.state.counters[i].value;
      count = count + value;
    }
    return count;
  }

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
          totalCounts={this.calculateTotalCount()}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onAddCounter={this.handleAddCounter}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
