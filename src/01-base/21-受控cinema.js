/* 
  电影组件
*/
import React, { Component } from "react";
import axios from "axios";

export default class Demo21 extends Component {
  state = {
    cinemaList: [],
    // bakcinemaList 备份的数据
    // bakcinemaList: []
    mytext: "",
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
        // bakcinemaList: res.data.data.cinemas
      });
    });
  }

  // 生命周期函数中发送请求

  render() {
    return (
      <div>
        <input
          value={this.state.mytext} onChange={(event) => {
            this.setState({
              mytext: event.target.value
            })
          }}
          type="text" />
        {this.getCinemaList().map((item) => {
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
  // handleInput = (event) => {
  //   // console.log("input", event.target.value);

  //   // 过滤
  //   const newList = this.state.cinemaList.filter(
  //     (item) => item.name.toUpperCase().includes(event.target.value) || item.address.toUpperCase().includes(event.target.value)
  //   );
  //   // console.log(newList);

  //   this.setState({
  //     cinemaList: newList,
  //   });
  //   console.log(this.state.cinemaList);
  // };

  // 模糊搜索
  getCinemaList() {
    return this.state.cinemaList.filter(item => item.name.toUpperCase().includes(this.state.mytext) || item.address.toUpperCase().includes(this.state.mytext))
  }
}
