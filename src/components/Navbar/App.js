import React from "react";
import "./App.scss";

import Header from "./components/Header";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}



function Home() {
  return (
    <div className="container">
      <div className="wrapper">
        <h5>
           <b>this haloweave navbar</b>, is a simple responsive navbar v0.003
        </h5>
      </div>
    </div>
  );
}
export default App;
