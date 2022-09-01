import React, { Component } from 'react'

export default class Demo18 extends Component {

  state = {
    text: '111'
  }

  render() {
    return (
      <div>18-状态与属性
        <button onClick={() => {
          this.setState({
            text: '22222'
          })
        }}>click-父</button>
        <Child text={this.state.text}></Child>
      </div>
    )
  }
}


class Child extends Component {
  render() {
    return (
      <div>
        child-{this.props.text}
      </div>
    )
  }
}