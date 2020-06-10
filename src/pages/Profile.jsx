import React, { Component } from "react";
import {Layout, Card, Col, Row, Select, Alert} from 'antd';
import {Descriptions} from 'antd';

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
					fb:""
				};
	}

	render(){
		var classlist = [];
		
		return (
			<Layout className="profile">
			<Row>
				<Col span={6}>
				<Card
				    hoverable
				    lassName="profile_pic"
				    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
				  >
				    <Meta title="Europe Street beat" description="www.instagram.com" />
				  </Card>
				</Col>
				<Col span={18} >
					<Descriptions title="User Info" column={3} className="profile_info">
						<Descriptions.Item label="お名前" span={3}>{this.state.name}</Descriptions.Item>
						<Descriptions.Item label="ユーザー名"span={2}>{this.state.username}</Descriptions.Item>
						<Descriptions.Item label="性別" >{this.state.sex ? "男性":"女性"}</Descriptions.Item>
						<Descriptions.Item label="電話番号">{this.state.phone}</Descriptions.Item>
						<Descriptions.Item label="Eメール">{this.state.email}</Descriptions.Item>
						<Descriptions.Item label="フェイスブック">{this.state.fb}</Descriptions.Item>
						<Descriptions.Item label="アドレス"span={3}>{this.state.add}</Descriptions.Item>
					</Descriptions>

					<Descriptions title="User Info" layout="vertical" bordered>
						<Descriptions.Item label={this.state.class[]i.name}>Cloud Database</Descriptions.Item>
					</Descriptions>
				</Col>
			</Row>
			</Layout>
			);
	}
}


export default Profile;