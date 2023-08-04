import React, { useContext, useEffect, useState } from 'react'
import '../Components/CSS Files/SingleProduct.css'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../Context/AuthContext';

const SingleProducts = () => {

 const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [currentUserEmail, setCurrentUserEmail] = useState("");
  const [products, setProducts] = useState([]);
  const [single, setSingle] = useState({});
  const { id } = useParams();
  const router = useNavigate();
  const { state } = useContext(AuthContext);
  const [isProductExist, setIsProductExist] = useState(false);
  const [userData, setUserData] = useState({});
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    image: "",
    category: "Other",
  });
  const [allowUpdate, setAllowUpdate] = useState(false);

  useEffect(() => {
    if (state) {
      setUserData(state.user);
    }
  }, [state]);

  useEffect(() => {
    const productFromDB = JSON.parse(localStorage.getItem("Products"));
    if (productFromDB) {
      setIsProductExist(true);
      setProducts(productFromDB);
    } else {
      setIsProductExist(false);
    }
  }, []);

  useEffect(() => {
    if (isProductExist) {
      if (id && products.length) {
        const res = products.find((pro) => pro.id == id);
        setSingle(res);
      }
    }
  }, [id, products]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("Current-user"));
    // console.log(user, "uzer");
    if (user) {
      setIsUserLoggedIn(true);
      setCurrentUserEmail(user.email);
    }
  }, []);

  function addCart() {
    if (isUserLoggedIn) {
      const users = JSON.parse(localStorage.getItem("Users"));
      for (let i = 0; i < users.length; i++) {
        if (users[i].email === currentUserEmail) {
          users[i].cart.push(single);
          localStorage.setItem("Users", JSON.stringify(users));
          break;
        }
      }
      toast.success("Product successfully added to cart!");
      router("/cart");
    } else {
      toast.error("You can't add a product before logging in!");
    }
  }







  function uptoDate() {
    setAllowUpdate(true);
  }

  function closeUpate() {
    setAllowUpdate(false);
  }

  function handleChange(e) {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  }
  function selectRole(e) {
    setProductData({ ...productData, ["category"]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const allProduct = JSON.parse(localStorage.getItem("Products"));
    for (let i = 0; i < allProduct.length; i++) {
      if (allProduct[i].id === id) {
        allProduct[i].image = productData.image;
        allProduct[i].name = productData.name;
        allProduct[i].price = productData.price;
        allProduct[i].category = productData.category;
        single.image = productData.image;
        single.name = productData.name;
        single.price = productData.price;
        single.category = productData.category;

        localStorage.setItem("Products", JSON.stringify(allProduct));
        setProductData({ name: "", price: "", image: "", category: "Other" });
        toast.success("Product Updated!");
      }
    }
  }


  return (  
    <div>
        {allowUpdate ? (
        <div id='uppop'>
          <div >
          <i  class="fa-solid fa-xmark fa-xl"></i>
            <form onSubmit={handleSubmit}>
                <label>Product Name:</label>
                <br />
                <input
                  type="text"
                  name="name"
                  value={productData.name}
                  onChange={handleChange}
                />
                <br />

                <label>Product Price :</label>
                <br />
                <input
                  type="number"
                  name="price"
                  value={productData.price}
                  onChange={handleChange}
                />
                <br />
                <label>Product Category :</label>
                <br />
                <select
                  onChange={selectRole}
                >
                  <option value="Other">Other</option>
                  <option value="Mens">Mens</option>
                  <option value="Womens">Womens</option>
                  <option value="Kids">Kids</option>
                  <option value="Electronics">Electronics</option>
                </select>
                <br />
                <label>Product Image :</label>
                <br />
                <input
                  type="text"
                  name="image"
                  value={productData.image}
                  onChange={handleChange}
                />
                <br />
                <button onMouseLeave={closeUpate}>Update Product</button>
            </form>
          </div>
        </div>
       ) : null} 

<div>
     <div id="bodi">
       <div>
        {/* <p> Home / Clothing / Women Clothing / Dresses / <b>Berrylush Dresses - More By Berrylush</b></p> */}
       </div>
       <div id="proinfo">
        <div>
            <div>
                <img
                    src={single.image} />
            </div>
            <div>
                <img
                    src={single.image} />
            </div>
            <div>
                <img
                    src={single.image} />
            </div>
            <div>
                <img
                    src={single.image}/>
            </div>
            <div>
                <img
                    src={single.image}/>
            </div>
            <div>  
                <img
                    src={single.image} />
            </div>
        </div>


        <div id="toright">
            <div>
                <h2>{single.name}</h2>
                <p>{single.description}</p>
            </div>
            <div>
                <h2>₹{single.price}</h2>
                <p>inclusive of all taxes</p>
                <h4> SELECT SIZE  </h4>
                <div>
                    <div>
                        <p>XS</p>
                    </div>
                    <div>
                        <p>S</p>
                    </div>
                    <div>
                        <p>M</p>
                    </div>
                    <div>
                        <p>L</p>
                    </div>
                    <div>
                        <p>XL</p>
                    </div>
                </div>
                <div id='flex'>
                    <div>
                    <i class="fa-solid fa-share-nodes fa-xl"></i>
                    <i class="fa-regular fa-heart fa-xl"></i>
                    </div>
                    {userData?.role === "Seller" ?
                    <div>
                        <input onClick={uptoDate} type="submit" value="UPDATE PRODUCT" />
                    </div>
                    :
                    <div>
                        <input onClick={addCart} type="submit" value="ADD TO BAG" />
                    </div>
                    }

                    
                </div>
            </div>
            <div id="delivery">
                <div>
                    <h4><b>DELIVERY OPTIONS</b></h4>
                </div>
                <div>
                    <input placeholder="Enter pincode" />
                </div>
                <div>
                    <p style={{fontSize: "smaller", marginBottom: "20px",}}>Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
                    <p>100% Original Products</p>
                    <p> Pay on delivery might be available</p>
                    <p>Easy 14 days returns and exchanges</p>
                    <p>  Try & Buy might be available</p>

                </div>
                <div style={{marginTop: "20px"}}>
                    <h4><b>BEST OFFERS</b></h4>
                    <p><b>Best Price:Rs. 1374</b></p>
                    <ul>
                        <li>Applicable on: Purchase of 2 or more items</li>
                        <li>Coupon code: FWD15</li>
                        <li>Coupon Discount: 15% off (Your total saving: Rs. 528)</li>
                    </ul>
                    <p style={{color: "rgb(243, 4, 167)"}}><b>View Eligible Products</b></p>
                    <p><b>Up To Rs 500 Cashback on CRED pay transactions</b></p>
                    <ul>
                        <li>Min Spend Rs 1,000. Available only on Android Devices.</li>
                    </ul>
                    <p style={{color: "rgb(243, 4, 167)"}}><b>Terms and Conditions</b></p>
                    <p><b>EMI option available</b></p>
                    <ul>
                        <li>EMI starting from Rs.76/month</li>
                    </ul>
                    <p style={{color: "rgb(243, 4, 167)"}}><b>View Plan</b></p>
                </div>
            </div>
            <div>
                <div id="details">
                    <h4><b>PRODUCT DETAILS</b></h4>
                    <p>Dress up or down with this chic dress. Tailored with an alluring self-design print and sweetheart neck, this dress beautifully stands apart.</p>
                    <p>Classic white shade</p>
                    <p>Chic self-design print</p>
                    <p> Sweetheart neck</p>
                    <p>  Short puff sleeves</p>
                    <p>  Viscose rayon, machine wash</p>
                    <p style={{marginTop: "15px"}}><b>Trend Alert</b></p>
                    <p>A corset is a tight"-fitting piece of undergarment or clothing that provides compression around your midsection. It offers support as well as a flattering silhouette.</p>
                    <p style={{marginTop: "15px"}}><b>Size & Fit</b></p>
                    <p>The model (height 5'8) is wearing a size S</p>
                    <p style={{marginTop: "15px"}}><b>Material & Care</b></p>
                    <p>Visose Rayon</p>
                    <p>Machine Wash</p>
                    <p><b>Specifications</b></p>
                    <div id="speci">
                        <div>
                            <p style={{fontSize: "12px",color: "grey"}}>Shape</p>
                            <p>Bodycon</p>
                        </div>
                        <div>
                            <p style={{fontSize: "12px",color: "grey"}}>Neck</p>
                            <p>Sweetheart Neck</p>
                        </div>
                        <div>
                            <p style={{fontSize: "12px",color: "grey"}}>Length</p>
                            <p>Mini</p>
                        </div>
                        <div>
                            <p style={{fontSize: "12px",color: "grey"}}>Print or Pattern</p>
                            <p>Self Design</p>
                        </div>
                        <div>
                            <p style={{fontSize: "12px",color: "grey"}}>Sleeve Length</p>
                            <p>Short Sleeves</p>
                        </div>
                        <div>
                            <p style={{fontSize: "12px",color: "grey"}}>Sleeve Styling</p>
                            <p>Puff Sleeves</p>
                        </div>
                        <div>
                            <p style={{fontSize: "12px",color: "grey"}}>Ocassion</p>
                            <p>Casual</p>
                        </div>
                        <div>
                            <p style={{fontSize: "12px",color: "grey"}}>Knit or Woven</p>
                            <p>Woven</p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
</div>
    </div>

    </div>




    
   
  )
}

export default SingleProducts