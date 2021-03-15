import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
import parse from 'html-react-parser';

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
    return (
      <div className="container" style={{height:'80vh'}}>
        <div className="row">
          <div className="col-12 text-center">
            <h3>{post.title}</h3>
            <div className="text-muted mb-3">
              <h6>{post.createdAt}</h6>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            {post.description} {parse(post.sanatizedHtml)}
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <Link to="/articles/" className="btn btn-secondary">
              All Articles
            </Link>
            <Link
              to={`/posts/edit/${post.slug}`}
              className="btn btn-info ml-4"
            >
              Edit
            </Link>
          </div>
        </div>
      </div>
    );
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
