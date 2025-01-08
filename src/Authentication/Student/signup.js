import React, { useState } from "react";
import "./signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    skills: "",
    designation: "",
    dob: "",
    passingYear: "",
    qualification: "",
    stream: "",
    file: null,
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="signup-container">
      <h2>Create Your Profile</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="firstName">First Name *</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name *</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password *</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password *</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="skills">Enter Skills</label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="designation">Designation</label>
          <input
            type="text"
            id="designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date Of Birth</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="passingYear">Passing Year</label>
          <input
            type="date"
            id="passingYear"
            name="passingYear"
            value={formData.passingYear}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="qualification">Highest Qualification</label>
          <input
            type="text"
            id="qualification"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="stream">Stream</label>
          <input
            type="text"
            id="stream"
            name="stream"
            value={formData.stream}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="file">Upload Resume (PDF only)</label>
          <input
            type="file"
            id="file"
            name="file"
            accept=".pdf"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            required
          />
          <label htmlFor="terms">I accept terms & conditions</label>
        </div>
        <div className="form-group">
          <button type="submit">Register</button>
        </div>
      </form>
      <p>If you have account , please <a href="./login">Login</a></p>
    </div>
  );
};

export default Signup;
