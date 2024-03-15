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
  CheckoutSuccess,
  RouteNotFound,
  Contact,
  Cart,
} from "./pages/";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="contact" element={<Contact />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="checkoutSuccess" element={<CheckoutSuccess />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<RouteNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
