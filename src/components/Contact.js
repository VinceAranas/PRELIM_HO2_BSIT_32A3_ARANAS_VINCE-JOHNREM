import React from "react";

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <form>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
