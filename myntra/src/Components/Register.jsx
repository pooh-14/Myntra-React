import React, { useContext, useEffect, useState } from "react";
import "../Components/CSS Files/Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-hot-toast";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "Buyer",
  });

  const { state } = useContext(AuthContext);
  const router = useNavigate();

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };
  const selectRole = (event) => {
    setUserData({ ...userData, role: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      userData.name &&
      userData.email &&
      userData.password &&
      userData.confirmPassword &&
      userData.role
    ) {
      if (userData.password === userData.confirmPassword) {
        const response = await axios.post("http://localhost:8001/register", {
          userData,
        });
        if (response.data.success) {
          setUserData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            role: "Buyer",
          });
          router("/login");
          toast.success(response.data.message);
        } else {
          toast.error(response.data.message);
        }
      } else {
        toast.error("Password and Confirm Password not Matched.");
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
              <b>Register </b>
            </p>
          </div>
          <div id="logform">
            <form onSubmit={handleSubmit}>
              <label>Select Role :</label>
              <select onChange={selectRole}>
                <option value="Buyer">Buyer</option>
                <option value="Seller">Seller</option>
              </select>
              <br />
              <label>Enter your Name :</label>
              <br />
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleChange}
              />
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
              <label>Confirm Password :</label>
              <br />
              <input
                type="password"
                name="confirmPassword"
                value={userData.confirmPassword}
                onChange={handleChange}
              />
              <br />
              <button>REGISTER</button>
            </form>
          </div>
          <div>
            <p>By continuing, I agree to the </p>
            <p>Terms of Use </p>
            <p>& </p>
            <p>Privacy Policy</p>
          </div>

          <div>
            <p>Already have a account?</p>
            <p onClick={() => router("/login")}>Login</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
