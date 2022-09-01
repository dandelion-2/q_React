import React, { Component } from "react";
import "./css/02-maizuo.css";

import Film from "./maizuocomponent2/Film";
import Cinema from "./maizuocomponent2/Cinema";
import Center from "./maizuocomponent2/Center";

// 类组件版本
// import Tabbar from "./maizuocomponent2/Tabbar";
// 函数式组件
import Tabbar from "./maizuocomponent2/Tabbar_f";

import Navbar from "./maizuocomponent2/Navbar";

export default class Demo2_32 extends Component {
  state = {
    list: [
      {
        id: 1,
        text: "电影",
      },
      {
        id: 2,
        text: "影院",
      },
      {
        id: 3,
        text: "个人中心",
      },
    ],
    current: 0,
  };

  which() {
    switch (this.state.current) {
      case 0:
        return <Film></Film>;
      // break;
      case 1:
        return <Cinema></Cinema>;
      case 2:
        return <Center></Center>;
      default:
        break;
    }
  }

  render() {
    return (
      <div>
        <Navbar
          event={() => {
            console.log("navbar", "告诉tabbar去切换到center组件");

            this.setState({
              current: 2,
            });
          }}></Navbar>
        {/* 
      <Film></Film>
      <Cinema></Cinema>
      <Center></Center> */}

        {/* 最笨的写法 */}
        {/* {
        this.state.current === 0 ```&& <Film></Film>
      }
      {
        this.state.current === 1 && <Cinema></Cinema>
      }
      {
        this.state.current === 2 && <Center></Center>
      } */}

        {this.which()}
        {this.state.current}
        <Tabbar
          event={(index) => {
            console.log("父组件定义", index);

            this.setState(
              {
                current: index,
              },
              () => {
                console.log(this.state.current);
              }
            );
          }}
          current={this.state.current}
          list={this.state.list}></Tabbar>
      </div>
    );
  }
}
