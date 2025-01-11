/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom"; // Importar Link
import Logo from "../../assets/Banner_Black.png";

const Navbar = () => {
  return (
    <header className="">
      <div className="container py-5 flex items-center justify-between">
        {/* Logo */}
        <div>
          <img src={Logo} alt="" className="w-48" />
        </div>
        {/* Navlink */}
        <ul className="hidden md:flex items-center gap-5 md:text-base xl:text-xl">
          <li>
            <Link to="/">Inicio</Link> {/* Cambiar href por Link to */}
          </li>
          <li>
            <Link to="/servicios">Servicios</Link>{" "}
            {/* Crear una ruta ficticia */}
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>{" "}
            {/* Cambiar href por Link to */}
          </li>
        </ul>
        {/* Button */}
        <div>
          <button className="border border-gray-400 px-4 py-2 rounded-lg md:text-base xl:text-xl font-semibold hover:bg-primary hover:text-white transform duration-300">
            Consultar Proceso
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
