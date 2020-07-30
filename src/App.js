import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Pages
import Index from "./pages/index";

//CSS
import "./global.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
