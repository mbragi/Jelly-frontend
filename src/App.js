import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { path } from "./routes";
import LoginPage from "../src/pages/login/LoginPage";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import RegisterPage from "./pages/register/RegisterPage";

function App() {
  return (
    <>
      <section style={{ width: "100%" }}>
        <BrowserRouter>
          <Routes>
            <Route exact path={path.homepage} element={<Home />} />
            <Route exact path={path.loginPage} element={<LoginPage />} />
            <Route exact path={path.registerpage} element={<RegisterPage />} />
            <Route exact path={path.cart} element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </section>
    </>
  );
}

export default App;
