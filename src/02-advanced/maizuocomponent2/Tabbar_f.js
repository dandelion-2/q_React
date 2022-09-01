/**
 * 函数式组件版本
 */

import React from "react";

const Tabbar = (props) => {
  
  // 这个函数没干啥事，直接简写到return内部
  // const handleClickChangeCurrent = (index) => {
  //   // 通知父组件，该修改父组件那个状态了

  //   props.event(index);
  // };

  return (
    <div>
      <ul>
        {props.list.map((item, index) => {
          return (
            <li
              key={item.id}
              // 当前点击的索引
              className={props.current === index ? "active" : null}
              // onClick={() => handleClickChangeCurrent(index)}>

              // 简写
              onClick={() => props.event(index)}>
              {item.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tabbar;
