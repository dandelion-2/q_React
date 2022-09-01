import React, {useState} from 'react';
import {
    MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined,
    DownOutlined,
    SmileOutlined
} from '@ant-design/icons';
import {Button, Dropdown, Layout, Menu, message, Space, Steps, theme} from 'antd';
import './css/03_index.css';
// 解构
const {Header, Sider, Content} = Layout;


// 左侧导航栏的信息
const items = [{
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
// 步骤条的数据
const steps = [
    {
        title: 'First',
        content: 'First-content',
    },
    {
        title: 'Second',
        content: 'Second-content',
    },
    {
        title: 'Last',
        content: 'Last-content',
    },
];


const Antd_05 = () => {
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
                        items={items}
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
                        <Step_App/>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

// 步骤条
const Step_App = () => {
    const {token} = theme.useToken();
    const [current, setCurrent] = useState(0)

    // 控制按钮
    const next = () => {
        setCurrent(current + 1);
    }
    const prev = () => {
        setCurrent(current - 1)
    }
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));
    const contentStyle = {
        lineHeight: '260px',
        textAlign: 'center',
        color: token.colorTextTertiary,
        backgroundColor: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: `1px dashed ${token.colorBorder}`,
        marginTop: 16,
    };
    const stepsStyle = {
        marginBottom: '20px',
    }
    return (
        <div>
            <Steps current={current} items={items} style={stepsStyle}/>


            {current < 2 && <Button type={"primary"} onClick={()=> next()}>下一步</Button>}
            {current === 2 && <Button type={"primary"} danger>完成</Button>}
            {current > 0 && <Button type={"primary"} onClick={() => prev()}>上一步</Button>}

            {/*<div style={contentStyle}>{steps[current].content}</div>*/}
            {/*<div*/}
            {/*    style={{*/}
            {/*        marginTop: 24,*/}
            {/*    }}*/}
            {/*>*/}
                {/*{current < steps.length - 1 && (*/}
                {/*    <Button type="primary" onClick={() => next()}>*/}
                {/*        Next*/}
                {/*    </Button>*/}
                {/*)}*/}
                {/*{current === steps.length - 1 && (*/}
                {/*    <Button type="primary" onClick={() => message.success('Processing complete!')}>*/}
                {/*        Done*/}
                {/*    </Button>*/}
                {/*)}*/}
                {/*{current > 0 && (*/}
                {/*    <Button*/}
                {/*        style={{*/}
                {/*            margin: '0 8px',*/}
                {/*        }}*/}
                {/*        onClick={() => prev()}*/}
                {/*    >*/}
                {/*        Previous*/}
                {/*    </Button>*/}
                {/*)}*/}
            {/*</div>*/}
        </div>
    )
}


export default Antd_05;