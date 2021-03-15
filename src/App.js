import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";

import AllPosts from './components/allPosts/AllPosts';

import SinglePost from './components/singlePost/SinglePost';
import SearchResults from './components/searchResults/SearchResults';

const App = () => {
  return (
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
        <Footer style={{position: "fixed",left: 0, bottom: 0}}/>
      </div>
    </BrowserRouter>
  );
};

export default App;
