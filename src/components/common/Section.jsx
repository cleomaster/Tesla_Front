import React, { useEffect } from "react";
import { Link } from 'react-router-dom';


function Section({ product }) {

  useEffect(() => {
    console.log(product.name);
  }, [])

  return (
    <section className={"product " + product.imageClass}>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p>Order Online For Touchless Delivery</p>
      </div>
      <div>
        <div className="button-group">
          <div className="button-dark-rounded">
            <Link to={`/product/${product.product_id}`} className="dark">
              CUSTOM ORDER
            </Link>
          </div>
          {/* <div className="button-light-rounded">
            <a className="light" href="cart.html">
              EXISTING INVENTORY
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Section;
