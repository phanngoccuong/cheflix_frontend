import React from 'react';
import { Form, Input, Button } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const layout = {
    labelCol: {
        span: 24,
    },
    wrapperCol: {
        span: 24,
    },
};

function LoginForm() {
    const onFinish = values => {
        console.log('Success:', values);
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
                    name="username"
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

export default LoginForm;