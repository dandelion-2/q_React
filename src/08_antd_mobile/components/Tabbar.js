import React from "react";
import {NavLink, withRouter} from "react-router-dom";
import { TabBar } from 'antd-mobile';
import { AppOutline, UnorderedListOutline, UserOutline } from "antd-mobile-icons";

import style from "./Tabber.module.css";





const Tabbar = (props) => {

    const tabs = [{
        key: '/films',
        title: '电影',
        icon: <AppOutline/>
    },{
        key: '/cinemas',
        title: '影院',
        icon: <UnorderedListOutline/>
    },{
        key: '/center',
        title: '个人中心',
        icon: <UserOutline/>
    },
    ]

  return (
    <div className={style.tabbar} >
        <TabBar
            onChange={(value) => {
                // console.log(props, 'props对象');
                props.history.push(value);
            }}
            activeKey={`/${props.location.pathname.split('/')[1]}`}
        >
          {tabs.map(item => (
              <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
    </div>
  );
};

export default withRouter(Tabbar);


// 因为 Tabbar不是路由组件，没有props，因此将tabbar变为 高阶组件，withRouter(Tabbar)


