import React, { useContext, useEffect, useReducer, useState } from 'react'

import axios from "axios";
import "./css/index.css";



const initailState = {
  filmList: [],
  info: '111'
}

const reducer = (prevState, action) => {

  let newState = {...prevState}
  
  switch (action.type) {

    case 'change-filmList':
      newState.filmList = action.value 
      return newState

    case 'change-info':
      newState.info = action.value
      return newState
    
    default: 
      return prevState
  }
}

const GlobalContext = React.createContext() // 创建context对象


export const Demo03_15 = () => {

  /* ------------------------------- 不使用useReducer管理状态-------------------------- */
  // const [filmList, setFilmList] = useState([])
  // const [info, setInfo] = useState('111')

  // useEffect(() => {
  //   axios.get("/test.json").then((res) => {
  //     setFilmList(res.data.data.films);
  //   });
  // }, [])
  /* --------------------------------------------------------------------------------- */


  /* --------------------------------使用useReducer管理状态---------------------------- */
  const [state, dispatch] = useReducer(reducer, initailState);

  useEffect(() => {
    axios.get('/test.json').then(res => {
      dispatch({
        type: 'change-filmList',
        value: res.data.data.films
      })
    })
  }, [])
  /* --------------------------------------------------------------------------------- */

  return (
    <GlobalContext.Provider
      // 供应商组件传的值（一个对象）
      value={{
        state,
        dispatch
      }}>
      {/* 供应商 */}
      <div>
        {state.filmList.map((item) => {
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

  // const value = useContext(GlobalContext)
  // console.log(value)
  /*
    context 就是供应商提供的对象
  */

  const {dispatch} = useContext(GlobalContext)
  
  return (
    <div
      className='filmitem'
      onClick={() => {
        dispatch({
          type: 'change-info',
          value: synopsis
        })
      }}
    >
      <img src={poster} alt={name} />
      <h4>{name}</h4>
      <div>观众评分：{grade}</div>
    </div>
  )
}




function FilmDetail() {

  // const value = useContext(GlobalContext)
  const {state} = useContext(GlobalContext)

  return (

    /* --------------------------------使用useContext结构--------------------------------- */
    <div className="filmDetail">
      {state.info}
    </div>
    /* ---------------------------------------------------------------------------------- */



    /* --------------------------------不使用useContext结构------------------------------- */
    // <GlobalContext.Consumer>
    //     {(value) => 
    //       <div className="filmDetail">
    //         {value.state.info}
    //       </div>
    //     }
    // </GlobalContext.Consumer>
    /* ---------------------------------------------------------------------------------- */
  )
}

/* 
  dispatch 发出去之后，总会导致useReducer这个钩子函数执行，从而导致render的重新渲染，从而达到组将状态的更新

  useReducer 不支持异步，而Redux支持异步
*/