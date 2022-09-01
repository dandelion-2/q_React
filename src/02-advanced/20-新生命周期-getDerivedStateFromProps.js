import React, { Component } from 'react'

export default class Demo2_20 extends Component {

  state = {
    name: 'jinbo',
    myAge: '24'
  }

  /* 
    getDerivedStateFromProps

    状态同名的会覆盖调，不同名保留
  */


  static getDerivedStateFromProps(nextProps, nextState) {
    // 
    console.log('getDerivdStateFromProps', nextState)
    return {
      // name: '蒲金波'
      name: nextState.name.substring(0, 1).toUpperCase()+ nextState.name.substring(1)
    }
  }

  render() {
    return (
      <div>
        <h2>Demo2_20</h2>
        {this.state.name}
        <button
          onClick={() => {
            this.setState({
              name: 'xiaoming'
            })
          }}
        >click</button>
      </div>
    )
  }
}
