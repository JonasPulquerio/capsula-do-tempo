import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./containers/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Memories from "./containers/Memories";
import Create from "./containers/Create";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
