import React from 'react';
import { Layout, Menu } from 'antd';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Header, Sidebar } from '../components';
import { isAuthenticated } from '../utils';

import Profile from './Profile';
import OpenedCourses from './OpenedCourses';

const { Content } = Layout;

function Main() {
    return (
        isAuthenticated() ?
        <div>
            <Layout>
                <Header />
                <Layout>
                    <Sidebar />
                    <Content style={{ marginLeft: 200, marginTop: 64, minHeight: '100vh' }}>
                        <Switch>
                            <Route path="/home">
                                Home
                            </Route>
                            <Route path="/enrolled">
                                Enrolled
                            </Route>
                            <Route path="/opened">
                                <OpenedCourses />
                            </Route>
                            <Route path="/profile">
                                <Profile />
                            </Route>
                            <Route exact path="/">
                                <Redirect to="/home" />
                            </Route>
                            <Route>
                                404
                            </Route>
                        </Switch>
                    </Content>
                </Layout>
                </Layout>
        </div> :
        <Redirect to="/login" />
    );
}

export default Main;
