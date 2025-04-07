import React from 'react';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaCreditCard, FaMobileAlt, FaChartLine } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Banking Made <span className="text-primary">Simple</span></h1>
              <p>
                Experience the future of banking with SwiftBank. Secure, easy-to-use,
                and packed with features to help you manage your finances efficiently.
              </p>
              <div className="hero-buttons">
                <Link to="/register" className="btn">Open an Account</Link>
                <Link to="/features" className="btn btn-secondary">Learn More</Link>
              </div>
            </div>
            <div className="hero-image">
              <img src="/images/banking-app.png" alt="SwiftBank Mobile App" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose SwiftBank?</h2>
            <p>Designed with your needs in mind, SwiftBank offers everything you need for modern banking</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaShieldAlt />
              </div>
              <h3>Secure Banking</h3>
              <p>State-of-the-art security systems to protect your financial data and transactions.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaCreditCard />
              </div>
              <h3>Easy Payments</h3>
              <p>Send money, pay bills, and make purchases with just a few taps.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaMobileAlt />
              </div>
              <h3>Mobile Banking</h3>
              <p>Manage your accounts, track expenses, and deposit checks from anywhere.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaChartLine />
              </div>
              <h3>Financial Insights</h3>
              <p>Understand your spending patterns and receive personalized financial advice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2>How It Works</h2>
            <p>Getting started with SwiftBank is quick and easy</p>
          </div>

          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Create an Account</h3>
              <p>Sign up in minutes with just a few pieces of information.</p>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <h3>Link Your Accounts</h3>
              <p>Connect your existing bank accounts or start fresh with us.</p>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <h3>Start Banking</h3>
              <p>Enjoy a seamless banking experience with all our features.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to take control of your finances?</h2>
            <p>Join thousands of satisfied customers who trust SwiftBank for their banking needs.</p>
            <Link to="/register" className="btn">Get Started Today</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 