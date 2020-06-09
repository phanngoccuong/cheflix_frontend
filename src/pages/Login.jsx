import React from 'react';
import { Row, Col } from 'antd';
import { Redirect, Switch, Route } from 'react-router-dom';

import logo from '../logo.svg';
import { LoginForm, RegisterForm } from '../components';
import { isAuthenticated } from '../utils';

function Login() {
    return (
        isAuthenticated() ?
        <Redirect to="/" /> :
        <div>
            <Row justify="center">
                <Col span={8}>
                    <img src={logo} className="App-logo App-logo-big" alt="logo" />
                    <Switch>
                            <Route path="/login/register" component={RegisterForm}/>
                            <Route path="/login" component={LoginForm} />
                    </Switch>
                </Col>
            </Row>
        </div>
    );
}

export default Login;