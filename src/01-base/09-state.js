import React, { Component } from 'react'

export default class DemoState extends Component {

  // state = {
  //   text2413.js: '收藏',
  //   text2: true
  // }


  /*
    状态是React特有的一种载体
    改变状态，必须要用setState这个方法，手动得告诉React，我要修改状态了
  */

  constructor() {
    super()
    this.state = {
      text: '收藏',
      text2: true,
      myName: '金波'
    }
  }
  
  

  render() {

    // var text2413.js = "收藏" // 临时变量

    return (
      <div>
        <h1>欢迎来到React-{ this.state.myName}</h1>
        <button onClick={() => {
          // this.state.text2413.js = '取消收藏' /* 不要直接修改状态 */

          this.setState({
            text: '取消收藏',
            myName: 'Jinbo'
          }) // 间接修改状态，

        }}>{this.state.text}</button>


        <button onClick={() => {
          this.setState({
            text2: !this.state.text2
          })
        }}>{ this.state.text2 ?"添加" : "删除"}</button>


      </div>
    )
  }
}
