import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Pages
import Index from "./pages/index";
import Cart from "./pages/cart";
import Login from "./pages/login";
import Register from "./pages/register";

//CSS
import "./global.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/carrinho" component={Cart} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/cadastro" component={Register} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
