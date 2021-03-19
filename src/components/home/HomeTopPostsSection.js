import React, { useState, useEffect } from "react";
import classnames from "classnames";

import PostDisplay from '../postDisplay/PostDisplay';

const HomeTopPostsSection = () => {
  const [topPosts, setTopPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5500/articles")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTopPosts(data.slice(0,5));
      })
      .catch((err) => console.log(err));
  }, []);

  const topPostsConfig = {
    1: {
      gridArea: '1/1/2/3'
    }
  }

  const mergeStyle = (posts, config) => {
    posts.forEach((post, index) => {
      post.style = config[index];
    })
  }

  mergeStyle(topPosts, topPostsConfig);

  return (
    <div>
      <div className="sectionHeading">
        <h3>Top Posts</h3>
      </div>
      <div className="container">
        <div className="row">
          {/* {topPosts.slice(0, 6).map(post => {
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
                  href={`https://jsonplaceholder.typicode.com/todos/${post.id}`}
                >
                  <h3>{post.title}</h3>
                  <p>{post.category}</p>
                </a>
              </div>
            );
          })} */}

          <section className="postsGrid" style={{gridTemplateColumns: `repeat(3, minmax(275px, 400px))`, height: '600px'}}>
            {
              topPosts.map((post, index) => {
                return <PostDisplay key={index} post={post}/>
              })
            }
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomeTopPostsSection;
