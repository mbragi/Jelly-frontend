import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { path } from "./routes";
import LoginPage from "../src/pages/login/LoginPage";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <>
      <section style={{ width: "100%" }}>
        <BrowserRouter>
          <Routes>
            <Route exact path={path.loginPage} element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
           
      </section>
      <Cart />
    </>
  );
}

export default App;
