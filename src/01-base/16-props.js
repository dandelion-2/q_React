import React, { Component } from 'react'
import Navbar from './Navbar'


export default class Demo16 extends Component {
  render() {

    let obj = {
      title: '测试',
      leftshow: true
    }

    return (
      <div>
        <h2>首页</h2>
        <Navbar title="首页" leftshow={true}></Navbar>

        <h2>列表</h2>
        {/* <Navbar title="首页" leftshow="false"></Navbar>  报错 */}
        <Navbar title="列表" leftshow={false}></Navbar>

        <h2>购物车</h2>
        {/* <Navbar title={obj.title} leftshow={obj.leftshow} ></Navbar> */}
        <Navbar {...obj}></Navbar>
      </div>
    )
  }
}


// ES6 简写