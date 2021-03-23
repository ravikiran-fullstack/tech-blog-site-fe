import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { UserAuthenticationContextProvider } from "./context/UserAuthenticationContext";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";

import AllPosts from "./components/allPosts/AllPosts";

import SinglePost from "./components/singlePost/SinglePost";
import SearchResults from "./components/searchResults/SearchResults";

const App = () => {
  return (
    <UserAuthenticationContextProvider>
      <BrowserRouter>
        <div>
          <Header />
          <div>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/posts/:category">
                <AllPosts />
              </Route>
              <Route path="/post/:slug">
                <SinglePost />
              </Route>
              <Route path="/search">
                <SearchResults />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </UserAuthenticationContextProvider>
  );
};

export default App;
