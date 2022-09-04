import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { path } from "./routes";
import LoginPage from "../src/pages/login/LoginPage";
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
    </>
  );
}

export default App;
