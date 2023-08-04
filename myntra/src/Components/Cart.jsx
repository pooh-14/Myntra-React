import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import '../Components/CSS Files/Cart.css'
import { AuthContext } from "../Context/AuthContext";

const Cart = () => {
    const { state } = useContext(AuthContext);
  const [finalprice, setFinalPrice] = useState(0);
  const [userCart, setUserCart] = useState([]);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    role: "",
  });
  const router = useNavigate();

  // console.log(userCart, "- userCart");

  useEffect(() => {
    if (state) {
      setUserData(state.user);
    }
  }, [state]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("Current-user"));
    if (user?.email) {
      const allUsers = JSON.parse(localStorage.getItem("Users"));
      for (var i = 0; i < allUsers.length; i++) {
        if (
          allUsers[i].email == user.email &&
          allUsers[i].password == user.password
        ) {
          setUserCart(allUsers[i].cart);
          break;
        }
      }
    } else {
     toast.error("Please login to watch all cart products.");
      router("/login");
    }
  }, []);

  useEffect(() => {
    if (userCart.length) {
        var totalprice = 0;
        for (var i = 0; i < userCart.length; i++) {
            totalprice += parseInt(userCart[i].price);
        }
        setFinalPrice(totalprice)
    }
}, [userCart])


useEffect(() => {
    const user = JSON.parse(localStorage.getItem("Current-user"))
    if (user) {
        if (user?.role == "Seller") {
            toast.error("Access granted only to Buyer.")
            router('/')
        }
    } else {
        toast.error("You are not a Logged in user.")
        router('/practicelogin')
    }
}, [])


  function checkout(){
    const user = JSON.parse(localStorage.getItem("Current-user"));
    if (user?.email) {
      const allUsers = JSON.parse(localStorage.getItem("Users"));
      for (var i = 0; i < allUsers.length; i++) {
        if (
          allUsers[i].email == user.email &&
          allUsers[i].password == user.password
        ) {
          allUsers[i].cart=[];
          break;
        }
      }
      localStorage.setItem("Users",JSON.stringify(allUsers))
    }
    setFinalPrice([]);  
    setUserCart([]);
   toast.success("Your products will be delivered soon. Thankyou for shopping!")
  }
  return (
    <div id="screen">
    
      <div id="cartbody">
        <div id="cartleft">
            <div id="adcart">
                <div>
                    <p>Deliver to: <b>{userData.name},410210</b></p>
                    <p>Kharghar, Navi Mumbai</p>
                </div>
                <div>
                    <button>CHANGE ADDRESS</button>
                </div>
            </div>
            <div id="offcart">
                <p><b>Available Offers</b></p>
                <p>10% Instant Discount on ICICI Bank Credit and Debit Cards on a min spend of Rs.3,500. TCA</p>
                <select>
                    <option>Show More</option>
                    <option>Show More</option>
                </select>
            </div>
            <div id="itemscart">
                <div>
                <input type="checkbox"/> 
                <lable><b></b></lable>
                </div>
                <div>
                    <span>REMOVE</span>
                    <span>MOVE TO WISHLIST</span>
                </div>
            </div>

            {userCart &&
                  userCart.map((pro) => (
            <div id="productcart">
                <div>
                    <img src={pro.image}/>
                </div>
                <div>
                    <div>
                        <p><b>{pro.name}Saint G</b></p>
                        <p></p>
                        <p></p>
                    </div>
                    <div>
                        <span><b>Size : L</b></span>
                        <span><b></b></span>
                    </div>
                    <div>
                        <p><b>₹{pro.price}</b></p>
                        <p><b>14 days </b>return available</p>
                        <p>Delivery by <b>8 August 2023</b></p>
                    </div>
                </div>
            </div>
            ))}

            <div id="wishcart">
                <span><b>Add More From Wishlist</b></span>
            </div>
        </div>
        <div id="rightcart">
            <div id="couponcart">
                <p>COUPON</p>
                <div>
                    <p><b>Apply Coupons</b></p>
                    <button>APPLY</button>
                </div>
            </div>
            <div id="supportcart">
                <div>
                    <p>SUPPORT TRANSFORMATIVE WORK IN INDIA</p>
                </div>
                <div>
                    <input type="checkbox"/>
                    <label><b>Support Us</b></label>
                </div>
                <div>
                    <p>Rs.10</p>
                    <p>Rs.50</p>
                    <p>Rs.100</p>
                </div>
                <div>
                    <p>Know More</p>
                </div>
            </div>
            <div id="pricecart">
                <p>PRICE DETAILS(1 item)</p>
                <div>
                <div>
                    <p>Total MRP</p>
                    <p>Coupon Discount</p>
                    <p>Convenience fee</p>
                </div>
                <div>
                    <p>₹{finalprice + finalprice}</p>
                    <p>Apply Coupon</p>
                    <p>₹0</p>
                </div>
            </div>
            </div>
            <div id="amtcart">
                <div>Total Amount</div>
                <div>₹{finalprice}</div>
            </div>
            <div id="butcart">
                <button onClick={checkout}>PLACE ORDER</button>
            </div>
        </div>
      </div>
      <div id="bottom"></div>
    </div>
  )
}

export default Cart