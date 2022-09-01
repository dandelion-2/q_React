import React from "react";
import ReactDOM from "react-dom";


// import './02-advanced/css/index.css'
// import Demo1 from "./01-base/01-class组件";
// import Demo2 from "./01-base/02-function组件";
// import Demo3 from "./01-base/03-组将嵌套";
// import Demo4 from "./01-base/04-组件的样式";
// import Demo5 from "./01-base/05-事件绑定-1";
// import Demo6 from "./01-base/06-事件绑定-2";
// import Demo7 from "./01-base/07-事件绑定-3";
// import Demo_ref from "./01-base/08-ref";
// import DemoState from "./01-base/09-state";
// import Demo10 from "./01-base/10-循环渲染";

// 案例
// import TodoList from "./01-base/11-todolist";
// 选项卡
// import Demo12 from "./01-base/12-选项卡";
// import Demo13 from "./01-base/13-setState同步异步";

// import Demo14 from "./01-base/14-betterSroll";
// import Demo16 from "./01-base/16-props";
// import Demo17 from "./01-base/17-props函数式组件";
// import Demo18 from "./01-base/18-状态与属性";
// import Demo20 from "./01-base/20-受控组件";
// import Demo21 from "./01-base/21-受控cinema";
// import Demo22 from "./01-base/22-受控todolist";


// 高级部分  组件通信
// import Advanced_1 from "./02-advanced/01-子传父";
// import Demo2_2 from "./02-advanced/02-非受控卖座选项卡功能";
// import Demo2_3 from "./02-advanced/03-受控卖座选项卡";
// import Demo2_4 from "./02-advanced/04-父子通信版-表单域组件";
// import Demo2_5 from "./02-advanced/05-ref版本-表单域组件";
// import Demo2_6 from "./02-advanced/06-非父子通信-状态提升";
// import Demo2_7 from "./02-advanced/07-非父子通信-发布订阅";
// import Demo2_9 from "./02-advanced/09-非父子通信-context";
// import Demo_10 from "./02-advanced/10-插槽";
// import Demo_11 from "./02-advanced/11-插槽版抽屉";

// 生命周期
// import Demo2_12 from "./02-advanced/12-生命周期-初始化";
// import Demo2_13 from "./02-advanced/13-生命周期-初始化案例";
// import Demo2_14 from "./02-advanced/14-生命周期-更新阶段";
// import Demo2_15 from "./02-advanced/15-生命周期-更新阶段2";
// import Demo2_16 from "./02-advanced/16-生命周期-更新阶段2-案例";
// import Demo2_17 from "./02-advanced/17-生命周期-更新阶段3";
// import Demo2_18 from "./02-advanced/18-生命周期-更新阶段3-案例";
// import Demo2_19 from "./02-advanced/19-生命周期-销毁";
// import Demo2_20 from "./02-advanced/20-新生命周期-getDerivedStateFromProps";
// import Demo2_21 from "./02-advanced/21-新生命周期-getDerivedFP-案例";
// import Demo2_22 from "./02-advanced/22-新生命周期-getSnapshotBeforeUpdate";
// import Demo2_23 from "./02-advanced/23-新生命周期-2-案例";
// import Demo2_24 from "./02-advanced/24-性能优化";
// import Demo2_25 from "./02-advanced/25-swiper";
// import Demo2_26 from "./02-advanced/26-swiper-异步";
// import Demo2_27 from "./02-advanced/27-swiper-组件";


//  --------------------------  hooks  ---------------------------------
// import Demo3_01 from "./03-hooks/01-useState";
// import { Demo3_02 } from "./03-hooks/02-todoList";
// import { Demo3_03 } from "./03-hooks/03-useEffect";
// import { Demo3_04 } from "./03-hooks/04-useEffect2";
// import { Demo3_05 } from "./03-hooks/05-useEffect2-案例";
// import Demo3_06 from "./03-hooks/06-useEffect3";
// import { Demo3_07 } from "./03-hooks/07-useCallback";
// import { Demo3_08 } from "./03-hooks/08-useCallback";
// import {Demo03_09} from "./03-hooks/09-useMemo";
// import { Demo03_10 } from "./03-hooks/10-useRef";
// import { Demo3_11 } from "./03-hooks/11-useRef-保存值";
// import { Demo03_12 } from "./03-hooks/12-useContext";
// import App from "./03-hooks/demo";
// import { Demo03_13 } from "./03-hooks/13-useReducer";
// import { Demo03_14 } from "./03-hooks/14-useReducer2";
// import { Demo03_15 } from "./03-hooks/15-useReducer3";
// import { Demo03_16 } from "./03-hooks/16-自定义Hooks";


// 路由
// import Router from './04-react-router/App';

// redux
// import {Provider} from "react-redux";
// import {store} from './05-redux/redux/store.js'
// import Router from './05-redux/App'

// import Router from './06-react-redux/App'
// import {Provider} from 'react-redux';
// import {store, persistor} from "./06-react-redux/redux/store";
// import {PersistGate} from "redux-persist/integration/react";

//！！！ antdesign 使用 ！！！
// import App_07 from './07-antd/01_antd引入';
// import App_07_02 from "./07-antd/02_栅格系统";
// import App_07_03 from "./07-antd/03_Layout";
// import App_07_04 from './07-antd/04_下拉菜单';
// import Antd_05 from "./07-antd/05_步骤条";
// import Antd_06 from './07-antd/06_轮播';
// import Antd_07 from "./07-antd/07_table";
// import Antd_08 from './07-antd/08_树型控件';
// import Antd_09 from "./07-antd/09_Modal";


// ---------------------------- Antd Design Mobile ------------------------------
import Antd_M from './08_antd_mobile/App.js';
import {Provider} from 'react-redux';
import {store, persistor} from "./08_antd_mobile/redux/store";
import {PersistGate} from "redux-persist/integration/react";

ReactDOM.render(
  // <React.StrictMode>{/* 严格模式 */}

 
  // <div style={{ width: "60vw", height: "600px", margin: "0 auto", padding: "10px" }}>
    <div>
    {/* <Demo16></Demo16> */}
    {/* <Demo17></Demo17> */}
    {/* <Demo18></Demo18> */}
    {/* <Demo20></Demo20> */}
    {/* <Advanced_1></Advanced_1> */}
    {/* <Demo2_2></Demo2_2> */}
    {/* <Demo2_3></Demo2_3> */}
    {/* <Demo2_4></Demo2_4> */}
    {/* <Demo2_5></Demo2_5> */}
    {/* <Demo2_6></Demo2_6> */}
    {/* <Demo2_7></Demo2_7> */}
    {/* <Demo2_9></Demo2_9> */}
    {/* <Demo_10></Demo_10> */}
    {/* <Demo_11></Demo_11> */}
    {/* <Demo2_12></Demo2_12> */}
    {/* <Demo2_13></Demo2_13> */}
    {/* <Demo2_14></Demo2_14> */}
    {/* <Demo2_15></Demo2_15> */}
    {/* <Demo2_16></Demo2_16> */}
    {/* <Demo2_17></Demo2_17> */}
    {/* <Demo2_18></Demo2_18> */}
    {/* <Demo2_19></Demo2_19> */}
    {/* <Demo2_20></Demo2_20> */}
    {/* <Demo2_21></Demo2_21>*/}
    {/* <Demo2_22></Demo2_22> */}
    {/* <Demo2_23></Demo2_23> */}
    {/* <Demo2_24></Demo2_24> */}
    {/* <Demo2_25></Demo2_25> */}
    {/* <Demo2_26></Demo2_26> */}
    {/* <Demo2_27></Demo2_27> */}

    {/* hooks */}
    {/* <Demo3_01></Demo3_01> */}
    {/* <Demo3_02></Demo3_02> */}
    {/* <Demo3_03></Demo3_03> */}
    {/* <Demo3_04></Demo3_04> */}
    {/* <Demo3_05></Demo3_05> */}
    {/* <Demo3_06></Demo3_06> */}
    {/* <Demo3_07></Demo3_07>*/}
    {/* <Demo3_08></Demo3_08> */}
    {/* <Demo03_09></Demo03_09> */}
    {/* <Demo03_10></Demo03_10> */}
    {/* <Demo3_11></Demo3_11> */}
    {/* <Demo03_12></Demo03_12> */}
    {/* <App></App> */}
    {/* <Demo03_13></Demo03_13> */}
    {/* <Demo03_14></Demo03_14> */}
    {/* <Demo03_15></Demo03_15> */}
    {/* <Demo03_16></Demo03_16> */}


    {/* 路由 */}
    {/*    <Router></Router>*/}

      {/* ------------------------  06 react-redux 的使用 -------------------------  */}
      {/*<Provider store={store}>*/}
      {/*    <PersistGate loading={null} persistor={persistor}>*/}
      {/*        <Router></Router>*/}
      {/*    </PersistGate>*/}
      {/*</Provider>*/}

  {/* 07 ant-design 使用 */}
  {/*      <App_07/>*/}
  {/*    <App_07_02/>*/}
  {/*    <App_07_03/>*/}
  {/*    <App_07_04/>*/}
  {/*    <Antd_05/>*/}
  {/*      <Antd_06/>*/}
  {/*      <Antd_07/>*/}
  {/*      <Antd_08/>*/}
  {/*      <Antd_09/>*/}

        {/*-----------------ant-design-mobile 组件使用 ----------------------*/}

        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Antd_M></Antd_M>
            </PersistGate>
        </Provider>

    </div>,
 // </React.StrictMode>
  document.getElementById("root")
);

// jsx 就是react-dom.render（） => DOM元素 => 插入页面
