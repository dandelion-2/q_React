import React, { Component } from 'react'

import axios from "axios";
import "./css/03-communication.css";


const GlobalContext = React.createContext() // 创建context对象


export default class Demo2_9 extends Component {
  constructor() {
    super();

    this.state = {
      filmList: [],
      info: '1111'
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
      <GlobalContext.Provider
        // 供应商组件传的值（一个对象）
        value={{
          call: '打电话',
          sms: '短信',
          info: this.state.info,
          // 该这个状态的方法
          changeInfo: (value_text) => {
            this.setState({
              info: value_text
            })
          }
        }}> {/* 供应商 */}
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
      </GlobalContext.Provider>
    );
  }
}

// 受控组件
class FilmItem extends Component {
  render() {
    // console.log(this.props);

    let { name, poster, grade, synopsis } = this.props;

    return (

      // {/* 消费者 */}  {/* 注意，里面不能放DOM结构，要用回调函数包裹起来 */}
      <GlobalContext.Consumer>
        {(value) => {
          console.log(value)
          // value.info = '2222' // 这个value被改成2222了
          return (
            <div
              className="filmitem"
              onClick={() => {
                console.log("FilmItem组件", synopsis);

                // value.info = '2222' // 这儿并没有被改动，render函数并没有执行,所以需要把info做成根组件的状态

                // value.changeInfo('2222')
                value.changeInfo(synopsis)

              }}>
              <img src={poster} alt={name} />
              <h4>{name}</h4>
              <div>观众评分：{grade}</div>
            </div>
          );
        }}
      </GlobalContext.Consumer>
    );
  }
}

class FilmDetail extends Component {
  render() {
    return (
      <GlobalContext.Consumer>
        {(value) => 
          <div className="filmDetail">
            {value.info}
          </div>
        }
      </GlobalContext.Consumer>
    );
  }
}
