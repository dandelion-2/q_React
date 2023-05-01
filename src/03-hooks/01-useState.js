import React, { useState } from 'react'

export default function Demo3_01() {

  const [state, setState] = useState('jinbo')

  const [age, setAge] = useState(100)

  // 返回值是一个 [存储状态的值, 改变状态function]

  return (
    <div>
      <button
        onClick={() => {
          setState("金波");
          setAge(25)
        }}
      >click</button>
      {state}
      <br />
      {age}
    </div>
  )
}




// const App = () => {
//   return (
//     <div>01-useState</div>
//   )
// }
