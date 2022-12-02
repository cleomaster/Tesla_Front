import React from "react";

function section({ data }) {
  return (
    <section className={"product " + data.imageclassName}>
      <div className="product-info">
        <h1>{data.name}</h1>
        <p>Order Online For Touchless Delivery</p>
      </div>
      <div>
        <div className="button-group">
          <div className="button-dark-rounded">
            <a href="model3.html" className="dark">
              CUSTOM ORDER
            </a>
          </div>
          <div className="button-light-rounded">
            <a className="light" href="cart.html">
              EXISTING INVENTORY
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default section;
