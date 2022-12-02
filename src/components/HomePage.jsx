import React, { useState } from "react";
import NavBar from "./common/NavBar";
import Section from "./common/Section";

function HomePage(props) {
  const [data, setData] = useState({
    model_s: { name: "Model S", imageClass: "model-s" },
    model_y: { name: "Model Y", imageClass: "model-y" },
    model_x: { name: "Model X", imageClass: "model-x" },
    model_3: { name: "Model 3", imageClass: "model-3" },
  });

  return (
    <div>
      <NavBar />
      <Section data={data.model_s} />
      <Section data={data.model_y} />
      <Section data={data.model_x} />
      <Section data={data.model_3} />
    </div>
  );
}

export default HomePage;
