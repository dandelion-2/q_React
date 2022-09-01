import React, { Component } from "react";
import BetterScroll from 'better-scroll';

export default class Demo14 extends Component {
  state = {
    list: []
  }
  render() {
    return (
      <div>
        <button onClick={() => this.getDate()}>click</button>
        <div className="wrapper" style={{height: '200px', background: '#baf'}}>
          <ul className="content">
            {
              this.state.list.map(item =>
                <li key={item}>{item}</li>  
              )
            }
          </ul>
        </div>
      </div>
    );
  }
  getDate() {
    let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    this.setState({
      list: list
    }, () => {
      new BetterScroll(".wrapper")
    })

    // new BetterScroll(".wrapper") // 放这儿不能滑动，因为DOM没有更新

    console.log(this.state.list); // []
    console.log(document.querySelector('li')); // null
  }
}
