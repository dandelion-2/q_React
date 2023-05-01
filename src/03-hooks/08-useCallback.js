import React, { useCallback, useMemo, useState } from "react";

export const Demo3_08 = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const [myName, setName] = useState("jinbo");

  const handleChange = useCallback((event) => {
    console.log("handleChange", event.target.value);

    setText(event.target.value);
  }, []);

  const handleAdd = useCallback(() => {
    console.log(text);
    setList([...list, text]);

    // 清空
    setText("");
  }, [text, list]);

  // useMemo 会把第一个参数执行了，把执行结果返还给 定义的函数 handleDel
  //        如果list没有改变的话，执行的是之前缓存的结果
  //        若果list 改变的话，就是返还的是一个新声明的函数

  /* 

    useMemo useMemo 更适合经过函数计算得到一个确定的值，比如记忆组件

  */




  const handleDel = useMemo(
    () => (index) => {
      let newLish = [...list];
      newLish.splice(index, 1);

      setList(newLish);
    },
    [list]
  );

  return (
    <div>
      {myName} -{" "}
      <button
        onClick={() => {
          setName("xiaoming");
        }}>
        change-myname
      </button>
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
            <button onClick={() => handleDel(index)}>删除</button>
          </li>
        ))}
      </ul>
      {!list.length && <div>暂无代办事项</div>}
    </div>
  );
};

/* 
  useState 可以记忆状态
  useCallback 记忆函数
    - 防止因为组件重新渲染，导致方法被重新创建，起到缓存作用，只有第二个参数发生变化时，才重新声明一次
    - 跟不想关的东西，常常一起用

  * 指定这个函数依赖于哪个变量，这个变量改变的时候，才重新生成该函数，如果别的值改变的时候，就不重新生成这个函数
  * 原因：状态改变，render函数要重新执行，重新执行render，里面的函数又要重新定义一次，而重新生成函数要消耗性能。

  
  const handleChange = useCallback(() => {
    console.log(name)
  }, [name])
  
  只有name改变后， 这个函数才会重新声明一次，
  如果传入空数组， 那么就是第一次创建后就被缓存， 如果name后期改变了,拿到的还是老的name。
  如果不传第二个参数，每次都会重新声明一次，拿到的就是最新的name.


*/
