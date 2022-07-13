import React, { useState,useEffect } from "react";
import "./styles.css";

const CreateEvent = () => {
  useEffect(() => {
    document.body.style.zoom = "80%";
  }, []);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const updateFormData = event =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

  const { firstName, lastName, email, password } = formData;

  return (
      <>
      <div className="formi">
          <h1>Create Your Events Customised</h1>
    <form>
      <input
        value={firstName}
        onChange={e => updateFormData(e)}
        placeholder="First name"
        type="text"
        name="firstName"
        required
      />
      <input
        value={lastName}
        onChange={e => updateFormData(e)}
        placeholder="Last name"
        type="text"
        name="lastName"
        required
      />
      <input
        value={email}
        onChange={e => updateFormData(e)}
        placeholder="Email address"
        type="email"
        name="email"
        required
      />
      <label>Import a Poster for your event</label>
      <input
        value={password}
        onChange={e => updateFormData(e)}
        placeholder="Password"
        type="file"
        name="password"
        required
      />
        <label>Enter the date of your event</label>
      <input
        value={password}
        onChange={e => updateFormData(e)}
        placeholder="enter the date of your event"
        type="date"
        name="password"
        required
      />
      <input
        value={password}
        onChange={e => updateFormData(e)}
        placeholder="Enter a price for your Event's Ticket"
        type="price"
        name="password"
        required
      />
      <input
        value={password}
        onChange={e => updateFormData(e)}
        placeholder="A Description of your Event"
        type="message"
        name="password"
        required
      />
      

      <button type="submit">Create your Event</button>
    
    </form>
    </div>
    </>
  );
};

export default CreateEvent;