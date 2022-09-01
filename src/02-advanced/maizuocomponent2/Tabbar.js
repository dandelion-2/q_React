import React, { Component } from "react";

export default class Tabbar extends Component {
  // state = {
  //   list: [
  //     {
  //       id: 1,
  //       text: "电影",
  //     },
  //     {
  //       id: 2,
  //       text: "影院",
  //     },
  //     {
  //       id: 3,
  //       text: "我的",
  //     },
  //   ],

  //   // current: this.props.parentCurrent
  // };

  render() {
    return (
      <div>
        <ul>
          {this.props.list.map((item, index) => {
            return (
              <li
                key={item.id}
                // 当前点击的索引
                className={this.props.current === index ? "active" : null}
                onClick={() => this.handleClickChangeCurrent(index)}>
                {item.text}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  handleClickChangeCurrent = (index) => {
    // this.setState({
    //   current: index,
    // });

    // 通知父组件，该修改父组件那个状态了

    this.props.event(index);
  };
}