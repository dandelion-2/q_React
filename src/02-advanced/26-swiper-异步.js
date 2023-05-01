import React, { Component } from 'react';

// import {Swiper} from 'swiper/react';

import Swiper, {Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

Swiper.use([Navigation, Pagination])

export default class Demo2_26 extends Component {

  state = {
    list: []
  }


  componentDidMount() {

    setTimeout(() => {
      this.setState({
        list: ['aaa', 'bbb', 'ccc']
      })

      // 方法二：或者在这儿new一下
      new Swiper('.swiper', {
        pagination: {
          el: '.swiper-pagination',
        }
      })
    }, 1000)


    // yibu 不阻塞，先执行了new 

    
  }
  
  // 方法一：
  componentDidUpdate() {
    // new Swiper('.swiper', {
    //   pagination: {
    //     el: '.swiper-pagination',
    //   }
    // })
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
