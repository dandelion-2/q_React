import React, {useCallback, useEffect, useRef, useState} from "react";
import {Table, Layout, theme, Menu} from "antd";
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined
} from '@ant-design/icons';
import './css/03_index.css'

const {Header, Sider, Content} = Layout;


//-------------------------------Layout Date------------------------------------
const items = [{
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
}]


// -------------------------------------- Table Data ------------------------------------
const dataSource = [
    {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
    },
    {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
];
const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
    },
];

const Antd_07 = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {token: {colorBgContainer}} = theme.useToken();

    const myRef = useRef();

    // const changeCollapsed = useCallback(()=>{
    //     setCollapsed(!collapsed);
    //     console.log('我执行了一次')
    // }, [])

    const changeCollapsed = () => {
        setCollapsed(!collapsed);
        console.log('我执行了一次')
    }
    // console.log('渲染一次')
    useEffect(()=>{
        // myRef
        myRef.current.childNodes[1].onclick=()=>{changeCollapsed()};
        console.log('useEffect hook')
    },[collapsed])
    return (
        <Layout>
            <Sider ref={myRef}  collapsible collapsed={collapsed} style={{backgroundColor: colorBgContainer}}>
                <div className="logo"></div>
                <Menu
                    theme='dark'
                    mode='inline'
                    // defaultCollapsed='false' 默认是false，可以不用写了
                    defaultSelectedKeys={['1']}
                    items={items}
                />
            </Sider>
            <Layout className='site-layout'>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer
                    }}
                >
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed)
                    })}
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer
                    }}
                >
                    content<br/>
                    {/*// -------Table Component-----*/}
                    <Table_App/>
                </Content>
            </Layout>



        </Layout>
    )
}

const Table_App = () => <Table dataSource={dataSource} columns={columns}/>

export default Antd_07;