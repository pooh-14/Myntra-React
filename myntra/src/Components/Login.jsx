import React, { useContext, useState } from "react";
import '../Components/CSS Files/Login.css'
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const { state, Login } = useContext(AuthContext);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    role: "",
  });
  const [logg, setlogg] = useState(false);
  const router= useNavigate();

  const logopen = () => {
    setlogg(true);
  };

  const logclose = () => {
    setlogg(false);
  };


  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userData.email && userData.password) {
      var flag = false;
      const allUsers = JSON.parse(localStorage.getItem("Users"));
      for (var i = 0; i < allUsers.length; i++) {
        if (
          allUsers[i].email == userData.email &&
          allUsers[i].password == userData.password
        ) {
          localStorage.setItem("Current-user", JSON.stringify(allUsers[i]));
          Login(allUsers[i]);
          setUserData({ email: "", password: "", role: "" });
          toast.success("Login Successfull!");
          router("/");
          flag = true;
          break;
        }
      }
      if (flag == false) {
        toast.error("Please Check your email & password.");
      }
    } else {
      toast.error("Please fill the all fields.");
    }
  };

  function newUser() {
    router("/register");
  }


  return (
  <div id="screen">
  <div id="body">
    <div id="signin">
      <div>
        <img
          src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/c2be095d-a4fb-4981-bdad-9d69ea189da31675792659902-offer-banner-500-600x240-code-_-MYNTRA200.jpg"
        />
      </div>
      <div>
        <p><b>Login </b></p>
      </div>
      <div id='logform'>
      <form 
      onSubmit={handleSubmit}
      >
                  <label>Enter your Email ID :</label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                  />
                  <br />
                  <label>Enter your Password :</label>
                  <br />
                  <input
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                  />
                  <br />
                  <button
                   onMouseLeave={logclose}
                   >LOGIN</button>
                </form>
      </div>
      <div>
        <p>By continuing, I agree to the </p>
        <p>Terms of Use </p>
        <p>& </p>
        <p>Privacy Policy</p>
      </div>
      
      <div>
        <p>Having trouble logging in?</p>
        <p onClick={()=>router('/register')}>Register</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default Login