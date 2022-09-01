import React from "react";

// import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import {HashRouter as Router, Redirect, Route, Switch} from "react-router-dom";

// import { Films } from '@/04-react-router/views/Films'
import {Films} from "../views/Films.js";
import {Cinemas} from "../views/Cinemas";
import Center from "../views/Center";
import {NotFound} from "../views/NotFound";
// import {NowPlaying} from "../views/films/NowPlaying";
import {Detail} from "../views/Detail";
import {Login} from "../views/Login";
import City from "../views/City";

import Search from "../views/Search";

function isAuth() {
    return localStorage.getItem('token');
}


/* 
  BrowserRouter 没有#的路径，好看，真正朝后端发送请求要页面，后端没有对应的路径处理路径，就会404，不好看。
*/


export default function IndexRouter(props) {
    return (
        <div>
            <Router>
                {/* 使用插槽的技术 */}
                {props.children}
                <Switch>8-----------------------------
                    {/* 刷新不会失效，加上switch */}
                    <Route path="/films" component={Films}/>
                    {/* <Route path="/films/nowplaying" component={NowPlaying} ></Route> */}
                    {/* </Route> */}
                    <Route path="/cinemas" component={Cinemas} exact/>
                    <Route path="/cinemas/search" component={Search}/>
                    {/* <Route path="/center" component={Center} /> */}

                    <Route path={'/city'} component={City}></Route>

                    <Route
                        path='/center'
                        render={(props) => {
                            console.log("props", props)
                            // return 是否授权 ? <Center></Center> : <Logon/>
                            return isAuth() ? <Center myName="jinbo" {...props}></Center> : <Redirect to="/login"/>
                        }}></Route>

                    <Route path="/login" component={Login}/>


                    {/* :id  占位符 */}
                    {/* <Route path="/detail" component={Detail} /> */}
                    {/* 使用动态路由，将电影ID传给子组件  使用了match 中的params参数 */}
                    <Route path="/detail/:id" component={Detail}/>
                    {/* <Route path="/detail" component={Detail} /> */}

                    {/* Redirect  重定向 */}
                    <Redirect from="/" to={"/films"} exact/>

                    {/* 页面未发现 */}
                    <Route component={NotFound}></Route>

                    <Route>
                        <Login></Login>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

// const Route = (props) => {
//
//     let MyComponent = props.component
//
//     return (
//         <div>
//             <MyComponent/>
//         </div>
//     )
// }

