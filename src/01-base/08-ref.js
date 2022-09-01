import React, { Component, createRef } from 'react'

export default class Demo_ref extends Component {

  // 写法二：
  mytext2 = createRef();

  render() {
    return (
      <div>
        <input  ref="mytext"  type="text" />

        {/* 写法一 */}
        <button onClick={() => {
          console.log("click", this.refs.mytext.value) /* 如果处理的逻辑比较多，不推荐这种写法 */
        }}>add</button>

        <hr />

        {/* 写法二 */}
        <input ref={this.mytext2} type="text" />
        <button onClick={() => {
          console.log("click2", this.mytext2.current.value);
        }}>add2</button>
      </div>
    )
  }
}


/* 
  react中尽量减少DOM操作


*/
