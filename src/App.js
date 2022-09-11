import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { path } from "./routes";
import Home from "./pages/home/Home";
import LoginPage from "../src/pages/login/LoginPage";
import RegisterPage from "../src/pages/register/RegisterPage";
import Cart from "./pages/cart/Cart";
import Contact from "./pages/contact/ContactPage"
import CheckOut from "./pages/checkout/CheckOut";


function App() {
  return (
    <>
      <section style={{ width: "100%" }}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/register" element={<RegisterPage />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/checkout" element={<CheckOut />} />
            <Route exact path="*" element={<h1>404</h1>} />
          </Routes>
        </BrowserRouter>
           
      </section>
    </>
  );
}

export default App;
