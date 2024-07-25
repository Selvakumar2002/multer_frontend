import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); 
const navi=useNavigate()

  const [inp, setInp] = useState("");

  const speak = () => {
    const text = new SpeechSynthesisUtterance(inp);
    speechSynthesis.speak(text);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!firstName || !lastName || !email || !password || !mobileNumber) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!validatePassword(password)) {
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }

    if (!validateMobileNumber(mobileNumber)) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    try {
      // Send registration data to backend
      const response = await axios.post(`http://localhost:5000/api/register`, {
        firstName,
        lastName,
        email,
        password,
        mobileNumber,
      }).then(()=>{
        navi('/loginform')
      })

      // Display success message returned from backend
      setErrorMessage(response.data.message);
    } catch (error) {
      // Display error message returned from backend
      setErrorMessage(error.response.data.error || 'An error occurred during registration.');
    }
  };

  // const login=()=>{
  //   navi('/login')
  // }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

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

      <label htmlFor="mobileNumber">Mobile Number:</label>
      <input
        type="tel"
        id="mobileNumber"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
      />

      <button type="submit">Register</button>
    


      {errorMessage && <p>{errorMessage}</p>}

      <div>
<textarea id='input' value={inp} onChange={(e) => setInp(e.target.value)} />
<button onClick={speak}>Speak</button>
</div>
    </form>
  );
}

// Validation functions
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validatePassword(password) {
  // Password must be at least 6 characters long
  return password.length >= 6;
}

function validateMobileNumber(mobileNumber) {
  // Mobile number must be 10 digits long
  const regex = /^\d{10}$/;
  return regex.test(mobileNumber);
}

export default RegisterForm;
