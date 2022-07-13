import React, { useState,useEffect } from "react";
import "../app.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email] = useState("");
  const [message, setMessage] = useState("");

  const [loader] = useState(false);
  useEffect(() => {
    document.body.style.zoom = "80%";
  }, []);

 

  return (
    <form className="form" action="https://formcarry.com/s/rPThXZod5rm" method="POST" accept-charset="UTF-8">
      <h1>Contact Us 🤳</h1>

      <label>Name</label>
      <input
      type="text"
      name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
      name="email"
      type="email"
        placeholder="Email"
        value={email}
      />

      <label>Message</label>
      <input
      name="message"
      
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></input>

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;