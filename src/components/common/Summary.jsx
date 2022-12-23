import React, { useState, useEffect } from "react";


function Summary({ summary, getSummary }) {

  useEffect(() => {
    getSummary();
  }, [])

  return (
    <>
      <div className="summary">
        <div className="summary-cata">
          <p className="summary-text summary-head">Order Summary</p>
          <div className="summary-item">
            <p className="summary-text">Subtotal</p>
            <p className="summary-text">${summary.total}</p>
          </div>
          <hr />
          <div className="summary-item">
            <p className="summary-text">Shipping Estimate</p>
            <p className="summary-text">${summary.total === 0 ? "0" : "500"}</p>
          </div>
          <hr />
          <div className="summary-item">
            <p className="summary-text">Tax estimate</p>
            <p className="summary-text">${summary.total === 0 ? "0" : "50"}</p>
          </div>
          <hr />
          <div className="summary-item">
            <p className="summary-text">Order total</p>
            <p className="summary-text">${summary.total === 0 ? summary.total : summary.total + 500 + 50}</p>
          </div>
          <button className="btnprimary btnblock margin-left-right" href="#">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default Summary;
