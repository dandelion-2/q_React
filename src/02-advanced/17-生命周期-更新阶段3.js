import React, { Component } from 'react'

// import axios from 'axios'

export default class Demo2_17 extends Component {

  state = {
    text: '111111'
  }

  render() {
    return (
      <div>
        {this.state.text}
        <button
          onClick={() => {
            this.setState({
              text: '222222'
            })
          }}
        >click</button>
        <Child text={ this.state.text }></Child>
      </div>
    )
  }
}

class Child extends Component {

  state = {
    text: 'jinbo'
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // 最先获得父组件传来的属性，可以利用属性进行ajax或者逻辑处理
    // 把属性转化成孩子自己的状态
    console.log('componentWillReceiveProps', nextProps)

    this.setState({
      text: nextProps.text+ '24岁'
    })
  }


  render() {
    return (
      <div>
        {this.state.text}
        {/* <a href="#">不跳转</a> */}
      </div>
    )
  }
}
