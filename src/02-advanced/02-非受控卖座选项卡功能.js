import React, { Component } from "react";
import "./css/02-maizuo.css";

import Film from "./maizuocomponent/Film";
import Cinema from "./maizuocomponent/Cinema";
import Center from "./maizuocomponent/Center";
import Tabbar from "./maizuocomponent/Tabbar";
import Navbar from "./maizuocomponent/Navbar";

export default class Demo2_2 extends Component {
  state = {
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
              current: 2
            })
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
          parentCurrent={this.state.current}
        ></Tabbar>
      </div>
    );
  }
}
