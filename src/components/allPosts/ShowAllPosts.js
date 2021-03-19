import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

import PostDisplay from "../postDisplay/PostDisplay";

import Loading from '../utils/loadingIndicator/LoadingIndicator';

import "./ShowAllPosts.css";

const ShowAllPosts = ({ category }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5500/articles/category/${category}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [category]);

  const style = {
    gridTemplateColumns: `repeat(${
      posts.length >= 5 ? "3" : posts.length < 2 ? "1" : "2"
    }, minmax(275px, 400px))`,
    height: `${
      posts.length > 6 ? "900px" : posts.length < 3 ? "300px" : "600px"
    }`,
  };

  if(loading){
    return (
      <div className="loadingContainer">
        <Loading/>
      </div>
    )
  }else {
    return (
      <div className="container showAllPosts">
        <div className="row">
          <div className="col-12 sectionHeading">
            <h3 className="text-capitalize">All {category} posts</h3>
          </div>
        </div>
        <div className="row">
          {/* {posts.map(post => {
            return (
              <div className="col-lg-4 col-md-6" key={post.slug}>
                <Link
                    className={classnames({
                      frontTeaser: true,
                      post: true,
                      reactPostStyle: post.category === "reactjs",
                      nodePostStyle: post.category === "nodejs",
                      javascriptPostStyle: post.category === "javascript",
                      typescriptPostStyle: post.category === "typescript",
                      databasePostStyle: post.category === "database",
                      otherPostStyle: post.category === "other",
                    })}
                    to={`/post/${post.slug}`}
                  >
                  <h3>{post.title}</h3>
                </Link>
              </div>
            );
          })} */}
          <section className="postsGrid" style={style}>
            {posts.map((post, index) => {
              return <PostDisplay key={index} post={post} />;
            })}
          </section>
        </div>
      </div>
    );
  }
};

export default ShowAllPosts;
