import React, { Component } from 'react'

export default class Demo2_19 extends Component {

  state = {
    // isCreated: false
    isCreated: true
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              isCreated: !this.state.isCreated
            })
          }}
        >click</button>
        {this.state.isCreated ? <Child></Child> : null}
      </div>
    )
  }
}

class Child extends Component {

  componentDidMount() {
    // console.log('')
    window.onresize = () => {
      console.log('resize')
    }

    this.timer = setInterval(() => {
      console.log('定时器')
    }, 2000)
  }


  componentWillUnmount() {
    console.log('componentWillUnmount')

    clearInterval(this.timer)
  }

  render() {
    return (
      <div>
        child
      </div>
    )
  }
}