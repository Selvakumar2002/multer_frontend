import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State to hold error message
const navi=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send login credentials to backend
      const response = await axios.post(`http://localhost:5000/api/login`, {
        email,
        password,  
      }).then(()=>{
        navi('/registeform')
      })

      // Display success message returned from backend
      alert(response.data.message);
    } catch (error) {
      // Display error message returned from backend
      setErrorMessage(error.response.data.error || 'An error occurred during login.');
    }
  };

  const register=()=>{
    navi('/registerform')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>
      <button onClick={register}>registerform</button>
{/* 
      <div>
            <textarea id='input' value={inp} onChange={(e) => setInp(e.target.value)} />
            <button onClick={speak}>Speak</button>
          </div> */}

      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
}

export default LoginForm;
