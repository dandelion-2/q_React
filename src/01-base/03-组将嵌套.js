import React, { Component, Fragment } from "react";

export default class Demo3 extends Component {
  render() {
    return (
      <Fragment>
        <div>03-组将嵌套</div>
        <Son3>
          <div>222222222222222222222</div> {/* 这行写法有问题 */}
        </Son3>
        <Tabber></Tabber>
      </Fragment>
    );
  }
}

class Son3 extends Component {
  render() {
    return (
      <div>213</div>
    )
  }
}

/* const Tabber = () => {
  return <div>tabber</div>
} */ // 简写如下 =>

const Tabber = () => <div>tabber</div>