import { useState } from "react";
import React from "react";
import emailjs from 'emailjs-com';

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  
  const clearState = () => setState({ ...initialState });
  
  // Method 1: Direct mailto link for backup
  const handleDirectEmailOpen = () => {
    const subject = encodeURIComponent("New Contact Form Submission");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    );
    window.location.href = `mailto:vlad.dumitru@cimadata.ro?subject=${subject}&body=${body}`;
  };
  
  // Method 2: Form submission with EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    // Prepare the template parameters
    const templateParams = {
      from_name: name,
      reply_to: email,
      to_name: "Vlad Dumitru",
      message: message,
      to_email: "vlad.dumitru@cimadata.ro" // This is added as a parameter to use in the EmailJS template
    };
    
    try {
      // Replace with your actual EmailJS service ID, template ID, and user ID
      // You'll need to sign up at emailjs.com and create these
      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // replace with your service ID
        'YOUR_TEMPLATE_ID', // replace with your template ID
        templateParams,
        'YOUR_USER_ID' // replace with your user ID
      );
      
      console.log("Email sent successfully:", result.text);
      setSubmitSuccess(true);
      clearState();
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitError(error.text || "Failed to send email. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                        value={name}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                        value={email}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                    value={message}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                
                <div id="success">
                  {submitSuccess && (
                    <div className="alert alert-success">
                      Your message has been sent successfully!
                    </div>
                  )}
                  {submitError && (
                    <div className="alert alert-danger">
                      Sorry, there was an error sending your message: {submitError}
                    </div>
                  )}
                </div>
                <button 
                  type="submit" 
                  className="btn btn-custom btn-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                
                {/* Alternative direct email button */}
                <button 
                  type="button" 
                  className="btn btn-outline-secondary btn-lg ml-2"
                  onClick={handleDirectEmailOpen}
                  style={{ marginLeft: '10px' }}
                >
                  Open Email Client
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                vlad.dumitru@cimadata.ro
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2025 React Landing Page
          </p>
        </div>
      </div>
    </div>
  );
};