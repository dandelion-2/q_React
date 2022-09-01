import React, { Component } from "react";

export default class Advanced_1 extends Component {
  state = {
    isShow: false,
  };

  // 回调函数
  handleEvent = () => {
    this.setState(
      {
        isShow: !this.state.isShow,
      },
      () => {
        console.log(this.state.isShow);
      }
    );
    console.log("父组件定义的Event事件");
  };

  render() {
    return (
      <div>
        <Navbar event={this.handleEvent}></Navbar>
        {this.state.isShow && <Sidebar></Sidebar>}
      </div>
    );
  }
}


class Navbar extends Component {
  render() {
    return (
      <div style={{ background: "#baf" }}>
        <button
          onClick={() => {
            console.log("子通父，让父的isShow取反", this.props.event);
            this.props.event();
          }}>
          click
        </button>
        <span>navbar</span>
      </div>
    );
  }
}


class Sidebar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
        </ul>
      </div>
    );
  }
}

/* 
  父传子：属性
  子传父：回调函数
*/
