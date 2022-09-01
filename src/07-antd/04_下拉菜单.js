/**
 *@Author: Jinbo
 *@DATE: 2023/4/13 20:25
 *@Description: ...
 *@Version 1.0
 */


import React, {useState} from 'react';
import {
    MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined, DownOutlined, SmileOutlined
} from '@ant-design/icons';

import {blue} from '@ant-design/colors';

import './css/03_index.css';

import {Dropdown, Layout, Menu, message, Space, theme} from 'antd';


// 解构
const {Header, Sider, Content} = Layout;


const onClick = ({key}) => {
    message.info('click on item' + key)
}


const App_07_03 = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer},
    } = theme.useToken();


    const items = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    1st menu item
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    2nd menu item (disabled)
                </a>
            ),
            icon: <SmileOutlined/>,
            //disabled: 控制是否可以点击
            // disabled: false,
        },
        {
            key: '3',
            label: (
                // href="https://www.luohanacademy.com"
                <a rel="noopener noreferrer" href=""
                   onClick={e => e.preventDefault()}
                >
                    3rd menu item (disabled)
                </a>
            ),
            // disabled: true,
        },
        {
            key: '4',
            danger: true, // 红色
            label: 'a danger item',
        },
    ];


    return (<Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo"/>
            <Menu
                theme="dark"
                mode="inline"

                defaultSelectedKeys={['1']}
                items={[{
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
                },]}
            />
        </Sider>
        <Layout className="site-layout">
            <Header style={{padding: 0, background: colorBgContainer}}>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: () => setCollapsed(!collapsed),
                })}
            </Header>
            <Content
                style={{
                    margin: '24px 16px', padding: 24, minHeight: 280, background: colorBgContainer,
                }}
            >
                Content<br/>
                <Dropdown
                    menu={{
                        items,
                        onClick
                    }}
                    trigger={['click']}
                >
                    <a onClick={(e) => e.preventDefault()}>
                    {/*<a onClick={value =>console.log(value)} >*/}
                        <Space>
                            Hover me
                            <DownOutlined/>
                        </Space>
                    </a>
                </Dropdown>
            </Content>
        </Layout>
    </Layout>);
};

export default App_07_03;