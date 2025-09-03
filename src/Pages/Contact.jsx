

// import { Form } from "react-router-dom";

import { useState } from "react";



export const contactData = async({request})=>{
    try {
    const res =   await request.formData();
    // console.log(res)
    const  data  = object.formEntries(res);
       console.log(data)
    return null;
        
    } catch (error) {
       console.log(error) ;
    }
}



export const Contact =()=>{





  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };







  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form Data:", formData);
  //   alert("Message Sent!");
  //   setFormData({ name: "", email: "", message: "" }); // Reset form
  // };


  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

      // backend URL (Node.js API)

  const response = await fetch("http://localhost:5000/contact", 
    {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  const data = await response.json();
  alert(data.message); // "Message saved successfully!" aayega
  console.log("Form Data:", formData)
  setFormData({ name: "", email: "", message: "" }); // form reset


};
  
  //   alert("Message Sent!");
  //   setFormData({ name: "", email: "", message: "" }); // Reset form
  // };





  const formStyle = {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Contact Us</h2>

      <label style={labelStyle}>Name</label>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
        required
        style={inputStyle}
      />

      <label style={labelStyle}>Email</label>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        required
        style={inputStyle}
      />

      <label style={labelStyle}>Message</label>
      <textarea
        name="message"
        placeholder="Write your message..."
        value={formData.message}
        onChange={handleChange}
        required
        rows="4"
        style={inputStyle}
      ></textarea>

      <button type="submit" style={buttonStyle}>
        Send Message
      </button>
    </form>
  );
}
