/**
 *@Author: Jinbo
 *@DATE: 2023/4/13 20:25
 *@Description: ...
 *@Version 1.0
 */


import React, {useState} from 'react';
import {
    MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined,
} from '@ant-design/icons';

import {blue} from '@ant-design/colors';

import './css/03_index.css';

import {Layout, Menu, theme, Tree} from 'antd';


// 解构
const {Header, Sider, Content} = Layout;


// --------- Tree Data ------------
const treeData = [
    {
        title: 'parent 1',
        key: '0-0',
        children: [
            {
                title: 'parent 1-0',
                key: '0-0-0',
                disabled: true,
                children: [
                    {
                        title: 'leaf',
                        key: '0-0-0-0',
                        disableCheckbox: true,
                    },
                    {
                        title: 'leaf',
                        key: '0-0-0-1',
                    },
                ],
            },
            {
                title: 'parent 1-1',
                key: '0-0-1',
                children: [
                    {
                        title: (
                            <span
                                style={{
                                    color: '#1890ff',
                                }}
                            >
                sss111
              </span>
                        ),
                        key: '0-0-1-0',
                    },
                    {
                        title: <span style={{color: '#baf'}}>sss222</span>, key: '0-0-1-1'
                    }
                ],
            },
        ],
    },
];


const App_07_03 = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer},
    } = theme.useToken();


    console.log(blue); // ['#E6F7FF', '#BAE7FF', '#91D5FF', '#69C0FF', '#40A9FF', '#1890FF', '#096DD9', '#0050B3', '#003A8C', '#002766']
    console.log(blue.primary); // '#1890FF'


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
                    label: 'nav 1',
                }, {
                    key: '2',
                    icon: <VideoCameraOutlined/>,
                    label: 'nav 2',
                }, {
                    key: '3',
                    icon: <UploadOutlined/>,
                    label: 'nav 3',
                }, {
                    key: '4',
                    icon: <UploadOutlined/>,
                    label: 'nav 4',
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
                Content
                <Tree
                    checkable
                    // defaultExpandedKeys={['0-0-0', '0-0-1']}
                    // defaultSelectedKeys={['0-0-0', '0-0-1']}
                    // defaultCheckedKeys={['0-0-0', '0-0-1']}
                    // onSelect={onSelect}
                    // onCheck={onCheck}
                    onCheck={(value) => {
                        console.log(value)
                    }}
                    treeData={treeData}
                />
            </Content>
        </Layout>
    </Layout>);
};

export default App_07_03;