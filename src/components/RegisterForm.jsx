import React from 'react';
import { Card, Form, Input, Button } from 'antd';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { authActions } from '../actions';

const layout = {
    labelCol: {
        span: 24,
    },
    wrapperCol: {
        span: 24,
    },
};

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...authActions }, dispatch),
        dispatch
    }
}

function RegisterForm(props) {
    let history = useHistory();
    const onFinish = values => {
        props.actions.signUp(values.email, values.password);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Card title="サインアップ" extra={<Link to="/login" >サインイン</Link>} style={{ width: '100%' }}>
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item>
                    <Form.Item
                        label="ユーザーID"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'ユーザーIDを入力してください！',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="パスワード"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'パスワードを入力してください！',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        label="パスワード確認"
                        name="passwordConfirmation"
                        rules={[
                            {
                                required: true,
                                message: 'パスワード確認を入力してください！',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            サインイン
                    </Button>
                    </Form.Item>
                </Form.Item>
            </Form>
        </Card>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);