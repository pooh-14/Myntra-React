import React, { useContext, useEffect, useState } from "react";
import "../Components/CSS Files/Login.css";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });

  const { state, dispatch } = useContext(AuthContext);
  const router = useNavigate();

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (userData.email && userData.password) {
      const response = await axios.post("http://localhost:8001/login", {
        userData,
      });
      if (response.data.success) {
        dispatch({
          type: "LOGIN",
          payload: response.data.user,
        });
        localStorage.setItem("token", JSON.stringify(response.data.token));
        setUserData({ email: "", password: "" });
        router("/");
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } else {
      toast.error("All fields are mandtory.");
    }
  };
  // console.log(userData, "userData")

  useEffect(() => {
    if (state?.user?.name) {
      router("/");
    }
  }, [state]);

  return (
    <div id="screen">
      <div id="body">
        <div id="signin">
          <div>
            <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/c2be095d-a4fb-4981-bdad-9d69ea189da31675792659902-offer-banner-500-600x240-code-_-MYNTRA200.jpg" />
          </div>
          <div>
            <p>
              <b>Login </b>
            </p>
          </div>
          <div id="logform">
            <form onSubmit={handleSubmit}>
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
              <button>LOGIN</button>
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
            <p onClick={() => router("/register")}>Register</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
