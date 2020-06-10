import React, { Component } from "react";
import {Layout, Card, Col, Row, Select, Alert} from 'antd';
import { Form, Input, Button, Checkbox, DatePicker } from 'antd';

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

class ProfileFix extends Component{
	constructor(props){
		super(props);
		this.state={};

	}


	onFinish = values => {
		console.log(values);
	};	
	onFinishFalse = values => {
		console.log(values);
	};	

	render(){
		return(
			<Form {...layout} name="nest-messages" initialValues={{ remember: true }} onFinish={this.onFinish} onFinishFalse={this.onFinishFalse} validateMessages={validateMessages}>
				<Form.Item name={['user', 'name']} label="ユーザー名" rules={[{ required: true }]}>
					<Input />
				</Form.Item>
				<Form.Item name={['user', 'password']} label="パスワード" rules={[{ required: true }]}>
					<Input.Password />
				</Form.Item>
				<Form.Item name={['user', 'name']} label="お名前" rules={[{ required: true }]}>
					<Input />
				</Form.Item>
				<Form.Item name={['user', 'dob']} label="アドレス" rules={[{required:true,  type: 'email' }]}>
					 <Input />
				</Form.Item>
				<Form.Item name={['user', 'dob']} label="生年月日" rules={[{ required: true }]}>
					 <DatePicker />
				</Form.Item>
				<Form.Item name={['user', 'denwa']} label="電話番号">
					<Input />
				</Form.Item>
				<Form.Item name={['user', 'email']} label="Eメール" rules={[{ type: 'email' }]}>
					<Input />
				</Form.Item>
				<Form.Item name={['user', 'email']} label="フェイスブック" >
					<Input />
				</Form.Item>

				<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
					<Button type="primary" htmlType="submit">
					  Submit
					</Button>
				</Form.Item>
			</Form>
			);
	}
}


export default ProfileFix;