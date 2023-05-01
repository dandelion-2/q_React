import React, { Component, useContext, useEffect, useState } from 'react'

import axios from "axios";
import "./css/index.css";


const GlobalContext = React.createContext() // 创建context对象


export const Demo03_12 = () => {


  const [filmList, setFilmList] = useState([])
  const [info, setInfo] = useState('111')


  useEffect(() => {
    axios.get("/test.json").then((res) => {
      // console.log(res.data.data.films);

      setFilmList(res.data.data.films);
    });
  }, [])

  
    return (
      <GlobalContext.Provider
        // 供应商组件传的值（一个对象）
        value={{
          call: '打电话',
          sms: '短信',
          info: info,
          // 该这个状态的方法
          changeInfo: (value_text) => {
            setInfo(value_text)
          }
        }}>
        {/* 供应商 */}
        <div>
          
          {/* { this.state.info} */}

          {filmList.map((item) => {
            // return <FilmItem key={item.filmId} name={item.name} poster={item.poster}></FilmItem>;
            // 简写
            return (
              <FilmItem key={item.filmId} {...item}></FilmItem>
            );
          })}

          {/* filmDetail 电影详细信息 */}
          <FilmDetail></FilmDetail>
        </div>
      </GlobalContext.Provider>
    );
}


// 受控组件
const FilmItem = (props) => {

  let { name, poster, grade, synopsis } = props;

  const value = useContext(GlobalContext)
  console.log(value)

  /* 
  
    context 就是供应商提供的对象
  
  */

  return (
    <div
      className='filmitem'
      onClick={() => {
        value.changeInfo(synopsis)
      }}
    >
      <img src={poster} alt={name} />
      <h4>{name}</h4>
      <div>观众评分：{grade}</div>
    </div>
  
  
    // {/* 消费者 */}  {/* 注意，里面不能放DOM结构，要用回调函数包裹起来 */}
    // <GlobalContext.Consumer>
    // {(value) => {
    //   // console.log(value)
    //   // value.info = '2222' // 这个value被改成2222了
    //   return (
    //     <div
    //       className="filmitem"
    //       onClick={() => {
    // ! console.log("FilmItem组件", synopsis);

    // ! value.info = '2222' // 这儿并没有被改动，render函数并没有执行,所以需要把info做成根组件的状态

    // ! value.changeInfo('2222')
    //         value.changeInfo(synopsis)

    //       }}>
    //       <img src={poster} alt={name} />
    //       <h4>{name}</h4>
    //       <div>观众评分：{grade}</div>
    //     </div>
    //   );
    // }}
    // </GlobalContext.Consumer>
  )
}




function FilmDetail() {

  // const value = useContext(GlobalContext)


  return (
    // <div className="filmDetail">
    //   {value.info}
    // </div>


    <GlobalContext.Consumer>
        {(value) => 
          <div className="filmDetail">
            {value.info}
          </div>
        }
    </GlobalContext.Consumer>
  )
}