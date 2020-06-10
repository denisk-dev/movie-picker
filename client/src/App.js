/**
 * author: Denis Kravchenko
 */

import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import Spin from "./components/Spin/Spin";
import Watchlist from "./components/Watchlist/Watchlist";
import MovieInfo from "./components/Movie/MovieInfo";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" exact component={Search} />
            <Route path="/spin" exact component={Spin} />
            <Route path="/watchlist" exact component={Watchlist} />
            <Route path="/movie/:id" component={MovieInfo} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
