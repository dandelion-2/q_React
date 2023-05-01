import React, { Component, useEffect } from 'react'

export default class Demo3_06 extends Component {

  state = {
    // isCreated: false
    isCreated: true
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              isCreated: !this.state.isCreated
            })
          }}
        >click</button>
        {this.state.isCreated ? <FChild></FChild> : null}
      </div>
    )
  }
}

const FChild = () => {

  useEffect(() => {

    window.onresize = () => {
      console.log('resize')
    }

    let timer = setInterval(() => {
      console.log('定时器')
    }, 2000)



    // 在回调函数体内返回一个回调函数
    return () => {
      console.log('组件销毁')
      // console.log(window)

      window.onresize = null;
      clearInterval(timer)
    }

  }, [])


  return (
    <div>
        child
    </div>
  )
}






class Child extends Component {

  componentDidMount() {
    // console.log('')
    window.onresize = () => {
      console.log('resize')
    }

    this.timer = setInterval(() => {
      console.log('定时器')
    }, 2000)
  }


  componentWillUnmount() {
    console.log('componentWillUnmount')

    clearInterval(this.timer)
  }

  render() {
    return (
      <div>
        child
      </div>
    )
  }
}


/* 

  useEffect 可以使用多次，只是一个函数调用


*/




/* const fn1 = () => {

}

const fn2 = function() {
  console.log(1)
}

fn2() */