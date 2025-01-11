// eslint-disable-next-line no-unused-vars
import React from "react";
import Logo from "../../assets/Banner_White.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { IoPlanet } from "react-icons/io5";

const Footer = () => {
  return (
    <section className="bg-gray-800">
      <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <div className="container py-20 flex flex-col md:flex-row md:items-center justify-between gap-10">
          {/* Brand Info */}
          <div className="space-y-4 w-80">
            <img src={Logo} alt="" />
          </div>
          {/*social icons*/}
          <div>
            <div className="flex space-x-6 text-3xl text-white">
              <FaFacebook className="hover:text-primary duration-200" />
              <FaInstagram className="hover:text-primary duration-200" />
              <FaXTwitter className="hover:text-primary duration-200" />
            </div>
          </div>
        </div>
        {/*Copyright */}
        <div className="bg-gray-900 text-center py-4">
          <p className="text-sm text-gray-400 flex text-center justify-center">
            &copy; {new Date().getFullYear()} Tirado Escobar & Abogados. Todos
            los derechos reservados. <br />
            Designed by Vyntra Orbit Group
          </p>
        </div>
      </motion.footer>
    </section>
  );
};

export default Footer;
