import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  //console.log("slug", slug);

  useEffect(() => {
    // console.log('Inside useEffect')
    fetch(`http://localhost:5500/articles/${slug}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data, data.title);
        setPost(data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (post) {
    return(
        <div className="container">
      <h3>{post.title}</h3>
      <div className="text-muted mb-3">
        <h6>{post.createdAt}</h6>
      </div>
      <div>
        {post.description} {post.sanatizedHtml}
      </div>
      <a href="/articles/" className="btn btn-secondary">
        All Articles
      </a>
      <a href="/articles/edit/<%= article.slug %>" className="btn btn-info">
        Edit
      </a>
    </div>
    )
  } else {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p>Loading</p>
          </div>
        </div>
      </div>
    );
  }
};

export default SinglePost;
