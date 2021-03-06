import React from "react";
import TabBar from "../TabBar";
import TopBar from "../TopBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Category from "../../pages/Category";
import Search from "../../pages/Search";

function App() {
  return (
    <Router>
      <TopBar />
      <TabBar />
      <Route path="/" exact component={Home} />
      <Route path="/category/:categoryId" component={Category} />
      <Route exact path="/search" component={Search} />
      <Route path="/search/:query" component={Search} />
    </Router>
  );
}

export default App;
