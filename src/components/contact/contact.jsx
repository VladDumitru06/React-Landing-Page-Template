import { useState } from "react";
import React from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Initialize EmailJS - Not needed with new version
  // The public key is passed directly to the send method

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);
    
    // Prepare the template parameters
    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      subject: formData.subject,
      to_name: "Website Cima",
      message: formData.message,
      to_email: "office@cimadata.ro"
    };
    
    // Toast promise with Romanian messages
    toast.promise(
      emailjs.send(
        'service_gypau7o',  // your service ID
        'template_hpmepip', // your template ID
        templateParams,
        'OuBl6l14hKoANqFxJ' // your public key
      ),
      {
        pending: 'Se procesează mesajul...',
        success: 'Mesajul a fost trimis cu succes.',
        error: 'Eroare la trimiterea mesajului.'
      }
    ).then((result) => {
      console.log("Email sent successfully:", result);
      setSubmitSuccess(true);
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }).catch((error) => {
      console.error("Failed to send email:", error);
      setSubmitError(error.text || "A apărut o eroare la trimiterea mesajului. Vă rugăm încercați din nou.");
    }).finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div id="contact">
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ fontSize: '14px' }}
      />
      <div className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info Cards */}
            <div className="contact-info">
              <div className="info-card">
                <div className="icon-container">
                  <i className="fa fa-map-marker"></i>
                </div>
                <h3>Adresă</h3>
                <p>Bulevardul Dacia 20, București 010412</p>
              </div>
              <div className="info">
                <div className="info-card">
                  <div className="icon-container">
                    <i className="fa fa-phone"></i>
                  </div>
                  <h3>Telefon</h3>
                  <p>0741-182-778</p>
                </div>

                <div className="info-card">
                  <div className="icon-container">
                    <i className="fa fa-envelope-o"></i>
                  </div>
                  <h3>Email</h3>
                  <p>office@cimadata.ro</p>
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
                      placeholder="Numele tău"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Emailul tău"
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
                    placeholder="Subiect"
                    required
                  />
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mesaj"
                    rows="6"
                    required
                  ></textarea>
                </div>

                <div className="form-submit">
                  <button 
                    type="submit" 
                    className="btn-send"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Se trimite..." : "Trimite Mesaj"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;