import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

//Object map location hiện tại với key của menu
const tabRoute = {
    '/home': '1',
    '/enrolled': '2',
    '/opened': '3'
}

function Sidebar() {
    return (
        <Layout.Sider
            width={200}
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: 64
            }}
        >
            <Menu
                mode="inline"
                selectedKeys={[tabRoute[`/${useLocation().pathname.split('/')[1]}`]]}
                style={{ height: '100%', borderRight: 0 }}
            >
                <Menu.Item key="1">
                    <Link to="/home">ホーム</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/enrolled">参加してるクラス</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/opened">自分のクラス</Link>
                </Menu.Item>
            </Menu>
        </Layout.Sider>
    );
}

export default Sidebar;
