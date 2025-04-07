import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaShieldAlt, FaCreditCard, FaMobileAlt, FaChartLine, FaExchangeAlt, 
  FaLock, FaRegBell, FaUserClock, FaFileInvoiceDollar, FaPiggyBank,
  FaUniversity, FaHandHoldingUsd, FaHeadset, FaMobile, FaRegCreditCard
} from 'react-icons/fa';

const Features = () => {
  return (
    <div className="features-page">
      {/* Hero Section */}
      <section className="features-hero">
        <div className="container">
          <div className="features-hero-content">
            <h1>Powerful Banking Features</h1>
            <p>
              SwiftBank offers cutting-edge banking tools and services designed to 
              make managing your finances simple, secure, and convenient.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="features-main">
        <div className="container">
          <div className="section-header">
            <h2>Core Banking Services</h2>
            <p>Essential banking features that make your financial life easier</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaMobileAlt />
              </div>
              <h3>Mobile Banking</h3>
              <p>Bank on the go with our powerful mobile app. Deposit checks, transfer funds, and manage accounts from anywhere.</p>
              <ul className="feature-list">
                <li>Mobile check deposit</li>
                <li>Fingerprint & Face ID login</li>
                <li>Real-time account alerts</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaExchangeAlt />
              </div>
              <h3>Easy Transfers</h3>
              <p>Transfer money between accounts or to other people quickly and securely.</p>
              <ul className="feature-list">
                <li>Instant transfers between accounts</li>
                <li>Person-to-person payments</li>
                <li>Schedule recurring transfers</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaFileInvoiceDollar />
              </div>
              <h3>Bill Pay</h3>
              <p>Pay your bills easily from one place without writing checks or visiting multiple websites.</p>
              <ul className="feature-list">
                <li>Schedule one-time or recurring payments</li>
                <li>eBills directly to your account</li>
                <li>Payment reminders and confirmation</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaChartLine />
              </div>
              <h3>Financial Insights</h3>
              <p>Track your spending patterns and get personalized insights to improve financial health.</p>
              <ul className="feature-list">
                <li>Spending categorization</li>
                <li>Budget creation tools</li>
                <li>Savings recommendations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="features-security">
        <div className="container">
          <div className="section-header">
            <h2>Bank-Grade Security</h2>
            <p>Your security is our top priority with advanced protection features</p>
          </div>

          <div className="features-grid">
            <div className="feature-card security-card">
              <div className="feature-icon">
                <FaLock />
              </div>
              <h3>Advanced Encryption</h3>
              <p>State-of-the-art encryption technology protects your sensitive information 24/7.</p>
            </div>

            <div className="feature-card security-card">
              <div className="feature-icon">
                <FaShieldAlt />
              </div>
              <h3>Fraud Protection</h3>
              <p>Real-time fraud monitoring with instant alerts when suspicious activity is detected.</p>
            </div>

            <div className="feature-card security-card">
              <div className="feature-icon">
                <FaRegCreditCard />
              </div>
              <h3>Card Controls</h3>
              <p>Instantly lock/unlock your cards, set spending limits, and control where they can be used.</p>
            </div>

            <div className="feature-card security-card">
              <div className="feature-icon">
                <FaUserClock />
              </div>
              <h3>Two-Factor Authentication</h3>
              <p>Extra security layer ensures only you can access your accounts, even if passwords are compromised.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Banking Products */}
      <section className="features-products">
        <div className="container">
          <div className="section-header">
            <h2>Financial Products</h2>
            <p>Comprehensive solutions for every stage of your financial journey</p>
          </div>

          <div className="products-container">
            <div className="product-category">
              <h3><FaUniversity /> Accounts</h3>
              <ul>
                <li>High-yield checking accounts</li>
                <li>Savings accounts with competitive rates</li>
                <li>Money market accounts</li>
                <li>Certificates of deposit (CDs)</li>
                <li>Business accounts with merchant services</li>
              </ul>
            </div>

            <div className="product-category">
              <h3><FaCreditCard /> Cards</h3>
              <ul>
                <li>Cash back credit cards</li>
                <li>Travel rewards credit cards</li>
                <li>Secure debit cards with rewards</li>
                <li>Business credit cards</li>
                <li>Secured credit cards for building credit</li>
              </ul>
            </div>

            <div className="product-category">
              <h3><FaHandHoldingUsd /> Loans</h3>
              <ul>
                <li>Personal loans with competitive rates</li>
                <li>Home mortgages and refinancing</li>
                <li>Auto loans and leasing options</li>
                <li>Student loan refinancing</li>
                <li>Business loans and lines of credit</li>
              </ul>
            </div>

            <div className="product-category">
              <h3><FaPiggyBank /> Investments</h3>
              <ul>
                <li>Retirement accounts (IRA, 401k)</li>
                <li>Automated investing</li>
                <li>Brokerage accounts</li>
                <li>Managed portfolios</li>
                <li>Educational savings accounts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Tools */}
      <section className="features-tools">
        <div className="container">
          <div className="section-header">
            <h2>Digital Banking Tools</h2>
            <p>Modern solutions for everyday banking needs</p>
          </div>

          <div className="tools-grid">
            <div className="tool-item">
              <div className="tool-icon"><FaRegBell /></div>
              <div className="tool-content">
                <h3>Custom Alerts</h3>
                <p>Set up text or email alerts for transactions, low balances, and account updates.</p>
              </div>
            </div>

            <div className="tool-item">
              <div className="tool-icon"><FaMobile /></div>
              <div className="tool-content">
                <h3>Digital Wallet</h3>
                <p>Connect your cards to Apple Pay, Google Pay, and Samsung Pay for contactless payments.</p>
              </div>
            </div>

            <div className="tool-item">
              <div className="tool-icon"><FaChartLine /></div>
              <div className="tool-content">
                <h3>Financial Planning</h3>
                <p>Set savings goals and track your progress with automated tools and visualizations.</p>
              </div>
            </div>

            <div className="tool-item">
              <div className="tool-icon"><FaHeadset /></div>
              <div className="tool-content">
                <h3>24/7 Support</h3>
                <p>Get help anytime via in-app chat, phone support, or schedule video meetings with financial advisors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to experience modern banking?</h2>
            <p>Join thousands of satisfied customers who trust SwiftBank for their financial needs.</p>
            <div className="cta-buttons">
              <Link to="/register" className="btn">Open an Account</Link>
              <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features; 