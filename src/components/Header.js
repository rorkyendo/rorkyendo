import React from 'react';
import { Layout, Menu, Row, Col, Image } from 'antd';
import { PaperClipOutlined } from '@ant-design/icons';
// import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Import CSS khusus untuk header

const { Header } = Layout;

const CustomHeader = () => {
  return (
    <Header className="custom-header">
      <Row align="middle" className="header-row">
        <Col flex="none" className="user-profile-col">
          {/* User Profile */}
          <div className="user-profile">
            <Image
              width={48}
              src="https://avatars.githubusercontent.com/u/38852429?v=4"
              className='avatar'
            />
            <span style={{marginLeft:10}}>Taufiq Rorkyendo</span>
          </div>
        </Col>
        <Col flex="auto">
          {/* Menu */}
          <Menu mode="horizontal" defaultSelectedKeys={['dashboard']} className="menu">
            {/* <Menu.Item key="sales">
              <Link to="/sales">Sales</Link>
            </Menu.Item>
            <Menu.Item key="customer">
              <Link to="/customer">Customer</Link>
            </Menu.Item>
            <Menu.Item key="product">
              <Link to="/product">Product</Link>
            </Menu.Item> */}
          </Menu>
        </Col>
        <Col flex="none">
          {/* Logo dan Title */}
          <div className="logo-section">
            <PaperClipOutlined className="logo-icon"/>
            <span className="logo-title">MY PORTOFOLIO</span>
          </div>
        </Col>
      </Row>
    </Header>
  );
};

export default CustomHeader;
