import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { path } from "./routes";
import Home from "./pages/home/Home";
import LoginPage from "./pages/login/LoginPage";
import Cart from "./pages/cart/Cart.jsx";
import RegisterPage from "./pages/register/RegisterPage";
import CheckOut from "./pages/checkout/CheckOut";
import ContactPage from './pages/contact/ContactPage'
function App() {
  return (
    <>
      <section style={{ width: "100%" }}>
        <BrowserRouter>
          <Routes>
            {/* <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/register" element={<RegisterPage />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/cart" element={<Cart />} />
<<<<<<< HEAD
            <Route exact path="/checkout" element={<CheckOut />} /> */}

            <Route exact path={path.homepage} element={<Home />} />
            <Route exact path={path.loginPage} element={<LoginPage />} />
            <Route exact path={path.registerpage} element={<RegisterPage />} />
            <Route exact path={path.cart} element={<Cart />} />
            <Route exact path="/checkout" element={<CheckOut />} />
            <Route exact path="/contact" element={<ContactPage />} />
            <Route exact path="*" element={<h1>404</h1>} />
          </Routes>
        </BrowserRouter>
      </section>
    </>
  );
}

export default App;
