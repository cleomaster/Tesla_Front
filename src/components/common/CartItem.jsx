import React from "react";

function CartItem({ product, removeItem }) {

  function displayProductName() {
    if(product.product_id === 1) {
      return "Model X";
    } else if(product.product_id === 2) {
      return "Model Y";
    } else if(product.product_id === 3) {
      return "Model S";
    }
  }

  return (
    <>
      <div className="cart-item">
        <div className="cart-item-pic">
          <div className={"cart-img " + product.imageClass} src="assets/model-3.jpg" alt=""></div>
        </div>
        <div className="cart-item-info">
          <div className="cart-item-info-flex">
            <h3 className="cart-item-info-text cname">{displayProductName()}</h3>
            <p className="cart-item-info-text cpara">
              Tesla All-Wheel Drive has two independent motors for improved
              redundancy, each with only one moving ...
            </p>
            <p className="cart-item-info-text cpara">${product.price}</p>
            <p className="cart-item-info-text ready"><b>Quantity: {product.quantity}</b></p>
          </div>
          <div>
            <button onClick={() => removeItem(product.product_id)} style={{background: "red", paddingLeft: "5px", paddingRight: "5px", cursor: "pointer" }}>X</button>
          </div>
        </div>
      </div>
      <br />
      <hr />
      <br />
    </>
  );
}

export default CartItem;
