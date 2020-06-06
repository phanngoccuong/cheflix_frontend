import React from 'react';
import logo from '../logo.svg';

import { Layout, Menu } from 'antd';
import { Header, Sidebar } from '../components';

const { Content } = Layout;

function Main() {
  return (
    <div>
      <Layout>
        <Header />
        <Layout>
          <Sidebar />
          <Content style={{ marginLeft: 200, marginTop: 64, minHeight: '100vh' }}>
            内容
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default Main;
