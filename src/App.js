import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Pages
import Index from "./components/index";
import Login from "./components/login";
import Register from "./components/register";
import Carrinho from "./components/carrinho";
import ProductPage from "./components/product-page";
import Products from "./components/products";
import Error from "./components/error";

//CSS
import "./global.css";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/carrinho" component={Carrinho} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/product-page" component={ProductPage} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
