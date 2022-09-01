import React, { Component } from 'react'

export default class Demo7 extends Component {

  a = 100;

  render() {
    return (
      <div>
        <input type="text" />

        {/* 写法一 */}
        <button onClick={() => {
          console.log("click", this.a) /* 如果处理的逻辑比较多，不推荐这种写法 */
        }}>add</button>

        {/* 写法二 */}
        <button onClick={this.handleClick2.bind(this)}>handleClick2</button> {/* 不推荐这种写法 */}

        {/* 写法三 */}
        <button onClick={this.handleClick3}>handleClick3</button> {/* 比较推荐 */}

        {/* 写法四 */}
        <button onClick={() => {
          this.handleClick4() /* 非常推荐写法 */
        } }>handleClick4</button>
      </div>
    )
  }
  handleClick2() {

  }

  handleClick3 = (evt) => {
    console.log("click3",evt,evt.target)
  }

  handleClick4 = () => { 
    
  }

}


/* 
  React中事件绑定，它没有绑定到具体的DOM节点身上，绑定到每一个DOM上很消耗内存，
      而是采用事件代理的方案。

*/