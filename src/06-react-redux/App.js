import React, {useEffect, useState} from "react"

import MRouter from './router/IndexRouter'
import { Tabbar } from "./components/Tabbar"

import './views/css/App.css'
import {store} from "@/06-react-redux/redux/store";
import {connect} from "react-redux";


function Router(props) {

    const [state, setState] = useState({isShow: store.getState()})

    useEffect(()=>{

        store.subscribe(() => {
            console.log('app 订阅中', store.getState())

            setState({isShow: store.getState().TabbarReducer.show})
        })

        console.log(props, '2022-12-31')

        return () => {

        }
    }, [])


  return (
    <div>
      {/* 其他内容 */}

      {/* 卖座电影 */}
      <MRouter>
        {/*<Tabbar></Tabbar>*/}
          {props.isShow && <Tabbar></Tabbar>}
      </MRouter>

      

    </div>
  )
}

// connect() 函数第一个参数必须要有返回值

const mapStateToProps = (state) => {
    return {
        a: 1,
        b: 2,
        isShow: state.TabbarReducer.show
    }
}

export default connect(mapStateToProps)(Router)