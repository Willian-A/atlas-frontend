import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Pages
import Index from "./pages/index";
import Carrinho from "./pages/carrinho";

//CSS
import "./global.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/carrinho" component={Carrinho} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
