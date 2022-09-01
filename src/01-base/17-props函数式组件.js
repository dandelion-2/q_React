import React, { Component } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default class Demo17 extends Component {
  render() {
    return (
      <div>
        <Navbar title="导航"></Navbar>

        {/* 函数式组件 */}
        <Sidebar bg="yellow" position="left"></Sidebar>
      </div>
    )
  }
}
