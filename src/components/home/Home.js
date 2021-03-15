import React, { useState } from "react";
import "./home.css";
import HomeTopPostsSection from "./HomeTopPostsSection";
import HomeBackgroundSection from "./HomeBackgroundSection";
import Main from "./Main";
import Posts from "./Posts";

const Home = () => {
  const [categories, setCategories] = useState([
    "reactjs",
    "nodejs",
    "javascript",
    "typescript",
    "database",
    "other",
  ]);
  return (
    <div>
      <div className="container-fluid home">
        <Main />
        <div className="row mt-5">
          <div className="col-sm">
            <HomeTopPostsSection />
          </div>
        </div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-sm">
              <HomeBackgroundSection />
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-sm">
            {categories.map((category, index) => {
              return <Posts key={index} category={category} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
