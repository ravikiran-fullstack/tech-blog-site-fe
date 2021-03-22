import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import PostDisplay from "../postDisplay/PostDisplay";
import Loading from "./../utils/loadingIndicator/LoadingIndicator";

const Posts = ({ category }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5500/articles/category/${category}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data.slice(0, 5));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const style = {
    gridTemplateColumns: `repeat(${
      posts.length >= 5 ? "3" : posts.length < 2 ? "1" : "2"
    }, minmax(275px, 400px))`,
    height: `${posts.length < 3 ? "300px" : "600px"}`,
  };

  return (
    <div className="postsSection">
      <div className="sectionHeading">
        <h3 className="sectionTitle text-capitalize">{category} Posts</h3>
        <div className="headingUnderline"></div>
      </div>
      <div className="container">
        <div className="row">
          {loading ? (
            <div className="loadingContainer">
              <Loading />
            </div>
          ) : (
            <section className="postsGrid" style={style}>
              {posts.map((post, index) => {
                return <PostDisplay key={index} post={post} />;
              })}
            </section>
          )}
        </div>
      </div>

      <div className="sectionHeading mt-3">
        <Link
          to={`/posts/${category}`}
          type="button"
          className="btn btn-outline-secondary btnStyles"
        >
          View All Posts
        </Link>
      </div>
    </div>
  );
};

export default Posts;
