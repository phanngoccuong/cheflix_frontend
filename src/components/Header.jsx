import React from 'react';
import { Layout, Row, Col, Menu } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../logo.svg';

const tabRoute = {
    '/profile': '1'
}


function Header() {
    return (
        <Layout.Header
            style={{
                position: 'fixed',
                zIndex: 1,
                width: '100%',
                color: '#fff'
            }}
        >
            <div className="logo" />
            <Row justify="space-between">
                <Col span={4}>
                </Col>
                <Col span={4}>
                    <img src={logo} className="App-logo" alt="logo" />
                </Col>
                <Col span={4}>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        selectedKeys={[tabRoute[`/${useLocation().pathname.split('/')[1]}`]]}
                    >
                        <Menu.Item key="1">
                            <Link to="/profile">
                                プロフィール
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/login">
                                <LogoutOutlined
                                    style={{
                                        fontSize: 20
                                    }}
                                />
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </Layout.Header>
    );
}

export default Header;