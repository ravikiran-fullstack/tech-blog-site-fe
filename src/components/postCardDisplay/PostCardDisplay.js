import React from "react";
import parse from "html-react-parser";
import "./PostCardDisplay.css";

const PostCardDisplay = ({ post }) => {
  const alternateImage =
    "https://seo-trench.com/wp-content/uploads/2019/11/12-Websites-You-Should-Check-Out-to-Learn-Web-Development-Fast.png";
  return (
    <div className="col-md-4 col-sm-12 mb-4">
      <div className="card">
        <img
          className="card-img-top"
          src={`${post.backgroundImage || alternateImage}`}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <div className="card-text text-truncate customDescription">
            {parse(post.description)}
          </div>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostCardDisplay;
