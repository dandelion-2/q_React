import React, { Component } from "react";
import './css/02-maizuo.css'

import Film from './maizuocomponent/Film'
import Cinema from './maizuocomponent/Cinema'
import Center from './maizuocomponent/Center'


export default class Demo12 extends Component {
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
        text: "我的",
      },
    ],
    current: 0
  };

  which() {
    // return '2222'

    // if() {}

    // switch() {} 

    switch (this.state.current) {
      case 0:
        return <Film></Film>
        // break;
      case 1:
        return <Cinema></Cinema>
      case 2:
        return <Center></Center>    
      default:
        break;
    }
  }

  render() {
    return <div>
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

      {
        this.which()
      }

      
      <ul>
        {this.state.list.map((item, index) => {
          return (
            <li key={item.id} className={ /* 当前点击的索引 */ this.state.current === index ? "active" : null} onClick={()=>this.handleClickChangeCurrent(index)}>{item.text}</li>
          )
        })}
      </ul>
    </div>;
  }

  handleClickChangeCurrent = (index) => {
    this.setState({
      current: index
    })
  }
}
