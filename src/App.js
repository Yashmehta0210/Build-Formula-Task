import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/ContactPage";
import Home from "./components/HomePage";
import Task from "./components/TaskPage";
import Navbar from "./Navbar";

function App() {
  return (
    <>
  
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/task" element={<Task />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
