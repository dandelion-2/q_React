import React, { Component } from 'react'

export default class Demo2_12 extends Component {

  state = {
    myname: 'Jinbo'
  }

  UNSAFE_componentWillMount() {
    console.log('第一册will moutn', this.state.myname)

    // 第一次上树前的 最后一次修改状态的机会
    this.setState({
      myname: '金波'
    })

    // 初初始化数据的地方
  }


  componentDidMount() {
    console.log('first did moutn', this.state.myname, document.querySelector('#myname'))

    // 数据请求axios
    // 订阅函数调用
    // setInterval
    // 基于创建完的DOM进行 初始化， ，，betterScroll
  }


  render() {
    return (
      <div id='myname'>
        <h2>12-生命周期-初始化</h2>
        {this.state.myname}
      </div>
    )
  }
}

/* 

  16.2 16.8 17.0 18.0

  16.2 推出了几个新的生命周期，并推出Fiber技术，比线程比较小的

*/