import React from 'react';

import { Layout, Row, Col, Menu } from 'antd';

import { LogoutOutlined } from '@ant-design/icons';
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
                    Cheflix
                </Col>
                <Col span={4}>
                    <Menu theme="dark" mode="horizontal">
                        <Menu.Item key="1">
                            プロフィール
                        </Menu.Item>
                        <Menu.Item key="2">
                            <LogoutOutlined
                                style={{
                                    fontSize: 20
                                }}
                            />
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </Layout.Header>
    );
}

export default Header;