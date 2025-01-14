import React, { useState } from "react";
import "./adminlogin.css";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Hardcoded admin credentials
  const adminEmail = "admin@gmail.com";
  const adminPassword = "pass1234";

  const handleAdminSubmit = (event) => {
    event.preventDefault();

    // Simple client-side authentication
    if (email === adminEmail && password === adminPassword) {
      console.log("Authentication successful");
      // Redirect to the admin dashboard or perform another action
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Admin Login</h1>
      <form className="login-form" onSubmit={handleAdminSubmit}>
        <div className="login-form-group">
          <label htmlFor="admin-email" className="login-label">
            Email:
          </label>
          <input
            type="email"
            id="admin-email"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="login-form-group">
          <label htmlFor="admin-password" className="login-label">
            Password:
          </label>
          <input
            type="password"
            id="admin-password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
