import React from "react";

const Signup = () => {
  return (
    <div>
      <div className="auth-container">
        <h2>Create Account</h2>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="btn">Signup</button>
      </div>
    </div>
  );
};

export default Signup;
