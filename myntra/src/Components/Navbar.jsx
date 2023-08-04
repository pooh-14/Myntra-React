import React, { useContext, useEffect, useState } from "react";
import "../Components/CSS Files/Home.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {

  const { state, Logout } = useContext(AuthContext);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    role: "",
  });
  const [dropdown, setDropdown] = useState(false);
  const router = useNavigate();

  
  useEffect(() => {
    if (state) {
      setUserData(state.user);
    }
  }, [state]);

  function down() {
    setDropdown(true);
  }

  function up() {
    setDropdown(false);
  }

  return (
    <div>
      {dropdown?
      <div onMouseLeave={up} id="myntrapop">

        {userData?.name ? (
              <div style={{ borderBottom: "1px solid grey" }}>
              <p>
                <b>Hello {userData?.name}</b>
              </p>
              <p>99******43</p>
              <button onClick={Logout}>LOGOUT</button>
            </div>
            ) : (
              <div style={{ borderBottom: "1px solid grey" }}>
          <p>
            <b>Welcome</b>
          </p>
          <p>To access account and manage orders</p>
          <button onClick={()=>router('/register')}>LOGIN/REGISTER</button>
        </div>
            )}

        <div style={{ borderBottom: "1px solid grey" }}>
          <p>Orders</p>
          <p>Wishlist</p>
          <p>Gift Cards</p>
          <p>Contact us</p>
          <p>Myntra Insider</p>
        </div>
        <div>
          <p>Myntra Credit</p>
          <p>Coupons</p>
          <p>Saved Cards</p>
          <p>Saved VPA</p>
          <p>Saved Adresses</p>
        </div>
      </div> : null}


      <div id="navbar">
        <div id="logo">
          <img
            onClick={() => router("/")}
            src="data:image/png;base64,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"
          />
        </div>
        <div id="nav">
          <p onClick={() => router("/allproducts")}>MEN</p>
          <p>WOMEN</p>
          <p>KIDS</p>
          <p style={{ color: " #282c3f" }}>HOME & LIVING</p>
          <p>BEAUTY</p>
          <p>STUDIO</p>
        </div>
        <div id="search">
          <div>
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search for products, brands and more"
            />
          </div>
        </div>
        <div id="profile">
          <div>
            <i class="fa-solid fa-user fa-lg"></i>
            <p onClick={() => router("/profile")} onMouseOver={down}>Profile {userData?.name}</p>
          </div>
          <div>
            <i class="fa-solid fa-heart fa-lg"></i>
            <p>Wishlist</p>
          </div>
          <div>
            <i class="fa-solid fa-bag-shopping fa-lg"></i>
            <p onClick={() => router("/cart")}>Bag</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
