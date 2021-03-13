import React from "react";
import bg from "./../../images/bg.jpg";
const Main = () => {
  return (
    <div
      className="row"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "100%",
        filter: "brightness(50%)"
      }}
    >
      <div className="col-sm homeSection1">Main Heading 1</div>
      <div className="col-sm homeSection2">Bg Image</div>
    </div>
  );
};

export default Main;
