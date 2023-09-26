import React, { useState } from "react";
import Add from "../img/addAvatar.png";
// const fs = require('fs');
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import image from "../images/ay.jpg";
// import ;
const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
    
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
    const handleNameChange = (e) => {
      setName(e.target.value);
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
          <h3 className="registerlink">Don't have an account yet? <Link to = '/login'>Login here!</Link></h3>
        </div>
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="user-box">
              <input type="text" value={name} onChange={handleNameChange} name="" required="" />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input type="text" value={email} onChange={handleEmailChange} name="" required="" />
              <label>email</label>
            </div>
            <div className="user-box">
              <input type="password" value={password}
                onChange={handlePasswordChange} name="" required="" />
              <label>Password</label>
            </div>
            <input required style={{ display: "none" }} type="file" id="file" />
            <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button disabled={loading}>Sign up</button>
          {loading && "Uploading and compressing the image please wait..."}
          {err && <span>Something went wrong</span>}

            {/* <button onClick={handleSubmit}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </button> */}
            
          </form>
        </div>
      </div>
  );
};

export default Register;
