import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaHeadset, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill in all required fields.'
      });
      return;
    }
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Thank you for your message. Our team will contact you shortly.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1>Contact Us</h1>
            <p>We're here to help with any questions about our banking services</p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <h3>Call Us</h3>
              <p>Customer Service: <a href="tel:1-800-555-0123">1-800-555-0123</a></p>
              <p>International: <a href="tel:+1-234-567-8900">+1-234-567-8900</a></p>
              <p className="text-small">Available 24/7 for urgent matters</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <h3>Email Us</h3>
              <p>General Inquiries: <a href="mailto:info@swiftbank.com">info@swiftbank.com</a></p>
              <p>Customer Support: <a href="mailto:support@swiftbank.com">support@swiftbank.com</a></p>
              <p>Business Services: <a href="mailto:business@swiftbank.com">business@swiftbank.com</a></p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <h3>Visit Us</h3>
              <p>Headquarters:</p>
              <address>
                123 Banking Street<br />
                New York, NY 10001<br />
                United States
              </address>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <FaClock />
              </div>
              <h3>Banking Hours</h3>
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p>Saturday: 10:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
              <p className="text-small">Holiday hours may vary</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="contact-support">
        <div className="container">
          <div className="section-header">
            <h2>Customer Support Options</h2>
            <p>Choose the support channel that works best for you</p>
          </div>

          <div className="support-options">
            <div className="support-option">
              <div className="support-icon">
                <FaHeadset />
              </div>
              <div className="support-details">
                <h3>24/7 Phone Support</h3>
                <p>Speak directly with our customer service representatives anytime, day or night.</p>
                <a href="tel:1-800-555-0123" className="btn">Call Now</a>
              </div>
            </div>

            <div className="support-option">
              <div className="support-icon">
                <FaEnvelope />
              </div>
              <div className="support-details">
                <h3>Secure Messaging</h3>
                <p>Log in to your account to send secure messages directly to our support team.</p>
                <a href="/login" className="btn">Log In</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branch Locations */}
      <section className="contact-branches">
        <div className="container">
          <div className="section-header">
            <h2>Branch Locations</h2>
            <p>Find a SwiftBank branch near you</p>
          </div>

          <div className="branches-grid">
            <div className="branch-card">
              <h3>New York - Headquarters</h3>
              <address>
                123 Banking Street<br />
                New York, NY 10001
              </address>
              <p>Phone: (212) 555-0123</p>
              <div className="branch-hours">
                <h4>Hours:</h4>
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div className="branch-card">
              <h3>Boston</h3>
              <address>
                456 Finance Avenue<br />
                Boston, MA 02110
              </address>
              <p>Phone: (617) 555-0456</p>
              <div className="branch-hours">
                <h4>Hours:</h4>
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div className="branch-card">
              <h3>San Francisco</h3>
              <address>
                789 Tech Boulevard<br />
                San Francisco, CA 94105
              </address>
              <p>Phone: (415) 555-0789</p>
              <div className="branch-hours">
                <h4>Hours:</h4>
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div className="branch-card">
              <h3>Chicago</h3>
              <address>
                321 Lakefront Drive<br />
                Chicago, IL 60601
              </address>
              <p>Phone: (312) 555-0321</p>
              <div className="branch-hours">
                <h4>Hours:</h4>
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="section-header">
            <h2>Send Us a Message</h2>
            <p>We'll get back to you as soon as possible</p>
          </div>

          <div className="contact-form-container">
            {formStatus.submitted ? (
              <div className="form-success">
                <h3>Thank You!</h3>
                <p>{formStatus.message}</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                {formStatus.error && (
                  <div className="alert alert-danger">
                    {formStatus.message}
                  </div>
                )}
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-control"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <div className="form-group">
                  <button type="submit" className="btn">Submit Message</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="contact-social">
        <div className="container">
          <div className="section-header">
            <h2>Connect With Us</h2>
            <p>Follow us on social media for updates and financial tips</p>
          </div>
          
          <div className="social-links">
            <a href="https://facebook.com/swiftbank" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaFacebook />
              <span>Facebook</span>
            </a>
            <a href="https://twitter.com/swiftbank" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaTwitter />
              <span>Twitter</span>
            </a>
            <a href="https://instagram.com/swiftbank" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaInstagram />
              <span>Instagram</span>
            </a>
            <a href="https://linkedin.com/company/swiftbank" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map">
        <div className="map-container">
          {/* Replace with actual map component or iframe in a real implementation */}
          <div className="map-placeholder">
            <div className="map-content">
              <h3>Visit Our Branches</h3>
              <p>Find the nearest SwiftBank location on the map</p>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Open in Google Maps</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 