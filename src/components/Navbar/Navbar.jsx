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
        <ul className="hidden md:flex items-center gap-5 md:text-base xl:text-xl relative">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li className="relative group">
            <span className="relative z-10 cursor-pointer">
              Servicios
            </span>
            {/* Menú desplegable */}
            <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg border rounded-lg py-2 min-w-[220px]">
              <li className="px-4 py-2 hover:bg-primary transform duration-300">
                <Link to="/servicios/pension-natural">Pensión de ámbito natural</Link>
              </li>
              <li className="px-4 py-2 hover:bg-primary transform duration-300">
                <Link to="/servicios/pension-docentes">Pensión para los docentes</Link>
              </li>
              <li className="px-4 py-2 hover:bg-primary transform duration-300">
                <Link to="/servicios/derecho-familia">Derecho de la familia</Link>
              </li>
              <li className="px-4 py-2 hover:bg-primary transform duration-300">
                <Link to="/servicios/derecho-administrativo">Derecho administrativo</Link>
              </li>
              <li className="px-4 py-2 hover:bg-primary transform duration-300">
                <Link to="/servicios/fuerza-publica">Pensiones de fuerza pública</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
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
