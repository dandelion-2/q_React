import React, { Component } from 'react'

export default class Demo2_22 extends Component {

  state = {
    text: '1111'
  }


  // componentWillUpdate() {
  //   console.log('componentWillUpdate')
  // } // 不能与getSnapshotBeforeUpdate 生命周期共存

  componentDidUpdate(prevProps, prevState, value) {
    console.log('componentDidUpdate', value)
    // value 值就是getSnapshotBeforeUpdate return 的值
  }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate')
    return 100;
  }

  render() {
    console.log('render')
    return (
      <div>
        {this.state.text}
        <button
          onClick={() => {
            this.setState({
              text: '2222'
            })
          }}
        >click</button>
      </div>
    )
  } 
}


/* 
  willUpdate 在render 之前运行，而 getSnapshotBeforeUpdate 在render之后执行 DOM更新之前执行

  febel技术

*/