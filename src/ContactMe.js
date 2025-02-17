import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./style.css";

const MessageInput = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = "service_dqejqym";
    const templateID = "template_0ybjazj";
    const publicKey = "kkqiIniE0OFtBLvXO";

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
    .send(serviceID, templateID, templateParams, publicKey)
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
      setStatus("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    })
    .catch((err) => {
      console.error("FAILED...", err);
      setStatus("Failed to send message. Please try again.");
    });
};

  return (
    <form className="input-container" onSubmit={sendEmail}>
      <label className="contact-me-label">Lets Chat!</label>
      <label className="name-label">Name</label>
      <textarea className="name-input"
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        required
      />
      <label className="name-label">Email</label>
      <textarea className="email-input"
        type="text"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        required
      />
      <label className="name-label">Message</label>
      <textarea className="message-input"
        type="message"
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Your message"
        required
      />
      <button type="submit" className="send-button">Send</button>
      {status && <p className="status-message">{status}</p>}
    </form>
  );
};

export default MessageInput;
