import React from 'react'
import '../Components/CSS Files/Home.css'

const Footer = () => {
  return (
    <div id="footer">
        <div>
          <h3>ONLINE SHOPPING</h3>
          <p>Men</p>
          <p>Women</p>
          <p>Kids</p>
          <p>Home & Living</p>
          <p>Beauty</p>
          <p>Gift Cards</p>
          <p>Myntra Insider</p>
          <h3>USEFUL LINKS</h3>
          <p>Blog</p>
          <p>Career</p>
          <p>Site Map</p>
          <p>Corporate information</p>
          <p>White hat</p>
        </div>
        <div>
          <h3>CUSTOMER POLICIES</h3>
          <p>Contact Us</p>
          <p>FAQ</p>
          <p>T&C</p>
          <p>Terms of use</p>
          <p>Track orders</p>
          <p>Shipping</p>
          <p>Cancellation</p>
          <p>Return</p>
          <p>Privacy Policy</p>
          <p>Grievance Officer</p>
        </div>
        <div>
          <div>
            <h3 style={{fontSize: "12px"}}>EXPERIENCE MYNTRA APP ONLINE</h3>
            <div>
              <img
                src="./playstorelogo.png"
                style={{width: "250px", height: "60px"}}
              />
            </div>
          </div>
          <div>
            <h3 style={{fontSize: "12px"}}>KEEP IN TOUCH</h3>
            <div>
              <i class="fa-brands fa-facebook fa-xl"></i>
              <i class="fa-brands fa-twitter fa-xl"></i>
              <i class="fa-brands fa-youtube fa-xl"></i>
              <i class="fa-brands fa-instagram fa-xl"></i>
            </div>
          </div>
        </div>
        <div>
          <div style={{display: "flex", fontSize: "15px"}}>
            <div>
              <img
                src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
                style={{width: "48px", height: "40px", marginRight:" 5px"}}
              />
            </div>
            <div>
              <b>100% ORIGINAL</b> gaurantee for all products on myntra.com
            </div>
          </div>
          <div style={{display: "flex", fontSize: "15px"}}>
            <div>
              <img
                src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png"
                style={{width: "48px", height: "49px" ,marginRight: "5px"}}
              />
            </div>
            <div><b>Return within 30 days</b> of receiving your order</div>
          </div>
        </div>
      </div>
  )
}

export default Footer