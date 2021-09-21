import React from "react";
import "./App.css";
import Main from "./components/Main";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Favorites from "./components/Favorites";
import Result from "./components/Result";

function App() {
  return (
    <Router>
    <Header />
    <Switch>
      <Route path="/" exact>
        <Main />
      </Route>
      <Route path="/bucketlist" exact>
        <Favorites />
      </Route>
            {/* <Route path="/gif/:id" exact>
        <Result event={undefined} />
      </Route> */}
      <Route path="/">
        <Redirect to="/" />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
