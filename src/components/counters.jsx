import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const counterIndex = counters.indexOf(counter);
    counters[counterIndex] = { ...counter };
    counters[counterIndex].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    if (counter.value === 0) {
      return;
    }
    const counters = [...this.state.counters];
    const counterIndex = counters.indexOf(counter);
    counters[counterIndex] = { ...counter };
    counters[counterIndex].value--;
    this.setState({ counters });
  };

  handleDelete = counter => {
    const counters = this.state.counters.filter(c => c.id !== counter.id);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <button className="btn-primary m-2 btm-sm" onClick={this.handleReset}>
          Reset
        </button>
        <div>
          {this.state.counters.map(counter => (
            <Counter
              key={counter.id}
              counter={counter}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Counters;
