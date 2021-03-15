import React from "react";
import bg from "./../../images/bg.jpg";
import mernBg from "./../../images/mern-bg.jpg";
const Main = () => {
  return (
    <div className="row">
      <div className="col-sm-5 homeSection1">A Community To Share And Learn All About MERN & Other Technologies</div>
      <div className="col-sm-7 homeSection2"  style={{
        backgroundImage: `url(${mernBg})`
      }}></div>
    </div>
  );
};

export default Main;
