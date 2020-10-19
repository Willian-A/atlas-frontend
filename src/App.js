import React from "react";
import { useRoutes } from "hookrouter";

import Index from "./pages/index";
import Cart from "./pages/cart";
import Products from "./pages/products";
import Product from "./pages/product";
import Login from "./pages/login";
import Logout from "./pages/logout";
import Register from "./pages/register";
import Error from "./pages/error";

//CSS
import "./global.css";

const routes = {
  "/": () => <Index />,
  "/carrinho": () => <Cart />,
  "/produtos/:id": ({ id }) => <Products id={id} />,
  "/produto/:id": ({ id }) => <Product id={id} />,
  "/login": () => <Login />,
  "/logout": () => <Logout />,
  "/cadastro": () => <Register />,
};

function App() {
  const routeResult = useRoutes(routes);

  return routeResult || <Error />;
}

export default App;
