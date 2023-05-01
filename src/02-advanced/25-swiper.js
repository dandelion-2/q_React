import React, { Component } from 'react';

// import {Swiper} from 'swiper/react';

import Swiper, {Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

Swiper.use([Navigation, Pagination])

export default class Demo2_25 extends Component {

  state = {
    list: ['111', '222', '333']
  }


  componentDidMount() {
    new Swiper('.swiper', {
      pagination: {
        el: '.swiper-pagination',
      }
    })
  }
  


  render() {
    return (
      <div>
        <div className='swiper' style={{height: '200px', backgroundColor: 'coral'}}>
          <div className="swiper-wrapper">
            {this.state.list.map((item, index) => {
              return (
                <div key={index} className='swiper-slide'>
                  {item}
                </div>
              )
            })}
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </div>  
    )
  }
}
