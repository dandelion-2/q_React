import React, { Component } from "react";

export default class Demo2_16 extends Component {
  state = {
    list: ["00", "11", "22", "33", "44", "55", "66"],
    current: 2,
  };

  render() {
    return (
      <div>
        <input type="number" onChange={(event) => {
          this.setState({
            // current: + event.target.value
            current: Number(event.target.value)
          })
        }} />

        <div style={{ overflow: "hidden" }}>
          {this.state.list.map((item, index) => (
            <Child key={index} current={this.state.current} index={index}></Child>
          ))}
        </div>
      </div>
    );
  }
}

class Child extends Component {
  render() {
    return (
      <div
        style={{
          width: "100px",
          height: "100px",
          border: this.props.current === this.props.index ? "1px solid #baf" : "1px solid red",
          margin: "10px",
          float: "left",
        }}></div>
    );
  }
}
