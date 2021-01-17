import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div className="container-fluid">
        <h1 className={this.getHeaderClasses()}>{this.countFormatter()}</h1>
        <br />
        <div className="row justify-content-center">
          <div className="col mr-4">
            <input
              className="btn btn-success"
              type="button"
              value="Increment"
              onClick={this.handleInc}
            />
          </div>
          <div className="col mr-4">
            <input
              className="btn btn-danger"
              type="button"
              value="Increment"
              onClick={this.handleDec}
            />
          </div>
        </div>
      </div>
    );
  }

  handleInc = () =>
    this.setState((prevState) => ({ count: ++prevState.count }));
  handleDec = () =>
    this.setState((prevState) => ({ count: --prevState.count }));
  countFormatter = () => {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  };

  getHeaderClasses() {
    let headings = "row justify-content-center text-";
    if (this.state.count === 0) headings += "warning";
    else if (this.state.count < 0) headings += "danger";
    else {
      if (this.state.count % 10 === 0) headings += "success";
      else headings += "white";
    }
    return headings;
  }
}

export default Counter;
