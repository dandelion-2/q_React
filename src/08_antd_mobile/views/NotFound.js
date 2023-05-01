import React from 'react'



const NotFound = () => {
  return (
      <div>NotFound</div>
  )
}

const connect_HOC = (cb, obj) => {

  let value = cb()
  return (MyComponent) => {
    return (props) => {
      return <div>
        <MyComponent {...value} {...props} {...obj}></MyComponent>
      </div>
    }
  }
}

export default connect_HOC(() => {
  return {
    a: 1,
    b: 2
  }
}, {
  aa(){},
  bb(){}
})(NotFound);