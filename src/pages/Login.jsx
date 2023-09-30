import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div>
      <div className="logo">
        <h1 className="name">AY Chat</h1>
        <p>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            .
          </p>
          <p>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {/* <img src={mssignin} alt="microsoft signin" /> */}
          </p>
        {/* <h2 className="welcomemsg">Welcome Back . . .</h2> */}
        <h3 className="registerlink">Don't have an account yet? <Link to = '/register'>Register here!</Link></h3>
      </div>
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input type="text" value={email} onChange={handleEmailChange} name="" required="" />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="password" value={password}
              onChange={handlePasswordChange} name="" required="" />
            <label>Password</label>
          </div>
          <button onClick={handleSubmit}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default Login;
