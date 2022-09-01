import React, { Component } from "react";

export default class Demo2_4 extends Component {
  state = {
    username: localStorage.getItem("username") || '',
    password: localStorage.getItem("password") || '',
  };

  render() {
    return (
      <div>
        <h1>登录页面</h1>
        <Filed
          label="用户名"
          type="text"
          onChangeEvent={(value) => {
            // console.log("用户名：", value);

            this.setState({
              username: value,
            });
          }}
          value={this.state.username}
        ></Filed>
        <Filed
          label="密码"
          type="password"
          onChangeEvent={(value) => {
            // console.log(value);

            this.setState({
              password: value,
            });
          }}
          value={this.state.password}
        ></Filed>

        <button
          onClick={() => {
            console.log(this.state.username, this.state.password, "发送给后端验证");
          }}>
          登录
        </button>
        <button
          onClick={() => {
            this.setState({
              username: '',
              password: ''
            })
          }}
        >取消</button>
      </div>
    );
  }
}

class Filed extends Component {
  render() {
    return (
      <div style={{ background: "#baf" }}>
        <label htmlFor="">{this.props.label}</label>
        <input
          type={this.props.type}
          style={{ outline: "none" }}
          onChange={(event) => {
            // console.log(event.target.value);
            // input 框中的value值当作实参，通过 onChangeEvent() 回调函数传给父组件
            this.props.onChangeEvent(event.target.value);
          }}
          // input标签只能通过value属性来设置初始值，不能使用defaultValue，无法将value清空
          value={this.props.value}
        />
      </div>
    );
  }
}
