import React, { Component, createRef } from 'react'

export default class Demo5 extends Component {

  a = 100;

  iptRef = createRef();
  // add = () => {
  //   console.log(this.iptRef.current.value)
  // }
  add(e) {
    console.log(e);
    console.log(e.this);
    // console.log(this.input.current.value);
  }

  render() {
    return (
      <div>
        <input ref={ this.iptRef } type="text" />
        <button onClick={ this.add }>add</button>
        <input type="text" />

        {/* 写法一 */}
        <button onClick={() => {
          console.log("click") /* 如果处理的逻辑比较多，不推荐这种写法 */
        }}>add</button>

        {/* 写法二 */}
        <button onClick={this.handleClick2}>add2</button>

        {/* 写法三 */}
        <button onClick={this.handleClick3}></button>

        {/* 写法四 */}
        <button onClick={() => {
          this.handleClick4() /* 推荐写法 */
        } }></button>
      </div>
    )
  }
  
  handleClick2() {
    console.log("click2")
  }

  handleClick3 = () => {
    console.log("handleClick3");
  }

  handleClick4 = () => {
    console.log("handleClick4")
  }
}


class A {
  constructor() {
    this.a = '111'
    this.b = '222'
  }
  c = 33333;

  d() {
    console.log(4444)
  }

  e=()=>{}
}
console.log(new A())