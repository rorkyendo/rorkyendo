import React from 'react';
import { Row, Col, Image} from 'antd';
import '../styles/Dashboard.css';

const TechStackInfo = () => {

  return (
    <div className="card">
      <h2 style={{textAlign:'center'}}>Tech Stack Information</h2>
      <hr/>
      <Row gutter={[16, 16]}>
        <Col xs={7} md={7}>
          <span>Bahasa Program</span>
        </Col>
        <Col xs={17} md={17}>
          <span>: Javascript, PHP, Python, C++ (IoT/Arduino), SQL</span>
        </Col>
        <Col xs={7} md={7}>
          <span>Operation System</span>
        </Col>
        <Col xs={17} md={17}>
          <span>: Windows, Linux (Ubuntu, CentOS, RHEL)</span>
        </Col>
        <Col xs={7} md={7}>
          <span>System Admin</span>
        </Col>
        <Col xs={17} md={17}>
          <span>: Web Server (NGINX, Apache), SMTP, FTP, MQTT</span>
        </Col>
        <Col xs={7} md={7}>
          <span>Database Admin</span>
        </Col>
        <Col xs={17} md={17}>
          <span>: MariaDB (MySQL), Firebase</span>
        </Col>
        <Col xs={7} md={7}>
          <span>Dev & Integration</span>
        </Col>
        <Col xs={17} md={17}>
          <span>: Github , Slack , Jenkins, Trello</span>
        </Col>
        <Col xs={7} md={7}>
          <span>PHP Framework</span>
        </Col>
        <Col xs={17} md={17}>
          <span>: Laravel, CodeIgniter</span>
        </Col>
        <Col xs={7} md={7}>
          <span>JS Framework</span>
        </Col>
        <Col xs={17} md={17}>
          <span>: ReactJS, ReactNative, NextJS</span>
        </Col>
        <Col xs={7} md={7}>
          <span>Python Framework</span>
        </Col>
        <Col xs={17} md={17}>
          <span>: Django, Flask, TensorFlow, YoLo, HuggingFace / OpenAI</span>
        </Col>
      </Row>
    </div>
  );
};

export default TechStackInfo;
