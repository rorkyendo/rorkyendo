import React from 'react';
import { Row, Col, Image} from 'antd';
import '../styles/Dashboard.css';

const TechStackInfo = () => {

  return (
    <div className="card">
      <h2 style={{textAlign:'center'}}>Tech Stack Information</h2>
      <hr/>
      <Row gutter={[16, 16]}>
        <Col xs={8} md={8}>
          <span>Bahasa Program</span>
        </Col>
        <Col xs={16} md={16}>
          <span>: Javascript, PHP, Python, C++ (IoT/Arduino), SQL</span>
        </Col>
        <Col xs={8} md={8}>
          <span>Operation System</span>
        </Col>
        <Col xs={16} md={16}>
          <span>: Windows, Linux (Ubuntu, CentOS, RHEL)</span>
        </Col>
        <Col xs={8} md={8}>
          <span>System Admin</span>
        </Col>
        <Col xs={16} md={16}>
          <span>: Web Server (NGINX, Apache), SMTP, FTP, MQTT</span>
        </Col>
        <Col xs={8} md={8}>
          <span>Database Admin</span>
        </Col>
        <Col xs={16} md={16}>
          <span>: MariaDB (MySQL), Firebase</span>
        </Col>
        <Col xs={8} md={8}>
          <span>Development & Integration</span>
        </Col>
        <Col xs={16} md={16}>
          <span>: Github , Slack , Jenkins, Trello</span>
        </Col>
        <Col xs={8} md={8}>
          <span>PHP Framework</span>
        </Col>
        <Col xs={16} md={16}>
          <span>: Laravel, CodeIgniter</span>
        </Col>
        <Col xs={8} md={8}>
          <span>Javascript Framework</span>
        </Col>
        <Col xs={16} md={16}>
          <span>: ReactJS, ReactNative, NextJS</span>
        </Col>
        <Col xs={8} md={8}>
          <span>Python Framework</span>
        </Col>
        <Col xs={16} md={16}>
          <span>: Django, Flask, TensorFlow, YoLo</span>
        </Col>
      </Row>
    </div>
  );
};

export default TechStackInfo;
