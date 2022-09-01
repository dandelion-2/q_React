import React, { Component, createRef } from 'react'

export default class Demo19 extends Component {
  myusername = createRef()
  render() {
    return (
      <div>
        <h1>登录</h1>
        <input type="text" ref={this.myusername} defaultValue="jinbo" />

        <button onClick={() => {
          console.log(this.myusername.current.value)
        }}>登录</button>
        <button onClick={() => {
          this.myusername.current.value = ''
        }}>重置</button>
      </div>
    )
  }
}
