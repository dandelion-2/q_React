import React, { Component, useEffect, useState } from 'react'

import axios from 'axios'

export const Demo3_05 = () => {

  const [type, setType] = useState(1)



  return (
    <div>
      <ul>
        <li
          onClick={() => {
            setType(1)
          }}
        >正在热映</li>
        <li
          onClick={() => {
            setType(2)
          }}
        >即将上映</li>
      </ul>

      <FFilmList type={type}></FFilmList>
    </div>
  )
}

const FFilmList = (props) => {

  const [list, setList] = useState([])

  let { type } = props

  useEffect(() => {
    if (type === 1) {
      // 请求卖座正在热映的电影
      console.log('正在热映')

      axios({
        url: 'https://m.maizuo.com/gateway?cityId=510100&pageNum=1&pageSize=10&type=1&k=3861024',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1661018016798674938494977"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then((res) => { 
        console.log(res.data.data.films)

        setList(res.data.data.films)
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

        setList(res.data.data.films)
      })
    }
  }, [type])
  
  
  return (
    <div> 
      FilmList-{type}
        {list.map((item) => {
          return (
            <li key={item.filmId}>{item.name}</li>
          )
        })}
    </div>
  )
}

class FilmList extends Component {

  state = {
    list: []
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

  UNSAFE_componentWillReceiveProps(nextProps) {
    // console.log('状态改变了哦')
    if (nextProps.type === 1) {
      // 请求卖座正在热映的电影
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