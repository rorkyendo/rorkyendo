import React from 'react';
import { Timeline, Card, Row, Col, Image } from "antd";
import '../styles/Dashboard.css';

const AppsDevelop = () => {

  return (
    <div className="card no-print">
      <h2 style={{textAlign:'center'}}>Apps Has Been Developed</h2>
      <hr/>
      <Row gutter={[16, 16]}>
          <Col xs={24} md={8}>
            <Card 
              cover={<Image src="https://cvmedandigitalinovasi.com/wp-content/uploads/2025/10/anaktubel.com_.png"/>}
            >
              <center><span style={{textAlign:'center',fontWeight:'bold'}}><a href="https://anaktubel.com/" target='_blank'>ANAKTUBEL - ONLINE COURSE & CBT</a></span></center>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card 
              cover={<Image src="https://cvmedandigitalinovasi.com/wp-content/uploads/2025/10/injiwarrior.com_.png"/>}
            >
              <center><span style={{textAlign:'center',fontWeight:'bold'}}><a href="https://simpaduta.com/" target='_blank'>INJIWARRIOR - NEWS</a></span></center>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card 
              cover={<Image src="https://cvmedandigitalinovasi.com/wp-content/uploads/2025/10/kubiks.png"/>}
            >
              <center><span style={{textAlign:'center',fontWeight:'bold'}}><a href="https://kubiks.lpp.co.id/" target='_blank'>KUBIKS LPP AGRO NUSANTARA -  AI/ML & WEBREPORTING</a></span></center>
            </Card>
          </Col>
      </Row>
      <Row gutter={[16, 16]}>
          <Col xs={24} md={8}>
            <Card 
              cover={<Image src="https://cvmedandigitalinovasi.com/wp-content/uploads/2025/10/tokokitaaja.com_.png"/>}
            >
              <center><span style={{textAlign:'center',fontWeight:'bold'}}><a href="https://tokokitaaja.com/" target='_blank'>TOKO KITA AJA - POS & WEBSHOP</a></span></center>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card 
              cover={<Image src="https://cvmedandigitalinovasi.com/wp-content/uploads/2025/10/simpaduta.png"/>}
            >
              <center><span style={{textAlign:'center',fontWeight:'bold'}}><a href="https://simpaduta.com/" target='_blank'>SIMPADUTA - RESEARCH (POLTEKKES)</a></span></center>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card 
              cover={<Image src="https://cvmedandigitalinovasi.com/wp-content/uploads/2025/10/koperasiberkatlumbung.com_.png"/>}
            >
              <center><span style={{textAlign:'center',fontWeight:'bold'}}><a href="https://koperasiberkatlumbung.com/" target='_blank'>KOPERASI BERKAT LUMBUNG - FINANCING KOPERASI</a></span></center>
            </Card>
          </Col>
      </Row>
      <Row gutter={[16, 16]}>
          <Col xs={24} md={8}>
            <Card 
              cover={<Image src="https://cvmedandigitalinovasi.com/wp-content/uploads/2025/10/cekinfobumil.com_.png"/>}
            >
              <center><span style={{textAlign:'center',fontWeight:'bold'}}><a href="https://cekinfobumil.com/" target='_blank'>CEK INFO BUMIL - RESEARCH (POLTEKKES)</a></span></center>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card 
              cover={<Image src="https://cvmedandigitalinovasi.com/wp-content/uploads/2025/10/familyhill.png"/>}
            >
              <center><span style={{textAlign:'center',fontWeight:'bold'}}><a href="#">FAMILY HILL - POS (LOKET & KANTIN)</a></span></center>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card 
              cover={<Image src="https://cvmedandigitalinovasi.com/wp-content/uploads/2025/10/algarage.png"/>}
            >
              <center><span style={{textAlign:'center',fontWeight:'bold'}}><a href="#">ALGARAGE - POS (BENGKEL)</a></span></center>
            </Card>
          </Col>
      </Row>
    </div>
  );
};

export default AppsDevelop;
