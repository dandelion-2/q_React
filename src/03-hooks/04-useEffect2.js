import React, { useEffect, useState } from 'react'

export const Demo3_04 = () => {

  const [name, setName] = useState('jinbo')

  useEffect(() => {
    setName(name.substring(0, 1).toUpperCase() + name.substring(1))

    // 第二个参数写空数组时，只执行一次，数组的值就是useEffect监听状态改变的依赖，依赖变化，就执行useEffect一次
  // }, [])
  }, [name])

  return (
    <div>
      {name}
      <button
        onClick={() => {
          setName('xiaoming')
        }}
      >click</button>
    </div>
  )
}
