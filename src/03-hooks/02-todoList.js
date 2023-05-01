import React, { useState } from "react";

export const Demo3_02 = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (event) => {
    console.log("handleChange", event.target.value);

    setText(event.target.value);
  };

  const handleAdd = () => {
    console.log(text);
    setList([...list, text]);

    // 清空
    setText("");
  };

  const handleDel = (index) => {

    let newLish = [...list]
    newLish.splice(index, 1)

    setList(newLish)
  };

  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          handleChange(event);
        }}
        value={text}
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
};
