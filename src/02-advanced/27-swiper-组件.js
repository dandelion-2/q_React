import React, { Component } from "react";

import Swiper from "./swiper/swiper";
import SwiperItem from "./swiper/SwiperItem";
import axios from 'axios'

export default class Demo2_27 extends Component {
  state = {
    list: ['111', '222', '333'],
  };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     list: ["aaa", "bbb", "ccc"],
    //   });
    // }, 1000);

    // axios({
    //   url: '',
    //   headers: {}
    // }).then(res => {
    //   this.setState({
    //     list: res.data.data
    //   })
    // }) 
  }

  render() {
    return (
      <div>
        <Swiper loop={true}>
          {/* <div className='swiper-slide'>111</div>
            <div className='swiper-slide'>222</div>
            <div className='swiper-slide'>333</div> */}

          {/* 有类名，继续封装 */}
          {/* <SwiperItem>111</SwiperItem>
          <SwiperItem>222</SwiperItem>
          <SwiperItem>333</SwiperItem> */}

          {/* 实际结合请求写法 */}
          {this.state.list.map((item, index) => {
            // return <SwiperItem key={index}>{item}</SwiperItem>;
            return (
              <SwiperItem key={index}>
                {/* <img src={item.imgUrl} alt={item.name} /> */}
                {item}
              </SwiperItem>
            );
          })}
        </Swiper>
      </div>
    );
  }
}
