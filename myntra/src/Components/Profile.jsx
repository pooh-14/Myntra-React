import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import '../Components/CSS Files/Profile.css'

const Profile = () => {


  const { state, Login } = useContext(AuthContext);
  const [proo, setproo] = useState(false);
  const [userData, setUserData] = useState({});
  const router = useNavigate();


  const proopen = () => {
    setproo(true);
  };

  const proclose = () => {
    setproo(false);
  };

  //   console.log(userData, "userData");

  useEffect(() => {
    if (state) {
      setUserData(state?.user);
    }
  }, [state]);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("Current-user"));
    if (!currentUser) {
      router("/login");
    }
    const allUsers = JSON.parse(localStorage.getItem("Users"));
    if (currentUser && allUsers) {
      for (var i = 0; i < allUsers.length; i++) {
        if (
          allUsers[i].email == currentUser.email &&
          allUsers[i].password == currentUser.password
        ) {
          setUserData(allUsers[i]);
        }
      }
    }
  }, []);

  function handleChange(event) {
    setUserData({...userData,[event.target.name]:event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const currentUser = JSON.parse(localStorage.getItem("Current-user"));
    const allUsers = JSON.parse(localStorage.getItem("Users"));
    for (var i = 0; i < allUsers.length; i++) {
      if (
        allUsers[i].email === currentUser?.email &&
        allUsers[i].password === currentUser?.password
      ) {
        allUsers[i].name = userData?.name;
        allUsers[i].password = userData?.password;
        currentUser.password = userData?.password;
        currentUser.name = userData?.name;
      }
    }
    Login(currentUser);
    localStorage.setItem("Current-user", JSON.stringify(currentUser));
    localStorage.setItem("Users", JSON.stringify(allUsers));
    setUserData({});
    toast.success("Profile updated.");
    router("/profile");
  }



  return (
    <div id="proscreen">

{proo ? (
        <div id="propop">
          <div>
            <i onClick={proclose} class="fa-solid fa-xmark fa-xl"></i>
            <form onSubmit={handleSubmit}>
              <label>Change Name :</label>
              <br />
              <input
                type="text"
                value={userData.name}
                name="name"
                onChange={handleChange}
              />
              <br />
              <label>Change Password :</label>
              <br />
              <input
                type="password"
                value={userData.password}
                name="password"
                onChange={handleChange}
              />
              <br />
              <button onMouseLeave={proclose}>Update Profile</button>
            </form>
          </div>
        </div>
      ) : null}
    
    <div id="why">
      <div id="probody">
        <div>
          <h4>Account</h4>
          <p>{userData.name}</p>
        </div>
        <div id="content">
          <div id="left">
            <div>
              <span>Overview</span>
            </div>
            <div>
              <span>ORDERS</span>
              <p>Orders & Returns</p>
            </div>
            <div>
              <span>CREDITS</span>
              <p>Coupons</p>
              <p>Myntra Credit</p>
              <p>MynCash</p>
            </div>
            <div>
              <span>ACCOUNT</span>
              <p>Profile</p>
              <p>Saved Cards</p>
              <p>Saved VPA</p>
              <p>Addresses</p>
              <p>Myntra Insider</p>
            </div>
            <div>
              <span>LEGAL</span>
              <p>Terms of Use</p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div id="right">
            <div id="pro">
              <div>
                <h2>Profile Details</h2>
              </div>
              <div>
                <div id="this">
                  <p>Full Name</p>
                  <p>Mobile Number</p>
                  <p>Email ID</p>
                  <p>Gender</p>
                  <p>Date of Birth</p>
                  <p>Location</p>
                  <p>Alternate Mobile</p>
                  <p>Hint Name</p>
                </div>
                <div id="that">
                  <p>{userData.name}</p>
                  <p>9930210743</p>
                  <p>poojavetal14@gmail.com</p>
                  <p>FEMALE</p>
                  <p>14.03.1999</p>
                  <p>Kharghar, Navi Mumbai</p>
                  <p>-not added-</p>
                  <p>-not added-</p>
                </div>
              </div>
              <div>
                  <button onClick={proopen}>EDIT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Profile