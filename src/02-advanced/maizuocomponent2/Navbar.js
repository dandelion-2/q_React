import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div style={{ background: "#baf", textAlign: "center", overflow: "hidden" }}>
        <button style={{ float: "left" }}>back</button>
        <span>卖座电影</span>
        <button style={{ float: 'right' }} onClick={() => {
          this.props.event()
        }}>center</button>
      </div>
    );
  }
}
