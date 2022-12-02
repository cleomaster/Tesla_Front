import React from "react";

function CartItem(props) {
  return (
    <>
      <div class="cart-item">
        <div class="cart-item-pic">
          <img class="cart-img" src="assets/model-3.jpg" alt="" />
        </div>
        <div class="cart-item-info">
          <div class="cart-item-info-flex">
            <p class="cart-item-info-text cname">Model 3</p>
            <p class="cart-item-info-text cpara">
              Tesla All-Wheel Drive has two independent motors for improved
              redundancy, each with only one moving ...
            </p>
            <p class="cart-item-info-text cpara">$41,940</p>
            <p class="cart-item-info-text ready">Ready</p>
          </div>
          <div>
            <p>X</p>
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
