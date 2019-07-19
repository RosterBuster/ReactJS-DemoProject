import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0, isSelected: false },
      { id: 2, value: 0, isSelected: false },
      { id: 3, value: 0, isSelected: false },
      { id: 4, value: 0, isSelected: false },
      { id: 5, value: 0, isSelected: false }
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
    this.selectAll = this.selectAll.bind(this);
    this.unSelectAll = this.unSelectAll.bind(this);
    this.selectCounter = this.selectCounter.bind(this);
  }

  handleDelete(counterId) {
    const counters = this.state.counters.filter(c => c.isSelected === false);
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
    if (counters.length > 0) {
      const lastIndex = counters.length - 1;
      const lastCounter = counters[lastIndex];
      const indexPosToAddCounter = lastIndex + 1;
      counters[indexPosToAddCounter] = {
        id: lastCounter.id + 1,
        value: 0,
        isSelected: false
      };
    } else {
      counters[0] = {
        id: 0,
        value: 0,
        isSelected: false
      };
    }
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

  selectAll() {
    const counters = [...this.state.counters];
    for (var i = 0, len = counters.length; i < len; i++) {
      counters[i] = {
        id: counters[i].id,
        value: counters[i].value,
        isSelected: true
      };
    }
    this.setState({ counters });
  }

  unSelectAll() {
    const counters = [...this.state.counters];
    for (var i = 0, len = counters.length; i < len; i++) {
      counters[i] = {
        id: counters[i].id,
        value: counters[i].value,
        isSelected: false
      };
    }
    this.setState({ counters });
  }

  selectCounter(counterId) {
    const counters = [...this.state.counters];
    for (var i = 0, len = counters.length; i < len; i++) {
      counters[i] = {
        id: counters[i].id,
        value: counters[i].value,
        isSelected: counters[i].isSelected
      };
      if (counterId === counters[i].id) {
        counters[i].isSelected = !counters[i].isSelected;
      }
    }
    this.setState({ counters });
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
            onSelectAll={this.selectAll}
            onUnselectAll={this.unSelectAll}
            onSelectCounter={this.selectCounter}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
