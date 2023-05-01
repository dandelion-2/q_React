import React from "react"

import MRouter from './router/IndexRouter';
import Tabbar  from "./components/Tabbar";

import './views/css/App.css'


export default function Router() {
  return (
    <div>
      {/* 其他内容 */}

      {/* 卖座电影 */}
      <MRouter>
        <Tabbar></Tabbar>
      </MRouter>

      

    </div>
  )
}
