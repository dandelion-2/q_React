import React, { Component } from "react";

import axios from "axios";
import "./css/03-communication.css";

var bus = {

  list: [],

  // 订阅
  subscribe(callback) {
    this.list.push(callback)
  },

  // 发布
  publish(text) {
    console.log(this.list)

    this.list.forEach(callback => {
      callback && callback(text)
    })
  }
}



export default class Demo2_6 extends Component {
  constructor() {
    super();

    this.state = {
      filmList: [],
    };

    axios.get("/test.json").then((res) => {
      console.log(res.data.data.films);

      this.setState({
        filmList: res.data.data.films,
      });
    });
  }

  render() {
    return (
      <div>
        
        {/* { this.state.info} */}

        {this.state.filmList.map((item) => {
          // return <FilmItem key={item.filmId} name={item.name} poster={item.poster}></FilmItem>;
          // 简写
          return (
            <FilmItem
              key={item.filmId}
              {...item}
              ></FilmItem>
          );
        })}

        {/* filmDetail 电影详细信息 */}
        <FilmDetail></FilmDetail>
      </div>
    );
  }
}

// 受控组件
class FilmItem extends Component {
  render() {
    console.log(this.props);

    let { name, poster, grade, synopsis } = this.props;

    return (
      <div
        className="filmitem"
        onClick={() => {
          // console.log('FilmItem组件', synopsis);

          // 发布出去
          bus.publish(synopsis)

        }}>
        <img src={poster} alt={name} />
        <h4>{name}</h4>
        <div>观众评分：{grade}</div>
      </div>
    );
  }
}

class FilmDetail extends Component {

  constructor() {
    super()

    this.state = {
      info: ''
    }

    bus.subscribe((info) => {
      console.log("我在filmDetail中定义", info)

      this.setState({
        info: info
      })
    })
  }


  render() {
    return (
      <div className="filmDetail">
        {this.state.info}
      </div>
    );
  } 
}




// bus.subscribe(() => {
//   console.log('111')
// })