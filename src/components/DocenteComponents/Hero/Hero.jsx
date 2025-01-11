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
              className="text-5xl font-bold text-green-900"
            >
              Pensión Gracia.
            </motion.h1>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              A ésta prestación, tiene derecho los maestros que cumplan cincuenta (50) años de edad,
              veinte (20) años de servicio en la docencia oficial territorial (vinculación municipal, 
              departamental, distrital o nacionalizada). El docente debe cumplir con los dos requisitos 
              mencionados antes del 31 de diciembre de 1989.  Se debe demostrar también buena conducta 
              durante el tiempo de servicios.
            </motion.p>
          </div>
        </div>
        {/*Image section*/}
        <div className="flex flex-col justify-center">
          <img src={HeroTirado} alt="" />
        </div>
      </div>

{/*Segunda seccion*/}

      <div className="bg-brandWhite rounded-3xl container grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[650px]">
        
        {/*Image section*/}
        <div className="flex flex-col justify-center">
          <img src={HeroTirado} alt="" />
        </div>
        {/*Text section*/}
        <div className="flex flex-col justify-center">
          <div className="mt-24 mb-10 md:mt-0 md:mb-0 space-y-6 text-center md:text-left">
            <motion.h1
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-5xl font-bold text-green-900"
            >
              Pensión Jubilación.
            </motion.h1>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
            Prestación a que tienen derecho los docentes que cumplan 20 años de servicio, 
            bien como docentes y/o en entidades del estado y 55 años de edad.
            </motion.p>
          </div>
        </div>
      </div>

{/*Tercera seccion*/}
      <div className="bg-brandWhite rounded-3xl container grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[650px]">
        {/*Text section*/}
        <div className="flex flex-col justify-center">
          <div className="mt-24 mb-10 md:mt-0 md:mb-0 space-y-6 text-center md:text-left">
            <motion.h1
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-5xl font-bold text-green-900"
            >
              Reliquidación de la Pensión Gracia y Jubilación por factores salariales.
            </motion.h1>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              Todos los factores salariales, tales como primas, sobresueldo, horas extras, etc., 
              devengados dentro del año inmediatamente anterior a la fecha de adquirir el derecho 
              a la pensión, deben ser tenidos en cuenta para la liquidación de la mesada pensional.
            </motion.p>
          </div>
        </div>
        {/*Image section*/}
        <div className="flex flex-col justify-center">
          <img src={HeroTirado} alt="" />
        </div>
      </div>


{/*cuarta seccion*/}

<div className="bg-brandWhite rounded-3xl container grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[650px]">
        
        {/*Image section*/}
        <div className="flex flex-col justify-center">
          <img src={HeroTirado} alt="" />
        </div>
        {/*Text section*/}
        <div className="flex flex-col justify-center">
          <div className="mt-24 mb-10 md:mt-0 md:mb-0 space-y-6 text-center md:text-left">
            <motion.h1
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-5xl font-bold text-green-900"
            >
              Pensión invalidez docentes.
            </motion.h1>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
            El docente que sea calificado con una pérdida de capacidad laboral igual o superior al 
            cincuenta por ciento (50%), tiene derecho al reconocimiento de esta prestación.
            </motion.p>
          </div>
        </div>
      </div>

{/*quinta seccion*/}
      <div className="bg-brandWhite rounded-3xl container grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[650px]">
        {/*Text section*/}
        <div className="flex flex-col justify-center">
          <div className="mt-24 mb-10 md:mt-0 md:mb-0 space-y-6 text-center md:text-left">
            <motion.h1
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-5xl font-bold text-green-900"
            >
              Pensión de sobreviviente.
            </motion.h1>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              Los beneficiarios de un docente que fallezca, habiendo laborado más de cincuenta (50) semanas, 
              tienen derecho a reclamar esta prestación.
            </motion.p>
          </div>
        </div>
        {/*Image section*/}
        <div className="flex flex-col justify-center">
          <img src={HeroTirado} alt="" />
        </div>
      </div>

{/*sexta seccion*/}

<div className="bg-brandWhite rounded-3xl container grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[650px]">
        
        {/*Image section*/}
        <div className="flex flex-col justify-center">
          <img src={HeroTirado} alt="" />
        </div>
        {/*Text section*/}
        <div className="flex flex-col justify-center">
          <div className="mt-24 mb-10 md:mt-0 md:mb-0 space-y-6 text-center md:text-left">
            <motion.h1
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-5xl font-bold text-green-900"
            >
              Sanción moratoria en el pago de cesantías.
            </motion.h1>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
            El docente, tiene derecho al pago de una indemnización moratoria, 
            cuando haya demora en el pago de las cesantías parciales o definitivas, 
            de más de 60 días hábiles desde la solicitud.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;