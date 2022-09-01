import React, {useEffect, useState} from "react"

import MRouter from './router/IndexRouter'
import { Tabbar } from "./components/Tabbar"

import './views/css/App.css'
import store from "@/05-redux/redux/store";


export default function Router() {

    const [state, setState] = useState({isShow: store.getState()})

    useEffect(()=>{

        store.subscribe(() => {
            console.log('app 订阅中', store.getState())

            setState({isShow: store.getState().TabbarReducer.show})
        })

        return () => {

        }
    }, [])


  return (
    <div>
      {/* 其他内容 */}

      {/* 卖座电影 */}
      <MRouter>
        {/*<Tabbar></Tabbar>*/}
          {state.isShow && <Tabbar></Tabbar>}
      </MRouter>

      

    </div>
  )
}
