import React, { Component } from "react";
import { Layout, Card, Col, Row, Select, Alert, Button, Space } from 'antd';
import { Descriptions, Divider } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { EditProfileModal } from "../../components";
import "./Profile.css"
import profileDefault from '../../images/default-profile.png';
import { userActions } from '../../actions';

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

const { Meta } = Card;
class Profile extends Component {
	constructor(props) {
		super(props);
		// this.state = {};
		this.state = {
			name: "Dinh La Sat",
			username: "tsukiGaKire1916",
			sex: 1,
			phone: "0161819274",
			email: "tsukiGaKire1916@gmail.com",
			add: "工科大学",
			dob: "19/05/2012",
			age: "8",
			fb: "https://www.facebook.com/tsukiGaKire1916",
			Id: "516112016-VP",
			// class_parti:[{
			// 	name:"日本の料理の紹介",
			// 	grade:-1,
			// 	status:0
			// },{
			// 	name:"基本的なフランスの朝食料理",
			// 	grade:5,
			// 	status:0
			// },{
			// 	name:"ベトナムの高度な調理技術",
			// 	grade:8,
			// 	status:1
			// }
			// ],
			// class_make:[{
			// 	name:"日本の料理の紹介",
			// 	grade:-1,
			// 	status:0
			// }],
			modalVisible: false
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
	componentDidMount() {
		this.props.actions.getUser(localStorage.getItem('id'));
	}
	render() {
		return (
			<Layout className="profile">
				<Row>

					<Col span={24}>
						<h1>ユーザー</h1>
					</Col>
					<Col span={6}>
						<Card
							hoverable
							className="profile_pic"
							cover={<img alt="example" src={profileDefault} />}
						>
							<Meta title={this.props.user.firstName || this.props.user.email} />
						</Card>
					</Col>
					<Col span={1} >
					</Col>
					<Col span={16} >
						<Descriptions title="ユーザー情報" column={2} className="profile_info">
							{/* <Descriptions.Item label="ユーザー名" span={2}>{this.state.username || 'なし'}</Descriptions.Item> */}
							<Descriptions.Item label="お名前" >{this.props.user.firstName || 'なし'}</Descriptions.Item>
							<Descriptions.Item label="性別" >{this.state.sex ? "男性" : "女性"}</Descriptions.Item>
							<Descriptions.Item label="アドレス">{this.props.user.address || 'なし'}</Descriptions.Item>
							<Descriptions.Item label="生年月日" >{this.props.user.dateOfBirth || 'なし'}</Descriptions.Item>
							<Descriptions.Item label="電話番号">{this.props.user.phoneNumber || 'なし'}</Descriptions.Item>
							<Descriptions.Item label="メール">{this.props.user.email || 'なし'}</Descriptions.Item>
							{/* <Descriptions.Item label="フェイスブック">{this.state.fb}</Descriptions.Item> */}
						</Descriptions>
						<Button type="primary" onClick={this.showModal}>編集</Button>
						{/* <Divider>参加クラス</Divider>
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
					</div> */}
					</Col>
					<EditProfileModal
						modalVisible={this.state.modalVisible}
						hideModal={this.hideModal}
					/>
				</Row>
			</Layout>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);