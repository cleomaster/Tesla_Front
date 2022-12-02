import React from "react";
import NavBar from "./common/NavBar";
import CartItem from "./common/CartItem";
import Summary from "./common/Summary";

function CartPage(props) {
  return (
    <>
      <NavBar />
      <div className="cart-main">
        <h1 className="cart-margin-bottom">Cart</h1>
        <div className="cart-container">
          <div className="cart">
            <div className="cart-items">
              <CartItem />
              <CartItem />
            </div>
            <Summary />
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
