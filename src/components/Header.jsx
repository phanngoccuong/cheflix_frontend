import React from 'react';
import { Layout, Row, Col, Menu } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { signOut } from '../actions';

import logo from '../logo.svg';

//Object map location hiện tại với key của menu
const tabRoute = {
    '/profile': '1'
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ signOut }, dispatch),
        dispatch
    }
}

function Header(props) {
    let history = useHistory();
    const handleLogout = () => {
        return props.actions.signOut(history);
    }
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
                        <Menu.Item key="2" onClick={handleLogout}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);