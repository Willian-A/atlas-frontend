import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Pages
import Index from "./pages/index";
import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
import Carrinho from "./pages/carrinho";
import ProductPage from "./pages/product-page";
import Error from "./pages/error";

//CSS
import "./global.css";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/carrinho" component={Carrinho} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/cadastro" component={Cadastro} />
        <Route exact path="/product-page" component={ProductPage} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
