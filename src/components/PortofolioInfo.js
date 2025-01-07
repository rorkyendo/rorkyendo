import React from 'react';
import { Timeline, Row, Col, Image } from "antd";
import '../styles/Dashboard.css';

const PortofolioInfo = () => {

  return (
    <div className="card">
      <h2 style={{textAlign:'center'}}>Portofolio Information</h2>
      <hr/>
      <h4 style={{textAlign:'left'}}>Career Summary :</h4>
      <Row gutter={[16, 16]}>
          <Col xs={24} md={24}>
              <Timeline>
                <Timeline.Item>
                  <span><span style={{fontWeight:'bold'}}>PT Bank Syariah Indonesia Tbk</span> (Software Engineer)</span>
                  <p>Okt 2023 - Present</p>
                  <ul>
                    <li>Web Development BSINET Banking</li>
                    <li>Proof Of Concept Performance Tunning</li>
                    <li>Proof Of Concept NGINX Web Server Deployment</li>
                  </ul>
                </Timeline.Item>
                <Timeline.Item>
                  <span><span style={{fontWeight:'bold'}}>CV Medan Digital Inovasi</span> (Fullstack Software Engineer)</span>
                  <p>Jul 2019 - Present (Freelance)</p>
                  <ul>
                    <li>Web And Mobile apps Development as Client Request</li>
                    <li>System Admin (Apache & NGINX)</li>
                    <li>Database Admin (MariaDB/MySQL)</li>
                    <li>R&D IoT (Arduino,ESP32, Microcontroller)</li>
                    <li>R&D AI/ML (TensorFlow,YoLo)</li>
                  </ul>
                </Timeline.Item>
                <Timeline.Item>
                  <span><span style={{fontWeight:'bold'}}>CV Indosistem</span> (Fullstack Software Engineer)</span>
                  <p>Agt 2020 - Feb 2021</p>
                  <ul>
                    <li>Web Development as Client Request</li>
                    <li>System Admin (Apache & NGINX)</li>
                    <li>Database Admin (MariaDB/MySQL)</li>
                  </ul>
                </Timeline.Item>
                <Timeline.Item>
                  <span><span style={{fontWeight:'bold'}}>Unit Manajemen Mutu (UMM USU)</span> (Fullstack Software Engineer)</span>
                  <p>Agt 2019 - Feb 2020</p>
                  <ul>
                    <li>Development Fullstack Apps for Utility SPMI</li>
                  </ul>
                </Timeline.Item>
                <Timeline.Item>
                  <span><span style={{fontWeight:'bold'}}>CV Alfa Cyber Indonesia</span> (Fullstack Software Engineer)</span>
                  <p>Sept 2018 - Sept 2019</p>
                  <ul>
                    <li>Development Fullstack Apps for POS System</li>
                  </ul>
                </Timeline.Item>
                <Timeline.Item>
                  <span><span style={{fontWeight:'bold'}}>ITLG (Information Technology Laboratory Group)</span> (Assistant laboratory)</span>
                  <p>Mengajar Sebagai Assistant Lab pada beberapa mata kuliah</p>
                  <ul>
                    <li>Interaksi Manusia dan Komputer (IMK)</li>
                    <li>Manajemen Sistem Basis Data (MSBD)</li>
                    <li>Pemrograman Integratif (PI)</li>
                  </ul>
                </Timeline.Item>
              </Timeline>
          </Col>
      </Row>
      {/* <hr/>
      <h4 style={{textAlign:'left'}}>Web Development : </h4>
      <hr/>
      <h4 style={{textAlign:'left'}}>Mobile Development</h4>
      <Row gutter={[16, 16]}>
          <Col xs={24} md={24}>
            <span>Nama Lengkap</span>
          </Col>
      </Row>
      <hr/>
      <h4 style={{textAlign:'left'}}>Machine Learning Research</h4>
      <Row gutter={[16, 16]}>
          <Col xs={24} md={24}>
            <span>Nama Lengkap</span>
          </Col>
      </Row>
      <hr/> */}
    </div>
  );
};

export default PortofolioInfo;
