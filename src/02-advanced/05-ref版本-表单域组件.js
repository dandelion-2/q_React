import React, { Component } from "react";

export default class Demo2_5 extends Component {

  username = React.createRef()
  password = React.createRef()

  render() {
    return (
      <div>
        <h1>登录页面</h1>
        {/* ref="username" 在严格模式有可能报错 */}
        <Filed label="用户名" type="text" ref={this.username}></Filed>
        <Filed label="密码" type="password" ref={this.password}></Filed>

        <button
          onClick={() => {
            console.log(this.username.current.state.value, this.password.current.state.value, "发送给后端验证");
          }}>
          登录
        </button>
        <button
          onClick={() => {
            this.username.current.clear()
            this.password.current.clear()
          }}>
          取消
        </button>
      </div>
    );
  }
}

class Filed extends Component {

  state = {
    value: ''
  }

  // 将clear清空注册为一个函数
  clear() {
    this.setState({
      value: ''
    })
  }

  setValue(newValue) {
    this.setState({
      value: newValue
    })
  }

  render() {
    return (
      <div style={{ background: "#baf" }}>
        <label htmlFor="">{this.props.label}</label>
        <input
          type={this.props.type}
          onChange={(event) => {
            this.setState({
              value: event.target.value
            })
          }}
          value={this.state.value}
        />
      </div>
    );
  }
}
