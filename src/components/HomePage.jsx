import React, { useState, useEffect } from "react";
import NavBar from "./common/NavBar";
import Section from "./common/Section";
import axios  from 'axios';
import { APIUrl } from './services/services';


function HomePage(props) {

  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function getProducts() {
      const {data: myProducts} = await axios.get(`${APIUrl}/api/products/`);
      setProducts(myProducts);
      myProducts[0].imageClass = "model-s";
      myProducts[1].imageClass = "model-y";
      myProducts[2].imageClass = "model-x";
      setProducts(myProducts);
    }
    getProducts();
  }, [])

  return (
    <div>
    <NavBar />
    {products && <>
      <Section product={products[0]} />
      <Section product={products[1]} />
      <Section product={products[2]} />
    </>
    }
    </div>
  );
}

export default HomePage;
