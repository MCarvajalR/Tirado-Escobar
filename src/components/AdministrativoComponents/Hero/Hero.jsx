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
              Reparación directa.
            </motion.h1>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              Opera cuando se ha sufrido un accidente como consecuencia del mal estado de las vías,
              falta de señalización que advierta que una vía está en reparación o que se encuentra
              en mal estado, señales de tránsito deterioradas o en mal funcionamiento por ejemplo
              semáforos dañados.
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
              Responsabilidad objetiva del estado.
            </motion.h1>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              - Si un soldado regular sufre accidentes, lesiones o adquiere una enfermedad mientras
              están prestando su servicio militar o es herido en combate, lesiones por ejercicios
              de entrenamiento, muertes, suicidios, etc. Así mismo, cuando los internos en las cárceles,
              sufren lesiones por agresión de otros internos o la guardia.
              Enfermedades con secuela irreversibles mientras están internos en las cárceles,
              muertes al interior del penal.
            </motion.p>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              - Cuando los niños o jóvenes estudiantes en el colegio públicos, sufre un accidente estando
              bajo la vigilancia y supervision del personal docente.
            </motion.p>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              - Por abuso de la autoridad, cuando policía o miembro del ejército, se extralimita en
              el ejercicio de sus funciones, agrediendo a los ciudadanos, mientras prestan su servicio,
              por tanto el uniforme y/o utilizando sus armas de dotación oficial.
            </motion.p>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              - Por abuso de la autoridad, cuando policía o miembro del ejército, se extralimita en
              el ejercicio de sus funciones, agrediendo a los ciudadanos, mientras prestan su servicio,
              por tanto el uniforme y/o utilizando sus armas de dotación oficial.
            </motion.p>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              - También se demanda por los perjuicios causados a las víctimas de atentados terroristas
              dirigidos contra entidades del estado.
            </motion.p>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              - Y todo lo relacionado con responsabilidad del Estado para con sus Administradores por
              acción u omission o prestación defectuosa dale servicio.
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
              Detención injusta.
            </motion.h1>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              Cuando un procesado o condenado quien ha sido privado de su libertad, es luego liberado
              por vencimiento de términos, o por falta de pruebas que lo incriminen o simplemente con sentencia absoluta.
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
              Responsabilidad Médica.
            </motion.h1>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              Cuando se pueda demostrar que hubo una intervención o tratamiento médico;
              que se causó un daño y; que el daño es producto de la intervención y el tratamiento,
              es viable demandar para cobrar perjuicios como:
            </motion.p>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              1. Daño emergente: Son los gastos en que incurre la persona afectada para reparar 
              el daño causado por la negligencia o la impericia médica. Se incluyen dentro de 
              este concepto pago de facturas, gastos de transporte, adquisición de equipos y medicinas, etc.
            </motion.p>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              2. Lucro cesante: Son los ingresos económicos  que deja de percibir la persona que sufre un daño 
              por no poder realizar una determinada actividad de la cual se lucra. Sufre lucro cesante quien deja de 
              realizar una actividad que le produce ingresos y ha cesado en tal actividad por razón del daño causado.
            </motion.p>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              3. Daño moral subjetivo: Es el dolor interno que sufre la persona por razón de la ocurrencia del 
              hecho que causa el daño y por el daño mismo. Se calcula en gramos oro y en salarios minimos legales mensuales.
            </motion.p>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              4. Daño a la vida de relación: Es la imposibilidad, por razón del daño, de relacionarse en la misma 
              forma en que lo podría hacer de no haber ocurrido el hecho, tanto con el entorno como con los seres queridos y la sociedad.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
