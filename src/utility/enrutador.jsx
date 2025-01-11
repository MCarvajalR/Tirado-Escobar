/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar"; // Importar Navbar
import App from "../App";
import Contact from "../Contacts";

const Enrutador = () => {
  return (
    <Router>
      <div className="bg-white duration-200 overflow-hidden">
        <Navbar /> {/* Navbar dentro del Router */}
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Enrutador;
