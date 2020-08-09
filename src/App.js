import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Pages
import Index from "./pages/index";
import Carrinho from "./pages/carrinho";
import Login from "./pages/login";

//CSS
import "./global.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/carrinho" component={Carrinho} />
        <Route exact path="/login" component={Login} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
