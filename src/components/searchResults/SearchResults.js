import React from "react";
import { useLocation } from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

const SearchResults = () => {
  let query = useQuery();
  let searchString = query.get('search');
  return <div>Searching for {searchString}</div>;
};

export default SearchResults;
