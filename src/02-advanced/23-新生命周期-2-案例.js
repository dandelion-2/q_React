import React, { Component, createRef } from "react";

import './css/reset.css'

export default class Demo2_23 extends Component {
  state = {
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  };


  myRef = createRef();


  getSnapshotBeforeUpdate() {
    console.log(this.myRef.current.scrollHeight)
    // 记录老的高度
    return this.myRef.current.scrollHeight;
  }

  componentDidUpdate(prevProps, prevState, value) {
    
    console.log(this.myRef.current.scrollHeight);

    this.myRef.current.scrollTop += this.myRef.current.scrollHeight - value;
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              list: [...[10, 11, 12, 13, 14, 15], ...this.state.list]
            })
          }}
        >来邮件</button>
        <h2>邮箱</h2>
        <div style={{ height: "200px", overflow: "auto" }} ref={this.myRef}>
          <ul>
            {this.state.list.map((item, index) => {
              return (
                <li key={index} style={{ height: "100px", backgroundColor: "#bfa" }}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
