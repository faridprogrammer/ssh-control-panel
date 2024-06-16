import React from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";

// header component
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Servers from "./pages/Servers";

const root = document.getElementById("root");
if (root !== null) {
  const appRoot = createRoot(root);
  appRoot.render(
    <React.Fragment>
      <div className="bg-gray-100">
        <ToastContainer position="bottom-right" theme="dark" />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/servers" element={<Servers />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
}
