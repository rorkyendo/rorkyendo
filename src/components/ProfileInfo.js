import React from 'react';
import { Row, Col, Image} from 'antd';
import { LinkedinOutlined, GithubOutlined, InstagramOutlined } from '@ant-design/icons';
import '../styles/Dashboard.css';

const ProfileInfo = () => {

  return (
    <div className="card">
      <Row justify="center" align="middle">
        <Col>
          <Image
            width={120}
            src="https://avatars.githubusercontent.com/u/38852429?v=4"
            className="avatar"
          />
        </Col>
      </Row>
      <h2 style={{textAlign:'center'}}>Profile Information</h2>
      <Row justify="center" align="middle" style={{marginTop:-15}}>
        <Col>
          <a href="http://linkedin.com/in/taufiqrorkyendo" target='_blank'>
            <LinkedinOutlined  className="logo-icon"/>
          </a>
          <a href="https://github.com/rorkyendo/" target='_blank' style={{marginLeft:5}}>
            <GithubOutlined  className="logo-icon"/>
          </a>
          <a href="https://www.instagram.com/taufiqrorkyendo/" target='_blank' style={{marginLeft:5}}>
            <InstagramOutlined  className="logo-icon"/>
          </a>
        </Col>
      </Row>
      <hr/>
      <Row gutter={[16, 16]}>
          <Col xs={8} md={8}>
            <span>Nama Lengkap</span>
          </Col>
          <Col xs={16} md={16}>
            <span>: Taufiq Rorkyendo , S.Kom</span>
          </Col>
          <Col xs={8} md={8}>
            <span>Tempat / Tgl Lahir</span>
          </Col>
          <Col xs={16} md={16}>
            <span>: Pangkalan Brandan / 11 Des 1998</span>
          </Col>
          <Col xs={8} md={8}>
            <span>Status Kawin</span>
          </Col>
          <Col xs={16} md={16}>
            <span>: Kawin</span>
          </Col>
      </Row>
      <hr/>
      <Row gutter={[16, 16]}>
          <Col xs={8} md={8}>
            <span>Universitas</span>
          </Col>
          <Col xs={16} md={16}>
            <span>: Universitas Sumatra Utara</span>
          </Col>
          <Col xs={8} md={8}>
            <span>Pendidikan Terakhir</span>
          </Col>
          <Col xs={16} md={16}>
            <span>: Sarjana (S1) / S.Kom</span>
          </Col>
          <Col xs={8} md={8}>
            <span>IPK</span>
          </Col>
          <Col xs={16} md={16}>
            <span>: 3.72</span>
          </Col>
      </Row>
      <hr/>
      <Row gutter={[16, 16]}>
          <Col xs={8} md={8}>
            <span>Address</span>
          </Col>
          <Col xs={16} md={16}>
            <span>: DKI Jakarta</span>
          </Col>
          <Col xs={8} md={8}>
            <span>Phone Number</span>
          </Col>
          <Col xs={16} md={16}>
            <span>: +6282276648478</span>
          </Col>
          <Col xs={8} md={8}>
            <span>Email</span>
          </Col>
          <Col xs={16} md={16}>
            <span>: taufiqrorkyendo@gmail.com</span>
          </Col>
      </Row>
    </div>
  );
};

export default ProfileInfo;
