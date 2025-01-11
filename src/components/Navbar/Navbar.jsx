/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom"; // Importar Link
import Logo from "../../assets/Banner_Black.png";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Referencia al menú desplegable

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Alternar el estado
  };

  // Manejar clic fuera del menú
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false); // Cerrar el menú
      }
    };

    document.addEventListener("mousedown", handleOutsideClick); // Escuchar clics
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick); // Limpiar
    };
  }, []);

  return (
    <header className="bg-white">
      <div className="container py-5 flex items-center justify-between">
        {/* Logo */}
        <div>
          <img src={Logo} alt="Logo" className="w-48" />
        </div>
        {/* Navlink */}
        <ul className="hidden md:flex items-center gap-5 md:text-base xl:text-xl relative">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li className="relative" ref={dropdownRef}>
            <span
              className="relative z-10 cursor-pointer"
              onClick={toggleDropdown} // Controlar el clic
            >
              Servicios
            </span>
            {/* Menú desplegable con animación */}
            <ul
              className={`absolute left-0 mt-2 bg-white shadow-lg border rounded-lg py-2 min-w-[220px] transform transition-all duration-300 ease-in-out ${
                isDropdownOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <li>
                <Link
                  to="/natural"
                  className="block px-4 py-2 hover:bg-primary hover:text-white transform duration-300"
                >
                  Pensión de ámbito natural
                </Link>
              </li>
              <li>
                <Link
                  to="/docentes"
                  className="block px-4 py-2 hover:bg-primary hover:text-white transform duration-300"
                >
                  Pensión para los docentes
                </Link>
              </li>
              <li>
                <Link
                  to="/familiar"
                  className="block px-4 py-2 hover:bg-primary hover:text-white transform duration-300"
                >
                  Derecho de la familia
                </Link>
              </li>
              <li>
                <Link
                  to="/administrativo"
                  className="block px-4 py-2 hover:bg-primary hover:text-white transform duration-300"
                >
                  Derecho administrativo
                </Link>
              </li>
              <li>
                <Link
                  to="/fuerzaPublica"
                  className="block px-4 py-2 hover:bg-primary hover:text-white transform duration-300"
                >
                  Pensiones de fuerza pública
                </Link>
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