import React, { Component } from 'react'

export default class PSwiperItem extends Component {
  render() {
    return (
      <div className='swiper-slide'>
        {this.props.children}
      </div>
    )
  }
}
