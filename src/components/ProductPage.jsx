import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./common/NavBar";
import Product from "./common/Product";
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { APIUrl } from "./services/services";


function ProductPage(props) {
  let userInfo
  try {
    userInfo = jwtDecode(localStorage.getItem("token"))
  } catch(ex) {}

  const [user, setUser] = useState({
    header: localStorage.getItem("token"),
    ...userInfo
  });
  const [product, setProduct] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    async function getProduct() {
      const {data: myProduct} = await axios.get(`${APIUrl}/api/products/` + id);
      if(myProduct.product_id === 1) myProduct.imageClass = "model-x";
      if(myProduct.product_id === 2) myProduct.imageClass = "model-y";
      if(myProduct.product_id === 3) myProduct.imageClass = "model-s";
      setProduct(myProduct)
    }    
    getProduct();
  }, [id])

  return (
    <>
      <NavBar />
      {product && <>
        <Product product={product} user={user} />
      </>}
    </>
  );
}

export default ProductPage;
