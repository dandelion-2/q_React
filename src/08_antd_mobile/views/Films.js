import React, {useEffect, useState} from 'react'
import {NavLink, Redirect, Route, Switch} from 'react-router-dom'
import {Comingsoon} from './films/Comingsoon'
import {NowPlaying} from './films/NowPlaying'
import { Swiper, Tabs } from "antd-mobile";

import style from './css/Film.module.css';
import axios from "axios";
import './scss/index.scss';

// console.log(style, '222');

export const Films = (props) => {

    // const [loopList, setLoopList] = useState([])

    // useEffect(()=>{
    //     axios({
    //         url: ``,
    //         headers: {
    //
    //         }
    //     }).then(res=>{
    //         console.log(red.data)


    //         setLoopList(res.data.data)
    //     })
    // }, [])

    useEffect(()=>{
        console.log(props.location.pathname)
    })

    const loopList = [{name:'第一张图片',color: '#baf'}, {name: '第二张图片', color: 'coral'}, {name:'第三张图片', color: 'indigo'}]


    return (
        <div>
            {/*<div style={{height: '200px', background: 'coral'}}>大轮播</div>*/}

            <Swiper autoplay loop>
                {/*<Swiper.Item>111</Swiper.Item>*/}
                {/*<Swiper.Item>222</Swiper.Item>*/}
                {/*<Swiper.Item>333</Swiper.Item>*/}

                {loopList.map((item, index) => {
                    return (
                        <Swiper.Item key={index}>
                            <div
                                className='SwiperItem'
                                style={{backgroundColor: item.color}}
                            >{item.name}</div>
                        </Swiper.Item>
                    )
                })}

            </Swiper>

            {/*<div>导航栏</div>*/}
            {/*<ul>*/}
            {/*    <li>*/}
            {/*        <NavLink to={'/films/nowplaying'} activeClassName={style.active + '__aaa'}>正在热映</NavLink>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <NavLink to={'/films/comingsoon'} activeClassName={style.active}>即将上映</NavLink>*/}
            {/*    </li>*/}
            {/*</ul>*/}

            <div style={{position: 'sticky', top: 0, backgroundColor: 'white'}}>
                <Tabs onChange={(value) => {
                    props.history.push(value);
                    //    高亮bug
                }} activeKey={props.location.pathname}>

                    {/*<Tabs.Tab title='水果' key='fruits'>*/}
                    {/*    菠萝*/}
                    {/*</Tabs.Tab>*/}
                    {/*<Tabs.Tab title='蔬菜' key='vegetables'>*/}
                    {/*    西红柿*/}
                    {/*</Tabs.Tab>*/}
                    {/*<Tabs.Tab title='动物' key='animals'>*/}
                    {/*    蚂蚁*/}
                    {/*</Tabs.Tab>*/}

                    <Tabs.Tab title='正在热映' key='/films/nowplaying'></Tabs.Tab>
                    <Tabs.Tab title='即将上映' key='/films/comingsoon'></Tabs.Tab>
                </Tabs>
            </div>

            {/* 路由配置 嵌套路由 */}
            <Switch> {/* 防止刷新重新回到重定向 nowplaying页面中 */}
                <Route path='/films/nowplaying' component={NowPlaying}/>
                <Route path='/films/comingsoon' component={Comingsoon}/>

                <Redirect from='/films' to='/films/nowplaying'/>
            </Switch>

            <ul>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
            </ul>
        </div>
    )
}


/* 
  声明式导航
  <a href="/index.html"></a>

  编程式导航
  location.href="/index/html"
*/