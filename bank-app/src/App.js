import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component imports
import Layout from './components/layout/Layout';
import Home from './components/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';

// Style imports
import './styles/globals.css';
import './styles/layout.css';
import './styles/home.css';
import './styles/auth.css';
import './styles/dashboard.css';
import './styles/features.css';
import './styles/about.css';
import './styles/contact.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout>
            <Home />
          </Layout>
        } />
        <Route path="/features" element={
          <Layout>
            <Features />
          </Layout>
        } />
        <Route path="/about" element={
          <Layout>
            <About />
          </Layout>
        } />
        <Route path="/contact" element={
          <Layout>
            <Contact />
          </Layout>
        } />
        <Route path="/login" element={
          <Layout>
            <Login />
          </Layout>
        } />
        <Route path="/register" element={
          <Layout>
            <Register />
          </Layout>
        } />
        <Route path="/dashboard" element={
          <Layout>
            <Dashboard />
          </Layout>
        } />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
