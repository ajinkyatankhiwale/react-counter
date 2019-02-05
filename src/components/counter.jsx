import React, { Component } from "react";

class Counter extends Component {
  render() {
    const decrementButtonClass =
      this.props.counter.value <= 0
        ? "btn btn-warning m-2 disabled"
        : "btn btn-warning m-2";

    return (
      <React.Fragment>
        <br />
        <span className="badge badge-success m-2 badge-sm">
          {this.props.counter.value}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-primary m-2"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className={decrementButtonClass}
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter)}
          className="btn btn-danger m-2"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }
}

export default Counter;
