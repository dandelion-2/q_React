import React, { Component, createRef } from 'react'

export default class Demo6 extends Component {

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
    console.log("click2", this.a) /* 无法访问到a,this 是undefined */
    /* 
      handleClick2 这个函数的this是指向，调用handleClick2这个button点击事件系统，没有指向Demo6这个
        React组件实例，this丢了。
      补救方案：修改button点击事件的this指向。 
              <----  .bind(this)  ---->
    */
  }

  handleClick3 = () => {
    console.log("handleClick3", this.a);
  }

  handleClick4 = () => {
    console.log("handleClick4", this.a)
  }
}

// 修改this指向
/* 
  call  改变this指向，自动执行函数
  apply 改变this指向，自动执行函数
  bind  改变this指向，不会自动执行函数
*/

var obj1 = {
  name: 'obj1',
  getName() {
    console.log(this.name)
  }
}
var obj2 = {
  name: 'obj2',
  getName() {
    console.log(this.name)
  }
}
obj1.getName.call(obj2)

obj1.getName.apply(obj2)

obj1.getName.bind(obj2)();