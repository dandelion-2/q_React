import React, { Component } from 'react'

import axios from 'axios'
import BetterScroll from 'better-scroll'

export default class Demo2_14 extends Component {

  state = {
    myName: 'jinbo',
    list: []
  }

  componentDidMount() {
    axios.get('/test.json').then((res) => {
      // console.log(res.data.data.films)
      
      this.setState({
        list: res.data.data.films
      })


      // new BetterScroll('#wrapper')
    })
  }


  // beforeUpdate
  // 16.3 已经不推荐使用，如果使用加上UNSAFE
  UNSAFE_componentWillUpdate() {
    console.log('componentWillUpdate', document.querySelector('#myname').innerHTML);
  }

  // Updated
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', document.querySelector('#myname').innerHTML)


    // 更新后获取DOM节点，更新

    console.log(prevState.list)
    if (prevState.list.length === 0) {
      new BetterScroll('#wrapper')
    }
    console.log(prevProps, prevState)
  }


  render() {
    console.log('render')
    return (
      <div id='myname'>
        <button onClick={() => {
          this.setState({
            myName: '金波'
          })
        }}>click</button>
        {this.state.myName}

        <div id='wrapper' style={{height: '100px', width: '100%', backgroundColor: '#bfa', overflow: 'hidden'}}>
          <ul>
            {
              this.state.list.map(item => (
                <li key={item.filmId}>{ item.name }</li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}
