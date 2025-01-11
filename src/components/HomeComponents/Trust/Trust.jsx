// eslint-disable-next-line no-unused-vars
import React from "react";
import Img1 from "../../../assets/justicia.png";
import Img2 from "../../../assets/pension-segura.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../../utility/animation";

const Trust = () => {
  return (
    <section className="bg-brandWhite pt-10 pb-20 mt-20">
      <div className="container">
        <motion.h1
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
          className="py-10 text-4xl font-bold text-darkBlue text-center"
        >
          ¿Por qué confiar en nosotros?
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            className="space-y-6 text-center md:text-left md:px-16 xl:px-32"
          >
            <img src={Img1} alt="" className="w-12 mx-auto md:mx-0" />
            <p className="text-3xl font-semibold">
              Experiencia y Conocimiento Especializado
            </p>
            <p className="text-lg">
              Contamos con muchos años de experiencia, nuestro equipo de
              abogados y asesores especializados trabaja para garantizar que
              obtengas tus beneficios de pensión de manera eficiente y sin
              complicaciones. Entendemos la complejidad de cada caso y te
              ofrecemos soluciones personalizadas
            </p>
            <p className="text-gray-400">
              Nos especializamos en todas las áreas relacionadas con pensiones,
              incluyendo docentes, régimen público, fuerza pública, y más..
            </p>
          </motion.div>
          <motion.div
            variants={SlideUp(0.6)}
            initial="initial"
            whileInView="animate"
            className="space-y-6 text-center md:text-left md:px-16 xl:px-32"
          >
            <img src={Img2} alt="" className="w-12 mx-auto md:mx-0" />
            <p className="text-3xl font-semibold">
              Acompañamiento Personalizado y Transparente
            </p>
            <p className="text-lg">
              Sabemos que cada situación es única. Por eso, en Tirados Escobar
              nos comprometemos a brindarte una atención cercana y profesional,
              ajustándonos a tus necesidades. Cada cliente es nuestra prioridad,
              y trabajamos para obtener los mejores resultados para ti y tu
              familia.
            </p>
            <p className="text-gray-400">
              Transparencia, compromiso y confianza son los pilares de nuestro
              servicio.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
