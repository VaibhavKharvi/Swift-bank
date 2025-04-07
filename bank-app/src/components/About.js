import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaAward, FaUsers, FaGlobe, FaHandshake, FaChartLine } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>About SwiftBank</h1>
            <p>Building financial futures together since 2010</p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="about-story">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2>Our Story</h2>
              <p>
                Founded in 2010, SwiftBank began with a simple mission: to transform traditional banking by combining 
                innovative technology with customer-centric services. What started as a small fintech startup has 
                grown into a trusted financial institution serving over 2 million customers worldwide.
              </p>
              <p>
                Our journey began when our founders, experienced professionals from both the banking and technology 
                sectors, recognized a gap in the market. Traditional banks were slow to adapt to digital transformation, 
                while pure tech companies lacked the financial expertise needed for comprehensive banking services.
              </p>
              <p>
                The solution was SwiftBank — a digital-first financial institution that leverages cutting-edge 
                technology while maintaining the security, reliability, and personalized service that customers expect from 
                traditional banking.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <span className="stat-number">2010</span>
                <span className="stat-label">Founded</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">2M+</span>
                <span className="stat-label">Customers</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">28</span>
                <span className="stat-label">Countries</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">650+</span>
                <span className="stat-label">Employees</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="about-mission">
        <div className="container">
          <div className="section-header">
            <h2>Our Mission & Values</h2>
            <p>Guided by principles that put our customers first</p>
          </div>

          <div className="mission-content">
            <div className="mission-statement">
              <h3>Our Mission</h3>
              <p>
                To empower individuals and businesses with accessible, innovative financial solutions that 
                improve their lives and help build a more inclusive global economy.
              </p>
            </div>

            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">
                  <FaUsers />
                </div>
                <h3>Customer First</h3>
                <p>We place our customers at the center of everything we do, designing our services around their needs and feedback.</p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <FaCheckCircle />
                </div>
                <h3>Integrity</h3>
                <p>We maintain the highest ethical standards, ensuring transparency and honesty in all our operations.</p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <FaChartLine />
                </div>
                <h3>Innovation</h3>
                <p>We constantly seek new ways to improve our services, embracing technology to create better banking experiences.</p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <FaGlobe />
                </div>
                <h3>Inclusivity</h3>
                <p>We believe financial services should be accessible to everyone, regardless of background or financial status.</p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <FaHandshake />
                </div>
                <h3>Community</h3>
                <p>We invest in the communities we serve, contributing to their economic and social development.</p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <FaAward />
                </div>
                <h3>Excellence</h3>
                <p>We strive for excellence in every aspect of our operations, from customer service to innovative products.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="about-leadership">
        <div className="container">
          <div className="section-header">
            <h2>Our Leadership</h2>
            <p>Meet the team guiding SwiftBank toward the future</p>
          </div>

          <div className="leadership-grid">
            <div className="leader-card">
              <div className="leader-image">
                <img src="/images/leader-1.jpg" alt="Sarah Johnson" />
              </div>
              <h3>Sarah Johnson</h3>
              <p className="leader-position">Chief Executive Officer</p>
              <p className="leader-bio">
                With over 20 years of experience in financial services, Sarah leads SwiftBank's strategic vision and operations.
                Previously, she held executive positions at major global financial institutions.
              </p>
            </div>

            <div className="leader-card">
              <div className="leader-image">
                <img src="/images/leader-2.jpg" alt="Michael Chen" />
              </div>
              <h3>Michael Chen</h3>
              <p className="leader-position">Chief Technology Officer</p>
              <p className="leader-bio">
                Michael oversees all technology initiatives at SwiftBank. His background includes leadership roles at 
                Silicon Valley tech companies and financial technology startups.
              </p>
            </div>

            <div className="leader-card">
              <div className="leader-image">
                <img src="/images/leader-3.jpg" alt="Amara Wilson" />
              </div>
              <h3>Amara Wilson</h3>
              <p className="leader-position">Chief Financial Officer</p>
              <p className="leader-bio">
                Amara brings her extensive experience in financial management to lead SwiftBank's fiscal strategy and growth.
                She previously served as CFO at multiple Fortune 500 companies.
              </p>
            </div>

            <div className="leader-card">
              <div className="leader-image">
                <img src="/images/leader-4.jpg" alt="David Rodriguez" />
              </div>
              <h3>David Rodriguez</h3>
              <p className="leader-position">Chief Operating Officer</p>
              <p className="leader-bio">
                David manages SwiftBank's day-to-day operations and customer experience initiatives. His career spans 
                operations management in both traditional banking and fintech sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="about-achievements">
        <div className="container">
          <div className="section-header">
            <h2>Recognition & Achievements</h2>
            <p>Our commitment to excellence has been recognized throughout the industry</p>
          </div>

          <div className="achievements-timeline">
            <div className="achievement-item">
              <div className="achievement-year">2023</div>
              <div className="achievement-content">
                <h3>Best Digital Banking Experience Award</h3>
                <p>Recognized for our intuitive mobile app and customer satisfaction ratings.</p>
              </div>
            </div>

            <div className="achievement-item">
              <div className="achievement-year">2022</div>
              <div className="achievement-content">
                <h3>Financial Inclusion Excellence Award</h3>
                <p>Honored for our initiatives to provide banking services to underserved communities.</p>
              </div>
            </div>

            <div className="achievement-item">
              <div className="achievement-year">2021</div>
              <div className="achievement-content">
                <h3>Top 10 Fintech Companies</h3>
                <p>Named one of the most innovative financial technology companies by FinTech Magazine.</p>
              </div>
            </div>

            <div className="achievement-item">
              <div className="achievement-year">2020</div>
              <div className="achievement-content">
                <h3>Customer Service Excellence</h3>
                <p>Awarded for our responsive customer support and problem resolution metrics.</p>
              </div>
            </div>

            <div className="achievement-item">
              <div className="achievement-year">2018</div>
              <div className="achievement-content">
                <h3>Most Secure Banking Platform</h3>
                <p>Recognized for our industry-leading security protocols and fraud prevention measures.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="about-community">
        <div className="container">
          <div className="section-header">
            <h2>Community Impact</h2>
            <p>How we're giving back and making a difference</p>
          </div>

          <div className="community-content">
            <p className="community-intro">
              At SwiftBank, we believe in making a positive impact in the communities we serve. Our commitment goes beyond 
              financial services to create lasting change and empower people around the world.
            </p>

            <div className="initiatives-grid">
              <div className="initiative-card">
                <h3>Financial Literacy Programs</h3>
                <p>
                  We've educated over 500,000 individuals through free workshops, online courses, and school programs 
                  designed to improve financial knowledge and decision-making.
                </p>
              </div>

              <div className="initiative-card">
                <h3>Environmental Sustainability</h3>
                <p>
                  Our operations are carbon-neutral, and we've committed to investing $50 million in renewable energy 
                  projects and sustainable businesses by 2025.
                </p>
              </div>

              <div className="initiative-card">
                <h3>Small Business Support</h3>
                <p>
                  Through our Small Business Incubator program, we've provided $30 million in low-interest loans and 
                  mentoring to over 1,000 entrepreneurs from underrepresented groups.
                </p>
              </div>

              <div className="initiative-card">
                <h3>Volunteer Impact</h3>
                <p>
                  Our employees contribute over 25,000 volunteer hours annually, supporting local causes and organizations 
                  that align with our mission of creating more inclusive communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Join the SwiftBank community</h2>
            <p>Experience banking that puts you first and helps build a better financial future.</p>
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

export default About; 