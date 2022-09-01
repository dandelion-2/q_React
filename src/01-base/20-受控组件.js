import React, { Component } from "react";

export default class Demo20 extends Component {
  state = {
    userName: "请输入值",
  };

  render() {
    return (
      <div>
        <h1>登录</h1>
        <input
          type="text"
          value={this.state.userName}
          onChange={(event) => {
            // console.log("onChange", event.target.value);

            this.setState({
              userName: event.target.value,
            });
          }}
          onFocus={() => {
            this.setState({
              userName: ""
            })
          }}
          onBlur={() => {
            this.setState({
              userName: '请输入值'
            })
          }}
        />

        <button
          onClick={() => {
            // console.log(this.state.userName);
          }}>
          登录
        </button>
        <button
          onClick={() => {
            this.setState({
              userName: "请输入值",
            });
          }}>
          重置
        </button>
        <br />
        <Child myValue={this.state.userName}></Child>
      </div>
    );
  }
}

class Child extends Component {
  render() {
    console.log(this.props.myValue)
    return <div>{this.props.myValue}</div>;
  }
}
