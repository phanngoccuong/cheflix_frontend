import React, { useEffect, useState } from "react";
import { Layout, Card, Col, Row, Select, Alert, Button, Space, PageHeader, Table } from 'antd';
import { Descriptions, Divider } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import "./OpenedClasses.css"
import imageDefault from '../../images/default.jpg';
import { openedClassesActions } from '../../actions';

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...openedClassesActions }, dispatch),
        dispatch
    }
}

const { Meta } = Card;

const studentData = [
    {
        key: '1',
        name: '山田',
        email: 'yamada@gmail.com',
        testResult: 10
    },
    {
        key: '2',
        name: '田中',
        email: 'tanaka@gmail.com',
        testResult: 9
    },
]

const studentColumns = [
    {
        title: '名前',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'メール',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'テスト結果',
        dataIndex: 'testResult',
        key: 'testResult',
    },
    {
        title: 'アクション',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <Button>編集</Button>
            </Space>
        ),
    }
]

const documentData = [
    {
        key: '1',
        name: 'レッスン１',
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {
        key: '2',
        name: 'レッスン２',
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
]

const documentColumns = [
    {
        title: '名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'リンク',
        dataIndex: 'link',
        key: 'link',
    },
    {
        title: 'アクション',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <Button>編集</Button>
            </Space>
        ),
    }
]

function OpenedClasses(props) {
    const [classItem, setClassItem] = useState(0);
    const [page, setPage] = useState('list');
    useEffect(() => {
        props.actions.getOpenedClasses();
    }, []);
    const renderClasses = () => {
        return (
            <Row className="Content">
                {props.openedClasses.classes.map(classItem =>
                    <Col span={8} >
                        <Card
                            className="Class-card"
                            hoverable
                            style={{ width: 240, height: 300 }}
                            cover={<img style={{ height: 153 }} alt="example" src={imageDefault} />}
                            onClick={() => {
                                setClassItem(classItem);
                                setPage('item');
                            }}
                        >
                            <Meta title={classItem.name} description={classItem.description} />
                        </Card>
                    </Col>
                )}
            </Row>
        )
    }
    const renderClass = () => {
        
        return (
            <div>
                <PageHeader
                    className="site-page-header"
                    onBack={() => setPage('list')}
                    title={classItem.name}
                />
                <Row className="Content" >
                    <Col span={6}>
                        <img style={{ width: 240, height: 153 }} alt="example" src={imageDefault} />
                    </Col>
                    <Col span={4} >
                    </Col>
                    <Col span={8}>
                        <Descriptions title="クラス情報" column={1}>
                            <Descriptions.Item label="クラス名" >{classItem.name}</Descriptions.Item>
                            <Descriptions.Item label="説明" >{classItem.description}</Descriptions.Item>
                        </Descriptions>
                    </Col>
                </Row>
                <Row className="Content" >
                    <Col span={2}>
                        学生一覧
                    </Col>
                    <Col span={22}>
                    </Col>
                    <Col span={24}>
                        <Table dataSource={studentData} columns={studentColumns} />
                    </Col>
                </Row>
                <Row className="Content" >
                    <Col span={2}>
                        資料一覧
                    </Col>
                    <Col span={22}>
                    </Col>
                    <Col span={24}>
                        <Table dataSource={documentData} columns={documentColumns} />
                    </Col>
                </Row>
            </div>
        )
    }
    return (
        <div className="Opened-classes">
            {page === 'item' && renderClass()}
            {page === 'list' && renderClasses()}
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(OpenedClasses);