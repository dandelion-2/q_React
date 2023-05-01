import React, { useRef, useState } from 'react'

export const Demo03_10 = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const myRef = useRef();

  const handleChange = (event) => {
    console.log("handleChange", event.target.value);

    setText(event.target.value);
  };

  const handleAdd = () => {

    // console.log(myRef.current)
    console.log(myRef.current.value)

    // console.log(text2413.js);
    setList([...list, myRef.current.value]);

    // 清空
    // setText("");
  };

  const handleDel = (index) => {

    let newLish = [...list]
    newLish.splice(index, 1)

    setList(newLish)
  };

  return (
    <div>
      <input
        ref={myRef}
      />
      <button onClick={handleAdd}>add</button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button
              onClick={() => handleDel(index)}>
              删除
            </button>
          </li>
        ))}
      </ul>
      
      {!list.length && <div>暂无代办事项</div>}

      
    </div>
  );
}
