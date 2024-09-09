import React from 'react';
import { Layout, Row, Col } from 'antd';
import ProfileInfo from '../components/ProfileInfo';
import TechStackInfo from '../components/TechStack';
import PortofolioInfo from '../components/PortofolioInfo';

const { Content } = Layout;

const DashboardPage = () => (
  <Content style={{ padding: '20px' }}>
    <Row gutter={[16, 16]}>
      <Col xs={24} md={8}>
        <ProfileInfo />
        <TechStackInfo />
      </Col>
      <Col xs={24} md={16}>
        <PortofolioInfo />
      </Col>
    </Row>
  </Content>
);

export default DashboardPage;
