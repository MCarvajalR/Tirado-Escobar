/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar"; // Importar Navbar
import App from "../App";
import Contact from "../Contacts";
import Natural from "../Natural";
import Administrativo from "../Administrativo";
import Docente from "../Docente";
import Familiar from "../Familiar";
import FuerzaPublica from "../FuerzaPublica";


const Enrutador = () => {
  return (
    <Router>
      <div className="bg-white duration-200 overflow-hidden">
        <Navbar /> {/* Navbar dentro del Router */}
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/natural" element={<Natural />} />
          <Route path="/administrativo" element={<Administrativo />} />
          <Route path="/docentes" element={<Docente />} />
          <Route path="/familiar" element={<Familiar />} />
          <Route path="/fuerzaPublica" element={<FuerzaPublica />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Enrutador;
