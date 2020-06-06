import React from 'react';

import { Layout, Menu } from 'antd';

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
                defaultSelectedKeys={['1']}
                style={{ height: '100%', borderRight: 0 }}
            >
                <Menu.Item key="1">ホーム</Menu.Item>
                <Menu.Item key="2">参加してるクラス</Menu.Item>
                <Menu.Item key="3">自分のクラス</Menu.Item>
            </Menu>
        </Layout.Sider>
    );
}

export default Sidebar;
