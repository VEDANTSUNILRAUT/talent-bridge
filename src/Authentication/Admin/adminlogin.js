// adminLogin.js
import React, { useState } from "react";
import "./adminlogin.css"; // Assuming the same CSS is used for styling

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAdminSubmit = (event) => {
    event.preventDefault();
    // Here you would typically make an API call to your backend to authenticate the admin user
    console.log("Admin Email:", email);
    console.log("Admin Password:", password);
    // ... your admin authentication logic here ...
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
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <p>If you are an admin, please <a href="./adminSignup">register</a></p>
    </div>
  );
};

export default AdminLogin;
