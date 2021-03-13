import React, { useState, useEffect } from "react";
import classnames from 'classnames';

const HomeTopPostsSection = () => {
  const [topPosts, setTopPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5500/articles")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTopPosts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="sectionHeading">
        <h3>Top Posts</h3>
      </div>
      <div className="container">
        <div className="row">
          {topPosts.slice(0, 6).map((post) => {
            return (
              <div className="col-lg-4 col-md-6">
                <a
                  key={post.slug}
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
                  href={`https://jsonplaceholder.typicode.com/todos/${post.id}`}
                >
                  <h3>{post.title}</h3>
                  <p>{post.category}</p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeTopPostsSection;
