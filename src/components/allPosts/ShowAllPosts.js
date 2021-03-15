import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import classnames from "classnames";

import './ShowAllPosts.css';

const ShowAllPosts = ({ category }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5500/articles/category/${category}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => console.log(err));
  }, [category]);

  return (
    <div className="container showAllPosts">
      <div className="row">
        <div className="col-12 sectionHeading">
          <h3 className="text-capitalize">All {category} posts</h3>
        </div>
      </div>
      <div className="row">
        {posts.map(post => {
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
        })}
      </div>
    </div>
  );
};

export default ShowAllPosts;
