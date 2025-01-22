import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./containers/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Memories from "./containers/Memories";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' elemente={<Home />}/>
        <Route path='/memories' elemente={<Memories />}/>
        <Route path='/' elemente={<h1>Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
