/* eslint-disable no-unused-vars */
import React from "react";
import HeroTirado from "../../../assets/Hero.png";
import { motion } from "framer-motion";
import { SlideLeft } from "../../../utility/animation";

const Hero = () => {
  return (
    <section>
      <div className="bg-brandWhite rounded-3xl container grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[650px]">
        {/*Text section*/}
        <div className="flex flex-col justify-center">
          <div className="mt-24 mb-10 md:mt-0 md:mb-0 space-y-6 text-center md:text-left">
            <motion.h1
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-5xl font-bold text-darkBlue"
            >
              Tirado Escobar <br />& Abogados
            </motion.h1>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              Ofrecemos soluciones legales personalizadas, nos especializamos en
              las pensiones para garantizar beneficios legales. Como prioridad
              tenemos que proteger el futuro y la tranquilidad de nuestros
              clientes.
            </motion.p>
            <motion.div
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="bg-primary text-white px-6 py-4 rounded-lg mt-4
          w-fit mx-auto md:mx-0 font-bold hover:shadow-lg duration-200"
            >
              <button>Saber más</button>
            </motion.div>
          </div>
        </div>
        {/*Image section*/}
        <div className="flex flex-col justify-center">
          <img src={HeroTirado} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
