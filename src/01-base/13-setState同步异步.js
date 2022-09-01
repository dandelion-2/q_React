import React, { Component } from 'react'

export default class Demo13 extends Component {
  state = {
    count: 0
  }
  render() {
    return (
      <div>
        <h1>13-setState同步异步</h1>
        {this.state.count}&nbsp;
        <button onClick={this.handleAdd1}>+1</button>
        <button onClick={this.handleAdd2}>+2</button>
      </div>
    )
  }

  handleAdd1 = () => {
    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log(this.state.count)
    })

    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log(this.state.count)
    })


    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log(this.state.count)
      // 状态、DOM已经更新完了
    })
  }

  handleAdd2 = () => {
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1
      })
  
      console.log(this.state.count)
  
      this.setState({
        count: this.state.count + 1
      })
  
      console.log(this.state.count)
  
      this.setState({
        count: this.state.count + 1
      })
  
      console.log(this.state.count)
    }, 0)
  }
}

/* 
  setState 处在同步逻辑中，是异步更新状态，更新真实DOM
    --调用这个函数后，没有立即更新状态

  setState 处在异步逻辑中，是同步更新状态，更新真实DOM

  注意：React 18后，异步代码合并，都为异步更新。

  setState 接受第二个参数，第二个参数是回调函数，状态和DOM更新完毕后会被触发。

*/