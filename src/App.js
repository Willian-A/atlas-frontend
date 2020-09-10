import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Pages
import Index from "./pages/index/index";
import Cart from "./pages/cart";
import Product from "./pages/product";
import ProductsPage from "./pages/products";
import Login from "./pages/login";
import Logout from "./pages/logout";
import Register from "./pages/register";
import Error from "./pages/error";

//CSS
import "./global.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/carrinho" component={Cart} />
        <Route exact path="/produto" component={Product} />
        <Route exact path="/produtos" component={ProductsPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/cadastro" component={Register} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
