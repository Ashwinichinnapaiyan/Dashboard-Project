import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faDribbble, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faEnvelope, faPhoneAlt, faClock, faBookOpen, faChalkboardTeacher, faHandshake } from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";

const Contact = () => {
  const [mapSrc, setMapSrc] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setMapSrc(`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp`);
        },
        () => {
          setMapSrc("https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp");
        }
      );
    }
  }, []);

  return (
    <section className="contacts">
      <div className="container">
        <div className="left">
          <h1>Contact Us</h1>
          <p>Have questions? Reach out to us!</p>
          <div className="items">
            <div className="box">
              <h4><FontAwesomeIcon icon={faMapMarkerAlt} /> Address:</h4>
              <p>198 West 21st Street, Suite 721, TVM, TN 606753</p>
            </div>
            <div className="box">
              <h4><FontAwesomeIcon icon={faEnvelope} /> Email:</h4>
              <p>support@avrtuvalskills.com</p>
            </div>
            <div className="box">
              <h4><FontAwesomeIcon icon={faPhoneAlt} /> Phone:</h4>
              <p>+91 7806897747</p>
            </div>
            <div className="box">
              <h4><FontAwesomeIcon icon={faClock} /> Business Hours:</h4>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
        <div className="right">
          <iframe src={mapSrc} loading="lazy"></iframe>
        </div>
      </div>

      <div className="contact-section">
        <form>
          <h2>Get in Touch</h2>
          <p>Drop us a message, and we'll respond as soon as possible.</p>
          <div className="input-group">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
          </div>
          <input type="text" placeholder="Subject" required />
          <textarea cols="30" rows="5" placeholder="Your Message..." required></textarea>
          <button className="primary-btn">SEND MESSAGE</button>
        </form>
      </div>
<br></br>
      <div className="extra-info">
        <div className="box">
          <h4><FontAwesomeIcon icon={faBookOpen} /> Student Support</h4>
          <p>Need help? Visit our <a href="/help">Help Center</a>.</p>
        </div>
        <div className="box">
          <h4><FontAwesomeIcon icon={faChalkboardTeacher} /> Become an Instructor</h4>
          <p>Join our platform. <a href="/teach">Apply Here</a>.</p>
        </div>
        <div className="box">
          <h4><FontAwesomeIcon icon={faHandshake} /> Partnerships</h4>
          <p>Collaborate with us. <a href="mailto:partners@avrtuvalskills.com">Contact Us</a>.</p>
        </div>
      </div>

      <h3 className="cwu">Connect with Us</h3>
     <div className="social-icons">
             <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a>
             <a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} /></a>
             <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
             <a href="https://dribbble.com/"><FontAwesomeIcon icon={faDribbble} /></a>
             <a href="https://web.whatsapp.com/"><FontAwesomeIcon icon={faWhatsapp} /></a>
           </div>
    </section>
  );
};

export default Contact;
