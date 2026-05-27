import { useEffect, useRef, useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import "./Contact.css";

export default function Contact() {

  const sectionRef = useRef(null);

  const [status, setStatus] = useState("idle");

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target
              .querySelectorAll(".fade-up")
              .forEach((el) => el.classList.add("visible"));

          }

        });

      },
      { threshold: 0.1 }
    );

    if (sectionRef.current)
      observer.observe(sectionRef.current);

    return () => observer.disconnect();

  }, []);

  const handleSubmit = async (e) => {

    e.preventDefault();

    setStatus("sending");

    const formData = new FormData(e.target);

    try {

      const response = await fetch(
        "https://formspree.io/f/mykvlzwl",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {

        setStatus("sent");

        e.target.reset();

        setTimeout(() => {
          setStatus("idle");
        }, 3000);

      } else {

        setStatus("error");

      }

    } catch (error) {

      setStatus("error");

    }

  };

  return (

    <section id="contact" ref={sectionRef}>

      <div className="contact-inner">

        {/* Left */}

        <div className="contact-left fade-up">

          <div className="section-tag">
            Contact
          </div>

          <h2 className="section-heading">
            Let's build something <span>together</span>
          </h2>

          <p className="contact-desc">
            Open to internships, entry-level opportunities,
            freelance projects, or just a good tech conversation.
            Reach out — I respond within 24h!
          </p>

          <div className="contact-details">

            <a
              href="mailto:kanhaiya057@gmail.com"
              className="contact-detail"
            >

              <div className="cd-icon">
                <FaEnvelope />
              </div>

              <div>
                <div className="cd-label">Email</div>

                <div className="cd-value">
                  kanhaiya057@gmail.com
                </div>
              </div>

            </a>

            <a
              href="tel:9142264379"
              className="contact-detail"
            >

              <div className="cd-icon">
                <FaPhone />
              </div>

              <div>
                <div className="cd-label">Phone</div>

                <div className="cd-value">
                  +91 91422 64379
                </div>
              </div>

            </a>

            <div className="contact-detail">

              <div className="cd-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <div className="cd-label">Location</div>

                <div className="cd-value">
                  Rajkot, Gujarat, India
                </div>
              </div>

            </div>

          </div>

          <div className="contact-socials">

            <a href="https://github.com/krishankanhaiya09" className="social-btn">
              <FaGithub /> GitHub
            </a>

            <a href="https://www.linkedin.com/in/krishan-kanhaiya-97198233b" className="social-btn">
              <FaLinkedin /> LinkedIn
            </a>

          </div>

        </div>

        {/* Right */}

        <div className="contact-form-wrap fade-up delay-2">

          <div className="contact-form glass-card">

            <h3 className="form-heading">
              Send a Message
            </h3>

            <p className="form-sub">
              I'll get back to you shortly.
            </p>

            <form onSubmit={handleSubmit}>

              <div className="form-row">

                <div className="form-group">

                  <label>First Name</label>

                  <input
                    type="text"
                    name="firstName"
                    placeholder="John"
                    required
                  />

                </div>

                <div className="form-group">

                  <label>Last Name</label>

                  <input
                    type="text"
                    name="lastName"
                    placeholder="Doe"
                    required
                  />

                </div>

              </div>

              <div className="form-group">

                <label>Email</label>

                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                />

              </div>

              <div className="form-group">

                <label>Subject</label>

                <input
                  type="text"
                  name="subject"
                  placeholder="Internship opportunity / Project collab..."
                  required
                />

              </div>

              <div className="form-group">

                <label>Message</label>

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project or opportunity..."
                  required
                />

              </div>

              <button
                type="submit"
                className={`submit-btn ${status}`}
                disabled={status === "sending"}
              >

                {status === "idle" && "Send Message →"}

                {status === "sending" && "Sending..."}

                {status === "sent" && "✓ Message Sent!"}

                {status === "error" && "❌ Failed"}

              </button>

            </form>

          </div>

        </div>

      </div>

    </section>

  );
}