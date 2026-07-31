import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      setStatus("Please enter your name.");
      return;
    }

    if (!formData.email.includes("@")) {
      setStatus("Please enter a valid email.");
      return;
    }

    if (formData.message.trim().length < 10) {
      setStatus("Message must be at least 10 characters.");
      return;
    }

    // Success
    setStatus("✅ Message Sent Successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setStatus("");
    }, 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Get In Touch</h2>

        <p className="contact-subtitle">
          Feel free to reach out for collaborations, projects, or opportunities.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="contact-btn">
            Send Message
          </button>

          {status && (
            <p className="status-message">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;