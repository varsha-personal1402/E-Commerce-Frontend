import React from "react";

const Login = () => {
  return (
    <div>
      <div className="auth-container">
        <h2>Login</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="btn">Login</button>
      </div>
    </div>
  );
};

export default Login;
