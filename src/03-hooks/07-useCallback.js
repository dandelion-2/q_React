import React, {useCallback, useEffect, useState} from 'react'

export const Demo3_07 = () => {

  const [name, setName] = useState('jinbo');


  const [count, setCount] = useState(0);

  const handleChange = useCallback(() => {

      setCount((count) => {
          count = count + 1;
          console.log(`值1:`, count); // 当前的值
          return count;
      })

      console.log(`值2:`, count); // 上一个的值

  }, [name, count]);

  // console.log(`值3:`, count);

  let myCount = 0; // can't save in component


  return (
    <div>
      {name}-{count}-{myCount}
      <br />
      <button
        onClick={() => {
            handleChange()
            setName(name.substring(0, 1).toUpperCase() + name.substring(1))
            // setCount(count+1)
            // console.log(name, count)
        }}
      >click</button>
    </div>
  )
}