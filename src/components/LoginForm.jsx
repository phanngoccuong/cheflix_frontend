import React from 'react';
import { Card, Form, Input, Button, Spin, Typography, message } from 'antd';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { authActions } from '../actions';

const { Text } = Typography;

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
    const showMessage = (errorCode) => {
        if (errorCode) {
            switch (errorCode) {
                case 'IncorrectEmail': {
                    return message.error('間違ったメールまたはパスワード!');
                }
                case 'IncorrectPassword': {
                    return message.error('間違ったメールまたはパスワード!');
                }
                default: {
                    return;
                }
            }
        } else {
            return message.success('サインインしました！')
        }
    }
    const onFinish = values => {
        props.actions.signIn(values.email, values.password, history, showMessage);
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    const renderSpinner = () => {
        if (props.auth.isLoggingIn) {
            return <Spin />;
        }
    }
    return (
        <Card title="サインイン" extra={<Link to="/login/register" >サインアップ</Link>} style={{ width: '100%' }}>
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
                            {
                                type: 'email',
                                message: 'メールである必要があります!'
                            }
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
                    {renderSpinner()}
                </Form.Item>
            </Form>
        </Card>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);