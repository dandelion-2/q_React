import React, { Component } from 'react';

// import {Swiper} from 'swiper/react';

import Swiper, {Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

Swiper.use([Navigation, Pagination])

export default class PSwiper extends Component {

  // state = {
  //   list: ['111', '222', '333']
  // }


  componentDidMount() {
    new Swiper('.swiper', {
      pagination: {
        el: '.swiper-pagination',
      },

      // 衔接滑动
      loop: this.props.loop
    })
  }
  


  render() {
    return (
      <div>
        <div className='swiper' style={{height: '200px', backgroundColor: 'coral'}}>
          <div className="swiper-wrapper">
            {/* {this.state.list.map((item, index) => {
              return (
                <div key={index} className='swiper-slide'>
                  {item}
                </div>
              )
            })} */}

            {/* <div className='swiper-slide'>111</div>
            <div className='swiper-slide'>222</div>
            <div className='swiper-slide'>333</div> */}


            {/* 使用插槽达到复用性 */}
            {this.props.children}

          </div>

          <div className="swiper-pagination"></div>
        </div>
      </div>  
    )
  }
}
