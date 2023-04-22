import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom"
//login function


function LoginPage() {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

//handlogin

  const handleLogin = async () => {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({"username":`${username}`,
        "password":`${password}` }),
    });

    if (response.ok) {
      const { token, id } = await response.json();
      localStorage.setItem("token", token);
      localStorage.setItem("id", id);
      setError("");
       navigate("/profile");
    } else {
      const { message } = await response.json();
      setError( message);
    }
  };

  
  return (
    <div>
      <h1>Login</h1>
      <div>
        <label>name:</label><br/>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

      </div><br/>
      <div>
        <label>Pass:</label><br/>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

      </div><br/>
      <button  id='login' onClick={handleLogin}>Login</button>
      {error && <p style={{color:"white"}}>{error}</p>}
    </div>
   
  );
}

export default LoginPage;