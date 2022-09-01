
import React, {useState} from 'react';
import {
    MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined,
} from '@ant-design/icons';

import './css/03_index.css';

import {Layout, Menu, theme, Button, Modal} from 'antd';


// 解构
const {Header, Sider, Content} = Layout;


const Antd_09 = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () =>{
        setIsModalOpen(false);
        console.log('OK');
    };
    const handleCancel = () => {
        setIsModalOpen(false);
        console.log('cancel')
    };


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
                Content <br/>
                <Button type="primary" onClick={showModal}>
                    Open Modal
                </Button>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                {/*<Modal title="Basic Modal" >*/}
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </Content>
        </Layout>
    </Layout>);
};

export default Antd_09;