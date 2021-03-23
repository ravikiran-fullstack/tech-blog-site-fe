import React, { useState, useEffect, useMemo } from "react";
import PostCardDisplay from "../postCardDisplay/PostCardDisplay";

import Loading from "../utils/loadingIndicator/LoadingIndicator";

import "./ShowAllPosts.css";

const ShowAllPosts = ({ category }) => {
  const [posts, setPosts] = useState([]);
  const [postsToDisplay, setPostsToDisplay] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 6;

  const [isNext, setIsNext] = useState(true);
  const [isPrevious, setIsPrevious] = useState(false);

  const numberOfPages = Math.ceil(posts.length / pageSize);
  const pagesArray = [];
  for (let i = 1; i <= numberOfPages; i++) {
    pagesArray.push(i);
  }

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

  useEffect(() => {
    const firstIndex = currentPage * pageSize - pageSize;
    const lastIndex = currentPage * pageSize ;
    setPostsToDisplay(posts.slice(firstIndex, lastIndex));
  }, [posts, currentPage]);

  useMemo(() => {
    if (currentPage === 1) {
      setIsPrevious(false);
      setIsNext(true);
    }
    if (currentPage === numberOfPages) {
      setIsPrevious(true);
      setIsNext(false);
    }
  }, [currentPage, pageSize]);

  if (loading) {
    return (
      <div className="loadingContainer">
        <Loading />
      </div>
    );
  } else {
    return (
      <div className="container showAllPosts">
        <div className="row">
          <div className="col-12 sectionHeading">
            <h3 className="text-capitalize">All {category} posts</h3>
          </div>
        </div>
        <div className="row">
          <>
            {postsToDisplay.map((post, index) => {
              return <PostCardDisplay key={index} post={post} />;
            })}
          </>
        </div>

        <nav aria-label="Page navigation example" style={{ marginTop: "40px" }}>
          <ul className="pagination justify-content-center">
            <li
              className={`page-item ${
                isPrevious && pagesArray.length === 1 && "disabled"
              }`}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <a className="page-link" href="#">
                Previous
              </a>
            </li>
            {pagesArray.map((page, index) => {
              return (
                <li
                  key={page}
                  className={`page-item ${
                    currentPage === page && "currentPage"
                  }`}
                  onClick={() => setCurrentPage(page)}
                >
                  <a className="page-link" href="#">
                    {page}
                  </a>
                </li>
              );
            })}

            <li
              className={`page-item ${
                !isNext && pagesArray.length === 1 && "disabled"
              }`}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
};

export default ShowAllPosts;
