// src/Contact.js
import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <section className="contact" id="contact">
            <h2>Contact</h2>
            <p>Feel free to reach out if you have any questions or would like to work together!</p>
            <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
}

export default Contact;