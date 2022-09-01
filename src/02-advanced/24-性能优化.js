import React, { PureComponent } from 'react'

export default class Demo2_24 extends PureComponent {

  state = {
    myname: 'jinbo'
  }




  // 组件应该更新吗？ (可以阻止render的执行)
  // shouldComponentUpdate(nextProps, nextState, nextContext) {
    // console.log('触发了shouldComponentUpdate')
    // return true;

    /* if(条件达成)
    if (老状态 !== 新的转态) {
      return true
    } */

    // if (JSON.stringify(this.state) !== JSON.stringify(nextState)) {
    //   return true
    // } 
    
    // return false

    // 简写
    // return this.state.myname !== nextState.myname &&  true
    // return (this.state.myname !== nextState.myname) ? true : false

  // }

  render() {
    console.log('触发了render')
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              myname: '金波'
            })
          }}
        >click</button>
        { this.state.myname}
      </div>
    )
  }
}
