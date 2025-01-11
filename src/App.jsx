// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/HomeComponents/Hero/Hero";
import Services from "./components/HomeComponents/Services/Services";
import Uses from "./components/HomeComponents/Uses/Uses";
import Trust from "./components/HomeComponents/Trust/Trust";
import Footer from "./components/HomeComponents/Footer/Footer";
import Contact from "./Contact"; // Página de contacto (añade esta ruta)

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar siempre visible */}
      <Routes>
        {/* Ruta de inicio */}
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <Services />
              <Uses />
              <Trust />
              <Footer />
            </main>
          }
        />
        {/* Ruta para la página de contacto */}
        <Route path="/contacto" element={<Contact />} />
        {/* Puedes añadir más rutas según necesites */}
      </Routes>
    </Router>
  );
};

export default App;
