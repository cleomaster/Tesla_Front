import React, { useState, useEffect } from "react";
import NavBar from "./common/NavBar";
import CartItem from "./common/CartItem";
import Summary from "./common/Summary";
import axios  from 'axios';
import jwtDecode from 'jwt-decode';
import { APIUrl } from "./services/services";



function CartPage(props) {

  const [user, setUser] = useState({
    header: localStorage.getItem("token"),
    ...jwtDecode(localStorage.getItem("token"))
  });

  const [products, setProducts] = useState(null);
  const [summary, setSummary] = useState({total: 0});
  
  async function getProducts() {
    let config = {
      headers: {
        "x-auth-token": user.header,
      }
    }
    let {data: myProducts} = await axios.get(`${APIUrl}/api/carts/mycart`, config);
    if(Object.keys(myProducts).length === 0) return;
    myProducts = myProducts.map((product) => {
      let css_imageClass;
      if(product.product_id === 1) css_imageClass = "model-x";
      if(product.product_id === 2) css_imageClass = "model-y";
      if(product.product_id === 3) css_imageClass = "model-s";
      return {...product, imageClass: css_imageClass}
    })
    setProducts(myProducts);
  }

  async function getSummary() {
    let config = {
      headers: {
        "x-auth-token": user.header,
      }
    }
    const { data: myTotalPrice } = await axios.get(`${APIUrl}/api/carts/total`, config);
    setSummary(myTotalPrice);
  }


  useEffect(() => {
    getProducts();
  }, [])

  const removeItem = async (itemId) => {
    let config = {
      headers: {
        "x-auth-token": user.header,
      }
    }
    let updatedProducts = products.filter((product) => product.product_id !== itemId);
    setProducts(updatedProducts);
    await axios.post(`${APIUrl}/api/carts/remove/` + itemId, {}, config);
  }


  function displayCartItems() {
    if(products !== null) {
      return products.map((product) => {
        return <CartItem removeItem={removeItem} key={product.product_id} product={product} />
      })
    } else {
      return "No items here";
    }
  }

 
  return (
    <>
      <NavBar />
      <div className="cart-main">
        <h1 className="cart-margin-bottom">Cart</h1>
        <div className="cart-container">
          <div className="cart">
            <div className="cart-items">
              {displayCartItems()}
            </div>
            <Summary getSummary={getSummary} summary={summary}  />
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
