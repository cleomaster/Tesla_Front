import React from "react";
import model_s_Image from "../../assets/model-s.jpg";
import model_y_Image from "../../assets/model-y.jpg";
import model_x_Image from "../../assets/model-x.jpg";
import model_3_Image from "../../assets/model-3.jpg";
import axios from "axios";
import jwtDecode from 'jwt-decode';
import { APIUrl } from './../services/services';



function Product({ product, user }) {
  const getImage = () => {
    if (product.imageClass === "model-s") return model_s_Image;
    if (product.imageClass === "model-y") return model_y_Image;
    if (product.imageClass === "model-x") return model_x_Image;
    if (product.imageClass === "model-3") return model_3_Image;
  };

  async function addToCart() {
    let config = {
      headers: {
        "x-auth-token": user.header,
      },
    };
    await axios.post(
      `${APIUrl}/api/carts/add/` + product.product_id,
      {},
      config
    );
  }

  return (
    <div className="container">
      <div className="container-main">
        <div className="container-flex">
          <div className="left">
            <img className="img" alt="Product" src={getImage()} />
          </div>
          <div className="right">
            <h1>{product.name}</h1>
            <div className="product-detail">
              <p>{product.description}</p>
            </div>
            <p>In Stock!</p>
            <p className="product-price">Price- ${product.price}</p>
            <button
              onClick={() => {
                try {
                  jwtDecode(localStorage.getItem("token"));
                  addToCart();
                } catch (ex) {
                  alert("Please log in to continue");
                }
              }}
              className="btnprimary"
            >
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
