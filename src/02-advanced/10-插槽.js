import React, { Component } from 'react'



export default class Demo_10 extends Component {
  render() {
    return (
      <div>
        <h2>10-插槽</h2>
        <Child>
          {/* Child 标签中的DOM会被放入 children这个属性里面
            放入多个是一个数组
          */}
          <div>1111</div>
          <div>2222</div>
          <div>3333</div>
          <div>4444</div>
        </Child>

        <Swiper>
          <img src="" alt="" />
          <div>22222</div>
        </Swiper>



      </div>
    )
  }
}


class Child extends Component {
  render() {
    return (
      <div>
        Child

        {/* 插槽 vue slot，具名插槽 */}

        {this.props.children[0]}
        {this.props.children[1]}
        {this.props.children[2]}
        {this.props.children[3]}

      </div>
    )
  }
}

class Swiper extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

/* 
  1.为了复用，
  2.一定程度减少父子通信

*/