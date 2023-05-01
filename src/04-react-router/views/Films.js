import React from 'react'
import {NavLink, Redirect, Route, Switch} from 'react-router-dom'
import { Comingsoon } from './films/Comingsoon'
import { NowPlaying } from './films/NowPlaying'

import style from './css/Film.module.css'

console.log(style)

export const Films = () => {
  return (
    <div>
      <div style={{height: '200px', background: 'coral'}}>大轮播</div>
      <div>导航栏</div>

        <ul>
            <li>
                <NavLink to={'/films/nowplaying'} activeClassName={style.active + '__aaa'}>正在热映</NavLink>
            </li>
            <li>
                <NavLink to={'/films/comingsoon'} activeClassName={style.active}>即将上映</NavLink>
            </li>
        </ul>

      {/* 路由配置 嵌套路由 */}
      <Switch> {/* 防止刷新重新回到重定向 nowplaying页面中 */}
        <Route path='/films/nowplaying' component={NowPlaying}/>
        <Route path='/films/comingsoon' component={Comingsoon} />
        
        <Redirect from='/films' to='/films/nowplaying'/>
      </Switch>
    </div>
  )
}


/* 
  声明式导航
  <a href="/index.html"></a>

  编程式导航
  location.href="/index/html"
*/