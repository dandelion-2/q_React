import React, { Component } from 'react'

import axios from 'axios'

export default class Demo2_21 extends Component {

  state = {
    type: 1,
   
  }


  render() {
    return (
      <div>
        <ul>
          <li
            onClick={() => {
              this.setState({
                type: 1
              })
            }}
          >正在热映</li>
          <li
            onClick={() => {
              this.setState({
                type: 2
              })
            }}
          >即将上映</li>
        </ul>

        <FilmList type={this.state.type}></FilmList>
      </div>
    )
  }
}

class FilmList extends Component {

  state = {
    list: [],
    type: 1
  }

  // 初始化生命周期。只执行一次
  componentDidMount() {
    console.log('componentDidMount')

    if (this.props.type === 1) {
      // 请求卖座正在热映的电影
      // console.log('正在热映')

      axios({
        url: 'https://m.maizuo.com/gateway?cityId=510100&pageNum=1&pageSize=10&type=1&k=3861024',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1661018016798674938494977"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then((res) => { 
        console.log(res.data.data.films)

        this.setState({
          list: res.data.data.films
        })
      })


    } else {
      // 请求卖座即将上映的电影
      // console.log('即将上映')

      axios({
        url: 'https://m.maizuo.com/gateway?cityId=510100&pageNum=1&pageSize=10&type=2&k=7234693',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1661018016798674938494977","bc":"510100"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        console.log(res.data.data.films)

        this.setState({
          list: res.data.data.films
        })
      })
    }
  }

  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   // console.log('状态改变了哦')
  //   if (nextProps.type === 1) {
  //     // 请求卖座正在热映的电影
  //     console.log('正在热映')

  //     axios({
  //       url: 'https://m.maizuo.com/gateway?cityId=510100&pageNum=1&pageSize=10&type=1&k=3861024',
  //       headers: {
  //         'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1661018016798674938494977"}',
  //         'X-Host': 'mall.film-ticket.film.list'
  //       }
  //     }).then((res) => { 
  //       console.log(res.data.data.films)

  //       this.setState({
  //         list: res.data.data.films
  //       })
  //     })
  //   } else {
  //     // 请求卖座即将上映的电影
  //     console.log('即将上映')

  //     axios({
  //       url: 'https://m.maizuo.com/gateway?cityId=510100&pageNum=1&pageSize=10&type=2&k=7234693',
  //       headers: {
  //         'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1661018016798674938494977","bc":"510100"}',
  //         'X-Host': 'mall.film-ticket.film.list'
  //       }
  //     }).then(res => {
  //       console.log(res.data.data.films)

  //       this.setState({
  //         list: res.data.data.films
  //       })
  //     })
  //   }
  // }
  
  
  static getDerivedStateFromProps(nextProps, nextState) {

    console.log('getDerivedStateFromProps', nextProps, nextState)

    return {
      type: nextProps.type
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', this.state.type)

    /* if (this.state.type === '老的type') {
      return 
    } */

    // 一定要注意比较与前一次的属性是否一致，一致则不请求，避免不停的请求。造成死循环
    if (this.state.type === prevProps.type) return null

    if (this.state.type === 1) {
      
      console.log('正在热映')

      axios({
        url: 'https://m.maizuo.com/gateway?cityId=510100&pageNum=1&pageSize=10&type=1&k=3861024',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1661018016798674938494977"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then((res) => { 
        console.log(res.data.data.films)

        this.setState({
          list: res.data.data.films
        })
      })
    } else {
      // 请求卖座即将上映的电影
      console.log('即将上映')

      axios({
        url: 'https://m.maizuo.com/gateway?cityId=510100&pageNum=1&pageSize=10&type=2&k=7234693',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1661018016798674938494977","bc":"510100"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        console.log(res.data.data.films)

        this.setState({
          list: res.data.data.films
        })
      })
    }
  }

  

  render() {
    return (
      <div>
        FilmList-{this.props.type}
        {this.state.list.map((item) => {
          return (
            <li key={item.filmId}>{item.name}</li>
          )
        })}
      </div>
    ) 
  }
}