import React from "react";
import "./components/";
import "./App.css";
import { Layout } from "./components/";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Products,
  Product,
  Checkout,
  RouteNotFound,
  Contact,
  Cart,
} from "./pages/";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="contact" element={<Contact />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
