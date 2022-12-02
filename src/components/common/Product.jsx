import React from "react";
import model_s_Image from "../../assets/model-s.jpg";
import model_y_Image from "../../assets/model-y.jpg";
import model_x_Image from "../../assets/model-x.jpg";
import model_3_Image from "../../assets/model-3.jpg";

function Product({ data }) {
  const getImage = () => {
    if (data.imageClass === "model-s") return model_s_Image;
    if (data.imageClass === "model-y") return model_y_Image;
    if (data.imageClass === "model-x") return model_x_Image;
    if (data.imageClass === "model-3") return model_3_Image;
  };

  return (
    <div className="container">
      <div className="container-main">
        <div className="container-flex">
          <div className="left">
            <img className="img" alt="Product" src={getImage()} />
          </div>
          <div className="right">
            <h1>{data.name}</h1>
            <div className="product-detail">
              <p>
                With the most storage space and towing capacity of any electric
                SUV, and seating for up to seven adults, Model X delivers
                maximum utility. Front doors open and close automatically,
                Falcon Wing doors allow for easier loading and a standard
                trailer hitch lets you bring your gear anywhere you go.
              </p>
            </div>
            <p>In Stock!</p>
            <p className="product-price">Price- $20000</p>
            <button className="btnprimary" href="#">
              Add to cart
            </button>
            <br />
            <br />
            <hr />
            <br />
            <h3>Share</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
