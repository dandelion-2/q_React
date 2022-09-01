import React, { Component } from "react";

import BetterScroll from 'better-scroll'

export default class Demo2_13 extends Component {
  state = {
    list: ["111", "222", "333", "444", '555', '666', '777', '888', '999',"111", "222", "333", "444", '555'],
  };

  componentWillMount() {
    console.log('will mount',)
  }

  componentDidMount() {

    new BetterScroll("#wrapper")
  }

  render() {
    return (
      <div>
        <div id="wrapper" style={{height: '200px', background: '#bfa'}}>
          <ul>
            {this.state.list.map((item, index) => (
              <li key={index}>{ item }</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}