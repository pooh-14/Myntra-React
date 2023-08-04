import React, { useEffect, useState } from "react";
import "../Components/CSS Files/AllProducts.css";
import { useNavigate } from "react-router-dom";

const AllProducts = () => {

  const [isProductsExist, setIsProductsExist] = useState(false);
    const [products, setProducts] = useState();
    const router = useNavigate()

    useEffect(() => {
        const productsFromDb = JSON.parse(localStorage.getItem("Products"))
        if (productsFromDb) {
            setIsProductsExist(true);
            setProducts(productsFromDb)
        } else {
            setIsProductsExist(false)
        }
    }, [])

    const redirect = (id) => {
        console.log(id, "-id");
        router(`/singleproduct/${id}`)
    }

  return (
    <div>
    <div id="menzo">
      <div id="allone">
        <p></p>
        <p></p>
      </div>
      <div id="alltwo">
        <div>
          <span>Sort by:</span>
          <span>
            <select>
              <option>Popularity</option>
              <option>Price High to Low</option>
              <option>Price low to High</option>
              <option>New Arrivals</option>
              <option>Discounts</option>
            </select>
            <i class="fa-solid fa-arrow-down-wide-short"></i>
          </span>
        </div>
        <span>
          <img onClick={()=> router('/addproduct')} src="https://www.tatacliq.com/src/plp/components/img/list.svg" />
        </span>
      </div>
      <div id="allbody">
        <div id="allleft">
          <div>
            <div>
              <h4>CATEGORIES</h4>
              <input type="checkbox" />
              <lable>Tshirts</lable>
              <span className="textcolor">(93124)</span>
              <br />
              <input type="checkbox" />
              <lable>Lounge Tshirts</lable>
              <span className="textcolor">(93124)</span>
            </div>
            <div>
              <h4>BRAND</h4>
              <input type="checkbox" />
              <lable>Rodsters</lable>
              <span className="textcolor">(3124)</span>
              <br />
              <input type="checkbox" />
              <lable>Friskers</lable>
              <span className="textcolor">(3124)</span>
              <br />
              <input type="checkbox" />
              <lable>Tommy Hilfiger</lable>
              <span className="textcolor">(3124)</span>
              <br />
              <input type="checkbox" />
              <lable>U.S. Polo Assn.</lable>
              <span className="textcolor">(3124)</span>
              <br />
              <input type="checkbox" />
              <lable>HRX by Hrithik Roshan</lable>
              <span className="textcolor">(3124)</span>
              <br />
              <input type="checkbox" />
              <lable>Jack & Jones</lable>
              <span className="textcolor">(3124)</span>
              <br />
              <input type="checkbox" />
              <lable>WROGN</lable>
              <span className="textcolor">(3124)</span>
              <br />
              <input type="checkbox" />
              <lable>Puma</lable>
              <span className="textcolor">(3124)</span>
              <br />
              <lable className="pink">+ 624 more</lable>
            </div>
            <div>
              <h4>PRICE</h4>
              <input type="checkbox" />
              <lable>Rs.134 to Rs. 1403</lable>
              <span className="textcolor">(9164)</span>
              <br />
              <input type="checkbox" />
              <lable>Rs. 1403 to Rs. 2719</lable>
              <span className="textcolor">(9164)</span>
              <br />
              <input type="checkbox" />
              <lable>Rs. 2719 to Rs. 4035</lable>
              <span className="textcolor">(9164)</span>
              <br />
              <input type="checkbox" />
              <lable>Rs. 4035 to Rs. 5351</lable>
              <span className="textcolor">(9164)</span>
              <br />
            </div>
            <div>
              <div>
                <h4>COLOR</h4>
              </div>
              <div>
                <input type="checkbox" />
                <p className="bgcl" id="b"></p>
                <lable>Black</lable>
                <p className="textcolor">(124)</p>
                <br />
              </div>
              <div>
                <input type="checkbox" />
                <p className="bgcl" id="bl"></p>
                <lable>Blue</lable>
                <p className="textcolor">(124)</p>
                <br />
              </div>
              <div>
                <input type="checkbox" />
                <p className="bgcl" id="w"></p>
                <lable>White</lable>
                <p className="textcolor">(124)</p>
                <br />
              </div>
              <div>
                <input type="checkbox" />
                <p className="bgcl" id="nb"></p>
                <lable>Navy Blue</lable>
                <p className="textcolor">(124)</p>
                <br />
              </div>
              <div>
                <input type="checkbox" />
                <p className="bgcl" id="g"></p>
                <lable>Green</lable>
                <p className="textcolor">(124)</p>
                <br />
              </div>
              <div>
                <input type="checkbox" />
                <p className="bgcl" id="gy"></p>
                <lable>Grey</lable>
                <p className="textcolor">(124)</p>
                <br />
              </div>
              <div>
                <input type="checkbox" />
                <p className="bgcl" id="r"></p>
                <lable>Red</lable>
                <p className="textcolor">(124)</p>
                <br />
              </div>
              <lable className="pink">+ 39 more</lable>
            </div>
            <div>
              <h4>DISCOUNT RANGE</h4>
              <input type="checkbox" />
              <lable>10% and above</lable>
              <span className="textcolor">(764)</span>
              <br />
              <input type="checkbox" />
              <lable>20% and above</lable>
              <span className="textcolor">(764)</span>
              <br />
              <input type="checkbox" />
              <lable>30% and above</lable>
              <span className="textcolor">(764)</span>
              <br />
              <input type="checkbox" />
              <lable>40% and above</lable>
              <span className="textcolor">(764)</span>
              <br />
              <input type="checkbox" />
              <lable>50% and above</lable>
              <span className="textcolor">(764)</span>
              <br />
              <input type="checkbox" />
              <lable>60% and above</lable>
              <span className="textcolor">(764)</span>
              <br />
              <input type="checkbox" />
              <lable>70% and above</lable>
              <span className="textcolor">(764)</span>
              <br />
              <input type="checkbox" />
              <lable>80% and above</lable>
              <span className="textcolor">(764)</span>
            </div>
          </div>
        </div>
         

        {!isProductsExist ? <div style={{ width: "15%", margin: 'auto', marginTop:'300px', marginBottom:'300px' }}>
                <h1>No products!</h1>
                </div>
                :
        <div id="allright">
          {products.map((pro) => (
            <div onClick={() => redirect(pro.id)} >
              <div>
                <img src={pro.image} />
              </div>

              <div>
                <p>{pro.name}</p>
                <p></p>
                <span>₹{pro.price}</span>
                <span><s></s></span>

                <div>
                  <span>
                  <p>4.9</p>
                  <i class="fa-solid fa-star fa-xs"></i>
                </span>
                  <span>5</span>
                </div>

                <p></p>
              </div>

              <div id="like">
                <img
                  style={{
                    width: "30px",
                    height: "30px",
                    border: "1px solid white",
                    borderRadius: "7px",
                    backgroundColor: "rgba(254,254,254,0.9)",
                  }}
                  src="https://www.tatacliq.com/src/general/components/img/WL1.svg"
                />
              </div>
              <div id="similar">
                <img
                  style={{
                    width: "30px",
                    height: "30px",
                    border: "1px solid white",
                    borderRadius: "7px",
                    backgroundColor: "rgba(254,254,254,0.9)",
                  }}
                  src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg"
                />
              </div>
            </div>
          ))}
        </div>}
      </div>
    </div>
    </div>
    
  );
};

export default AllProducts;
