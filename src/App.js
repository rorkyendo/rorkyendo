import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomHeader from './components/Header';
import DashboardPage from './pages/DashboardPage'; // Import the SalesPage component
import './App.css';

function App() {
  return (
    <Router>
      <Layout className="app">
        <CustomHeader />
        <DashboardPage />
      </Layout>
    </Router>
  );
}

export default App;
