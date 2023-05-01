import React, { createContext, useContext, useReducer } from "react";



const initailState = {
  a: '1111',
  b: '1111'
}

const reducer = (prevState, action) => {

  let newState = {...prevState}

  switch (action.type) {
    case 'change-a':
      newState.a = action.value
      return newState
    
    case 'change-b':
      newState.b = action.value
      return newState
    
    default:
      return prevState
  }
}


const GlobalContext = createContext();

export const Demo03_14 = () => {

  const [state, dispatch] = useReducer(reducer, initailState)

  return (
    
    <GlobalContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      <div>
        <Child1></Child1>
        <Child2></Child2>
        <Child3></Child3>
      </div>
    </GlobalContext.Provider>
  )
}


const Child1 = () => {

  /* ----------------------------------------使用useContext结构-------------------- */
  const {dispatch} = useContext(GlobalContext)

  return (

    /* --------------------------------------不使用 useContext------------------------------------ */
    // <GlobalContext.Consumer>
    //   {(value) => {
    //     return (
    //       <div style={{background: '#baf'}}>
    //         <button
    //           onClick={() => {
    //             value.dispatch({
    //               type: 'change-a',
    //               value: '2222'
    //             })
    //           }}
    //         >改变1</button>
    //         <button>改变2</button>
    //       </div>
    //     )
    //   }}
    // </GlobalContext.Consumer>
    /* ----------------------------------------------------------------------------------------- */

    /* 简写版本 */
    /* ---------------------------------------使用useContext------------------------------------ */
    <div style={{background: '#baf'}}>
      <button
        onClick={() => {
          dispatch({
            type: 'change-a',
            value: '2222'
          })
        }}
      >改变1</button>
      <button
        onClick={() => {
          dispatch({
            type: 'change-b',
            value: '3333'
          })
        }}
      >改变2</button>
    </div>
    /* ----------------------------------------------------------------------------------------- */
  )
}


const Child2 = () => {

  // 不能在每个孩子组件使用useReducer，因为使用后，状态已经是一个全新的了
  // const [state, dispatch] = useReducer(dispatch, initailState)
  const {state} = useContext(GlobalContext)

  return (
    // <GlobalContext.Consumer>
      <div style={{ background: 'coral' }}>
        {state.a}
      </div>
    // </GlobalContext.Consumer>
  )
}


const Child3 = () => {

  // const [state, dispatch] = useReducer(dispatch, initailState)

  const {state} = useContext(GlobalContext)

  return (
    // <GlobalContext.Consumer>
      <div style={{ background: 'pink' }}>
        {state.b}
      </div>
    // </GlobalContext.Consumer>
  )
}