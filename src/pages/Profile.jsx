import React, { Component } from "react";
import {Layout, Card, Col, Row, Select, Alert} from 'antd';
import {Descriptions, Divider} from 'antd';
import { Modal, Button, Space } from 'antd';

import ProfileFix from "./ProfileFix";
import "./Profile.css"


const { Meta } = Card;
class Profile extends Component {
	constructor(props) {
		super(props);
		// this.state = {};
		this.state = {name:"Dinh La Sat",  
					username:"tsukiGaKire1916", 
					sex:1, 
					phone:"0161819274",
					email:"tsukiGaKire1916@gmail.com",
					add:"工科大学",
					dob:"19/05/2012",
					age:"8",
					fb:"https://www.facebook.com/tsukiGaKire1916",
					Id:"516112016-VP",
					class_parti:[{
						name:"日本の料理の紹介",
						grade:-1,
						status:0
					},{
						name:"基本的なフランスの朝食料理",
						grade:5,
						status:0
					},{
						name:"ベトナムの高度な調理技術",
						grade:8,
						status:1
					}
					],
					class_make:[{
						name:"日本の料理の紹介",
						grade:-1,
						status:0
					}],
					modalVisible:false
				};
	}
  	showModal = () => {
		this.setState({
		modalVisible: true,
		});
	};

	hideModal = () => {
		this.setState({
		modalVisible: false,
		});
	};
	render(){
		
		return (
			<Layout className="profile">
			<Row>

				<Col span={24}>
					<h1>ユーザー情報</h1>
				</Col>
				<Col span={6}>
				<Card
				    hoverable
				    className="profile_pic"
				    cover={<img alt="example" src="data:image/png;base64,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" />}
				  >
				    <Meta title={"ユーザーID:"+this.state.Id}/>
				  </Card>
				</Col>
				<Col span={1} >
				</Col>
				<Col span={16} >
					<Descriptions title="ユーザー情報" column={2} className="profile_info">
						<Descriptions.Item label="ユーザー名"span={2}>{this.state.username}</Descriptions.Item>
						<Descriptions.Item label="お名前" >{this.state.name}</Descriptions.Item>
						<Descriptions.Item label="性別" >{this.state.sex ? "男性":"女性"}</Descriptions.Item>
						<Descriptions.Item label="アドレス">{this.state.add}</Descriptions.Item>
						<Descriptions.Item label="生年月日" >{this.state.dob}</Descriptions.Item>
						<Descriptions.Item label="電話番号">{this.state.phone}</Descriptions.Item>
						<Descriptions.Item label="Eメール">{this.state.email}</Descriptions.Item>
						<Descriptions.Item label="フェイスブック">{this.state.fb}</Descriptions.Item>
					</Descriptions>
					<Button type="primary" onClick={this.showModal}>Edit profile</Button>
					 <Divider>参加クラス</Divider>
					<div className="class">
						{this.state.class_parti.map((cls, index)=> {
							return (
								<Descriptions layout="vertical" bordered>
									<Descriptions.Item label="クラス名" >{cls.name}</Descriptions.Item>
									<Descriptions.Item label="アドレス" >{cls.status ? cls.grade : "未完成"}</Descriptions.Item>
								</Descriptions>
								)
						} )}
					</div>
					 <Divider>作成されたクラス</Divider>
					<div className="class">
						{this.state.class_make.map((cls, index)=> {
							return (
								<Descriptions layout="vertical" bordered>
									<Descriptions.Item label="クラス名" >{cls.name}</Descriptions.Item>
									<Descriptions.Item label="アドレス" >{cls.status ? cls.grade : "未完成"}</Descriptions.Item>
								</Descriptions>
								)
						} )}
					</div>
				</Col>
				<Modal
					title="情報を編集する"
					visible={this.state.modalVisible}
					onOk={this.hideModal}
					onCancel={this.hideModal}
					okText="いい"
					cancelText="いいえ"
					>
					<ProfileFix/>
				</Modal>
			</Row>
			</Layout>
			);
	}
}


export default Profile;