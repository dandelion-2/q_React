import React, { useReducer } from "react";


// 处理函数
const reducer = (prevState, action) => {
  console.log('reducer', prevState, action);


  // don't change prevState，
  let newState = { ...prevState };

  switch (action.type) {
    case 'jinbo-minus':
      newState.count--;
      return newState;
    
    case 'jinbo-add':
      newState.count++;
      return newState;
    
    default:
      return prevState
  }
}

// 定义在外部的对象
const intialState = {
  count: 0,
}



export const Demo03_13 = () => {
  // const [count, setCount] = useState(0)

  const [state, dispatch] = useReducer(reducer, intialState)

  return (
    <div>
      <button
        onClick={() => {
          dispatch({type: 'jinbo-minus'})
        }}>
        -
      </button>
      {state.count}
      <button
        onClick={() => {
          dispatch({type: 'jinbo-add'})
        }}
      >
        &nbsp;+&nbsp;
      </button>
    </div>
  )
}

// const reducer = () => {
  
// }

// const intialState = () => {
//   count: 0
// }


// export default function Demo03_13() {

//   const [state, dispatch] = useReducer(reducer, intialState)

//   return (
//     <div>
//       <button>-</button>
//       {state.count}
//       <button>+</button>
//     </div>
//   )
// }





/* 

  UI 与 逻辑 分离，UI管理页面，逻辑对状态进行管理

*/