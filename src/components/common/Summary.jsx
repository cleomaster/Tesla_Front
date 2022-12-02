import React from "react";

function Summary(props) {
  return (
    <>
      <div class="summary">
        <div class="summary-cata">
          <p class="summary-text summary-head">Order Summary</p>
          <div class="summary-item">
            <p class="summary-text">Subtotal</p>
            <p class="summary-text">$100</p>
          </div>
          <hr />
          <div class="summary-item">
            <p class="summary-text">Shipping Estimate</p>
            <p class="summary-text">$500</p>
          </div>
          <hr />
          <div class="summary-item">
            <p class="summary-text">Tax estimate</p>
            <p class="summary-text">$50</p>
          </div>
          <hr />
          <div class="summary-item">
            <p class="summary-text">Order total</p>
            <p class="summary-text">$6000</p>
          </div>
          <button class="btnprimary btnblock margin-left-right" href="#">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default Summary;
