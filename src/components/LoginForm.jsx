import React from 'react';
import { Form, Input, Button } from 'antd';
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

function LoginForm(props) {
    let history = useHistory();
    const onFinish = values => {
        props.actions.signIn(values.email, values.password, history);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    return (
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
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        サインイン
                    </Button>
                </Form.Item>
            </Form.Item>
        </Form>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);