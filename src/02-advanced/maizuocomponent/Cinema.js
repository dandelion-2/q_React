/* 
  电影组件
*/
import React, { Component } from "react";
import axios from "axios";

export default class Cinema extends Component {
  state = {
    cinemaList: [],
    // bakcinemaList 备份的数据
    bakcinemaList: []
  };

  constructor() {
    super();

    // 请求数据
    // axios
    //   .get("https://m.maizuo.com/gateway?cityId=510100&pageNum=1&pageSize=10&type=1&k=8013253")
    //   .then((res) => {})
    //   .catch((err) => console.log(err));

    axios({
      url: "https://m.maizuo.com/gateway?cityId=510100&ticketFlag=1&k=7950393",
      method: "get",
      headers: {
        "X-Host": "mall.film-ticket.cinema.list",
      },
    }).then((res) => {
      // 接口数据
      // console.log(res.data.data.cinemas)
      // this.state.cinemaList = res.data.data.cinemas; // 不能直接修改状态
      this.setState({
        cinemaList: res.data.data.cinemas,
        bakcinemaList: res.data.data.cinemas
      });

      
    });
  }

  // 生命周期函数中发送请求

  render() {
    return (
      <div>
        <input type="text" onClick={this.handleInput} />
        {this.state.cinemaList.map((item) => {
          return (
            <dl key={item.cinemaId}>
              <dt>{item.name}</dt>
              <dd>{item.address}</dd>
            </dl>
          );
        })}
      </div>
    );
  }

  // 模糊搜索
  handleInput = (event) => {
    // console.log("input", event.target.value);

    // 过滤
    const newList = this.state.bakcinemaList.filter(
      (item) => item.name.toUpperCase().includes(event.target.value) || item.address.toUpperCase().includes(event.target.value)
    );
    // console.log(newList);

    this.setState({
      cinemaList: newList
    })

    console.log(this.state.cinemaList);

  };
}

/* 
  filter 数组过滤，会返回过滤的结果数组，不会影响原数组
*/

const arr = ["aaa", "bbb", "bcc"];
// const newArr = arr.filter(item => false);
const newArr = arr.filter((item) => item.includes("b"));
console.log(newArr);
const str = "111";
// str.toUpperCase;
