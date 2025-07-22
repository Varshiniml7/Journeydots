import React, { useState } from "react";

function MainContent() {
  const [form, setForm] = useState({
    date: "",
    destination: "",
    plan: "",
    note: "",
    chat: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Travel Plan Submitted!");
    console.log(form);
  };

  return (
    <main style={{ padding: "20px", backgroundColor: "rgba(0,0,0,0.5)", borderRadius: "10px" }}>
      <h2>Plan Your Journey</h2>
      <form 
        onSubmit={handleSubmit} 
        style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "500px", margin: "auto" }}
      >
        <input 
          type="date" 
          name="date" 
          value={form.date} 
          onChange={handleChange} 
          placeholder="Date" 
          required 
        />
        <input 
          type="text" 
          name="destination" 
          value={form.destination} 
          onChange={handleChange} 
          placeholder="Destination" 
          required 
        />
        <textarea 
          name="plan" 
          value={form.plan} 
          onChange={handleChange} 
          placeholder="Travel Plan" 
          rows="3" 
          required
        ></textarea>
        <textarea 
          name="note" 
          value={form.note} 
          onChange={handleChange} 
          placeholder="Additional Notes" 
          rows="2"
        ></textarea>
        <textarea 
          name="chat" 
          value={form.chat} 
          onChange={handleChange} 
          placeholder="Group Chat (type something...)" 
          rows="3"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default MainContent;

