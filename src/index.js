import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb, Drawer} from 'antd';
import Login from './login';
import Banner from './banner';
import SimpleForm from './chatbot';
import CardGroup from './card';



const App = () => {
    const { Header, Content, Footer } = Layout;

    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                        <Menu.Item key="4">
                            <span type="primary" onClick={showDrawer}>
                                ChatBot
                            </span>
                            <Drawer
                                title="ChatBot"
                                placement="right"
                                closable={false}
                                onClose={onClose}
                                visible={visible}
                                width={400}
                            >
                                <SimpleForm/>
                            </Drawer>
                        </Menu.Item>
                        <Menu.Item key="5"><Login /></Menu.Item>

                    </Menu>
                </Header>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ margin: 5, minHeight: 380 }}>
                        <Banner />
                    </div>
                    <br/>
                    <div>
                        <CardGroup />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('container'),);