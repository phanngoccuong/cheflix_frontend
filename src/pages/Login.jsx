import React from 'react';
import { Card, Row, Col } from 'antd';

import logo from '../logo.svg';
import { LoginForm } from '../components';

function Login() {
    return (
        <div>
            <Row justify="center">
                <Col span={8}>
                    <img src={logo} className="App-logo App-logo-big" alt="logo" />
                    <Card title="サインイン" extra={<a href="#">サインアップ</a>} style={{ width: '100%' }}>
                        <LoginForm />
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Login;