import { useState } from "react";
import React from "react";
import './contact.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
      <div className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info Cards */}
            <div className="contact-info">
              <div className="info-card">
                <div className="icon-container">
                  <i className="fa fa-map-marker"></i>
                </div>
                <h3>Address</h3>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
              <div className="info">
                <div className="info-card">
                  <div className="icon-container">
                    <i className="fa fa-phone"></i>
                  </div>
                  <h3>Call Us</h3>
                  <p>+1 5589 55488 55</p>
                </div>

                <div className="info-card">
                  <div className="icon-container">
                    <i className="fa fa-envelope-o"></i>
                  </div>
                  <h3>Email Us</h3>
                  <p>info@example.com</p>
                </div>
              </div>

            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                    />
                  </div>
                  <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      required
                  />
                </div>

                <div className="form-group">
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows="6"
                    required
                ></textarea>
                </div>

                <div className="form-submit">
                  <button type="submit" className="btn-send">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ContactSection;