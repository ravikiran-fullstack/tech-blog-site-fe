import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import classnames from "classnames";

const Posts = ({ category }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5500/articles/category/${category}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="postsSection">
      <div className="sectionHeading">
        <h3 className="sectionTitle text-capitalize">{category} Posts</h3>
        <div className="headingUnderline"></div>
      </div>
      <div className="container">
        <div className="row">
          {posts.slice(0, 6).map(post => {
            return (
              <div className="col-lg-4 col-md-6" key={post.slug}>
                <a
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
                  href={`http://localhost:5500/articles/${post.slug}`}
                >
                  <h3>{post.title}</h3>
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <div className="sectionHeading">
        <Link to={`/posts/${category}`} type="button" className="btn btn-outline-secondary btnStyles">
          View All Posts
        </Link>
      </div>

      {/* {category != "other" && <hr />} */}
    </div>
  );
};

export default Posts;
