import React from "react";
import {Link} from "react-router-dom";
import "./PostDisplay.css";
import Moment from 'react-moment';
import { categoryColors } from "./CategoryColors";

const PostDisplay = ({ post }) => {
  const imageBackground = {
    backgroundImage: `url("${post.backgroundImage}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    filter: "brightness(80%)"
  };
  console.log(post.style);
  const style = { ...imageBackground, ...post.style };
  return (
    <Link className="postDisplay overlay" style={style} to={`/post/${post.slug}`}>
      <div className="imageText">
        <div className="categoryContainer">
          <span
            className="category"
            style={{ backgroundColor: categoryColors[post.category] }}
          >
            {post.category}
          </span>
        </div>
        <div>
          <h2 className="postTitle">{post.title}</h2>
          <span className="postDate">
              <Moment format="YYYY/MM/DD">
                {post.createdAt}
              </Moment>
           </span>
        </div>
      </div>
    </Link>
  );
};

export default PostDisplay;
