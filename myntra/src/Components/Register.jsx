import React, { useState } from "react";
import '../Components/CSS Files/Login.css'
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {


  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Buyer",
  });

  const router = useNavigate();

  console.log(userData, "userData");
  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userData.name && userData.email && userData.password) {
      const usersArray = JSON.parse(localStorage.getItem("Users")) || [];
      const userDataObj = {
        name: userData.name,
        email: userData.email,
        password: userData.password,
        role: userData.role,
        cart: [],
      };
      usersArray.push(userDataObj);
      localStorage.setItem("Users", JSON.stringify(usersArray));
      setUserData({ name: "", email: "", password: "", role: "Buyer" });
      router("/login");
      toast.success("Registration Successfull.");
    } else {
      toast.error("Please fill the all fields.");
    }
  };

  function selectRole(event) {
    console.log(event.target.value, "- role");
    setUserData({ ...userData, ["role"]: event.target.value });
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
        <p><b>Register </b></p>
      </div>
      <div id='logform'>
      <form 
      onSubmit={handleSubmit}
      >            
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
                  <button
                   >REGISTER</button>
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
        <p onClick={()=>router('/login')}>Login</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default Register