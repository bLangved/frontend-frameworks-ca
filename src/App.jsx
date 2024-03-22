import React from "react";
import "./components/";
import "./App.css";
import { Layout } from "./components/";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Categories,
  Product,
  Checkout,
  CheckoutSuccess,
  RouteNotFound,
  Contact,
} from "./pages/";
import { CartProvider } from "./contexts/CartContext";
import { OverlayProvider } from "./contexts/OverlayContext";

function App() {
  return (
    <CartProvider>
      <OverlayProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="categories" element={<Categories />} />
              <Route path="product/:id" element={<Product />} />
              <Route path="contact" element={<Contact />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="checkoutSuccess" element={<CheckoutSuccess />} />
              <Route path="*" element={<RouteNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </OverlayProvider>
    </CartProvider>
  );
}

export default App;
