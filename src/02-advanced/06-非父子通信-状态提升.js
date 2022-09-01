import React, { Component } from "react";

import axios from "axios";
import "./css/03-communication.css";

export default class Demo2_6 extends Component {
  constructor() {
    super();

    this.state = {
      filmList: [],
      info: ''
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
              onEvent={(value) => {
                console.log("父组件接受", value);

                this.setState({
                  info: value
                })
              }}></FilmItem>
          );
        })}

        {/* filmDetail 电影详细信息 */}
        <FilmDetail info={this.state.info}></FilmDetail>
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
          console.log('FilmItem组件', synopsis);
          this.props.onEvent(synopsis);
        }}>
        <img src={poster} alt={name} />
        <h4>{name}</h4>
        <div>观众评分：{grade}</div>
      </div>
    );
  }
}

class FilmDetail extends Component {
  render() {
    return (
      <div className="filmDetail">
        {this.props.info}
      </div>
    );
  }
}
