import React, { Component } from "react";
import { Layout, Card, Col, Row, Select, Alert, Button, Space } from 'antd';
import { Descriptions, Divider } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { EditProfileModal } from "../../components";
import "./OpenedCourses.css"
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

function OpenedCourses() {
    return (
        <div className="Opened-courses">
            <Row>
                <Col >
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={profileDefault} />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(OpenedCourses);