import React, {useState} from "react";
import {Carousel, Layout, Menu, theme} from 'antd';

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined
} from "@ant-design/icons";

import './css/03_index.css'
const {Header, Sider, Content} = Layout;


// 左侧导航栏的信息
const itemsData = [{
    key: '1',
    icon: <UserOutlined/>,
    label: 'nav 111',
}, {
    key: '2',
    icon: <VideoCameraOutlined/>,
    label: 'nav 222',
}, {
    key: '3',
    icon: <UploadOutlined/>,
    label: 'nav 333',
}, {
    key: '4',
    icon: <UploadOutlined/>,
    label: 'nav 444',
}];



const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const Antd_06 = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {token: {colorBgContainer}} = theme.useToken();


    return (
        <div>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo"/>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={itemsData}
                    />
                </Sider>
                <Layout className="site-layout">
                    <Header style={{padding: 0 ,background: colorBgContainer}}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => setCollapsed(!collapsed),
                        })}
                    </Header>
                    <Content
                        // background: colorBgContainer
                        style={{
                            margin: '24px 16px', padding: 24, minHeight: 280, background: colorBgContainer
                        }}
                    >
                        Content<br/>
                        {/* 轮播组件 */}
                        <Carousel_antd_07/>
                    </Content>
                </Layout>
            </Layout>
        </div>
    )

}


const Carousel_antd_07 = () => {

    // const {token: {motionDurationSlow}} = theme.useToken();

    return (
        <Carousel autoplay  /*easing='ease-out'*/>
            <div>
                <h3 style={contentStyle}>1</h3>
            </div>
            <div>
                <h3 style={contentStyle}>2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>3</h3>
            </div>-----------------------------
            <div>
                <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
        )

};
export default Antd_06;