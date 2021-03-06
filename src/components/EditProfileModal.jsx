import React, { Component } from "react";
import { Layout, Card, Col, Row, Select, Alert, Modal } from 'antd';
import { Form, Input, Button, Checkbox, DatePicker } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { userActions } from '../actions';

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
};

const validateMessages = {
	required: '${label} is required!',
	types: {
		email: '${label} is not validate email!',
		number: '${label} is not a validate number!',
	},
	number: {
		range: '${label} must be between ${min} and ${max}',
	},
};

const mapStateToProps = (state) => {
	return {
		...state
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators({ ...userActions }, dispatch),
		dispatch
	}
}

class EditProfileModal extends Component {
	constructor(props) {
		super(props);
		this.state = {};

	}

	formRef = React.createRef();

	onFinish = values => {
		this.props.actions.updateUser(localStorage.getItem('id'), values);
		this.props.hideModal();
		this.props.actions.getUser(localStorage.getItem('id'));
	};
	onFinishFailed = values => {
		console.log(values);
	};

	render() {
		return (
			<Modal
				title="情報を編集する"
				visible={this.props.modalVisible}
				onOk={() => {
					this.formRef.current.submit();
					this.props.hideModal();
				}}
				onCancel={this.props.hideModal}
				okText="確認"
				cancelText="キャンセル"
			>
				<Form {...layout} name="nest-messages" initialValues={{ remember: true }} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed} validateMessages={validateMessages} ref={this.formRef}>
					{/* <Form.Item name="password" label="パスワード" rules={[{ required: true }]}>
						<Input.Password />
					</Form.Item> */}
					<Form.Item name="firstName" label="お名前">
						<Input defaultValue={this.props.user.firstName} />
					</Form.Item>
					<Form.Item name="address" label="アドレス">
						<Input defaultValue={this.props.user.address} />
					</Form.Item>
					<Form.Item name="dateOfBirth" label="生年月日">
						<DatePicker />
					</Form.Item>
					<Form.Item name="phoneNumber" label="電話番号">
						<Input defaultValue={this.props.user.phoneNumber} />
					</Form.Item>
				</Form>
			</Modal>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileModal);