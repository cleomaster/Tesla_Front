import React, { useState } from "react";
import NavBar from "./common/NavBar";
import Product from "./common/Product";

function ProductPage(props) {
  const [data, setData] = useState({
    model_s: { name: "Model S", imageClass: "model-s" },
    model_y: { name: "Model Y", imageClass: "model-y" },
    model_x: { name: "Model X", imageClass: "model-x" },
    model_3: { name: "Model 3", imageClass: "model-3" },
  });

  return (
    <>
      <NavBar />
      <Product data={data.model_s} />
    </>
  );
}

export default ProductPage;
