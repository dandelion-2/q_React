import React, { useCallback, useRef, useState } from 'react'

export const Demo3_11 = () => {

  const [name, setName] = useState('jinbo')

  const [count, setCount] = useState(0)
  

  

  const handleChange = useCallback(() => {
    console.log(name)
    setCount(count + 1)
  }, [name, count])

  // let myCount = 0 // can't save in component

  // use useRef hook save value

  let myCount = useRef(0)

  // myCount 是一个对象

  console.log(myCount) // 背后原理：闭包



  return (
    <div>
      {name}-{count}-{myCount.current}
      <br />
      <button
        onClick={() => {
          handleChange()
          setName(name.substring(0, 1).toUpperCase() + name.substring(1))
          myCount.current++
        }}
      >click</button>
    </div>
  )
}