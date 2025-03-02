import React from 'react';
import { Layout, Row, Col } from 'antd';
import ProfileInfo from '../components/ProfileInfo';
import TechStackInfo from '../components/TechStack';
import PortofolioInfo from '../components/PortofolioInfo';
import ChatSession from '../components/ChatSession';
import AppsDevelop from '../components/AppsDevelop';

const { Content } = Layout;

const DashboardPage = () => (
  <Content style={{ padding: '20px' }}>
    <Row gutter={[16, 16]}>
      <Col xs={24} md={8}>
        <ProfileInfo />
        <TechStackInfo />
        <ChatSession />
      </Col>
      <Col xs={24} md={16}>
        <PortofolioInfo />
        <AppsDevelop />
      </Col>
    </Row>
  </Content>
);

export default DashboardPage;
