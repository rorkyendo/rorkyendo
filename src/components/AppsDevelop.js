import React from 'react';
import { Timeline, Card, Row, Col, Image } from "antd";
import '../styles/Dashboard.css';

const AppsDevelop = () => {

  return (
    <div className="card">
      <h2 style={{textAlign:'center'}}>Apps Has Been Developed</h2>
      <hr/>
      <Row gutter={[16, 16]}>
          <Col xs={24} md={8}>
            <Card 
              cover={<Image src="https://medandigitalinnovation.com/wp-content/uploads/2023/05/frotect.png"/>}
            >
              <center><span style={{textAlign:'center',fontWeight:'bold'}}>Frotect Telkom</span></center>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card 
              cover={<Image src="https://medandigitalinnovation.com/wp-content/uploads/2023/01/PORTOFOLIO-KANAN-400x284.png"/>}
            >
              <center><span style={{textAlign:'center',fontWeight:'bold'}}>KANAN GROUP</span></center>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card 
              cover={<Image src="https://medandigitalinnovation.com/wp-content/uploads/2024/10/Untitled-design-400x284.png"/>}
            >
              <center><span style={{textAlign:'center',fontWeight:'bold'}}>SIMPADUTA - POLTEKKES</span></center>
            </Card>
          </Col>
      </Row>
      <Row gutter={[16, 16]}>
          <Col xs={24} md={8}>
            <Card 
              cover={<Image src="https://medandigitalinnovation.com/wp-content/uploads/2023/01/PORTOFOLIO-E-INVENTARIS-USU-400x284.png"/>}
            >
              <center><span style={{textAlign:'center',fontWeight:'bold'}}>E-Inventaris Fasilkom-TI USU</span></center>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card 
              cover={<Image src="https://medandigitalinnovation.com/wp-content/uploads/2023/01/PORTOFOLIO-KUBIKS-400x284.png"/>}
            >
              <center><span style={{textAlign:'center',fontWeight:'bold'}}>KUBIKS LPP AGRO NUSANTARA</span></center>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card 
              cover={<Image src="https://medandigitalinnovation.com/wp-content/uploads/2022/04/anaktubel-400x284.png"/>}
            >
              <center><span style={{textAlign:'center',fontWeight:'bold'}}>COURSE & CBT - ANAKTUBEL</span></center>
            </Card>
          </Col>
      </Row>
    </div>
  );
};

export default AppsDevelop;
