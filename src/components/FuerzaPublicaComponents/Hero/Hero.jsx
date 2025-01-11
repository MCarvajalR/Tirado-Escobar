/* eslint-disable no-unused-vars */
import React from "react";
import HeroTirado from "../../../assets/Hero.png";
import img1 from "../../../assets/subsidio.jpg";
import img2 from "../../../assets/uniformados.jpg";
import img3 from "../../../assets/soldado.jpg";
import img4 from "../../../assets/servicioMilitar.jpg";
import img5 from "../../../assets/disciplinario.jpg";
import img6 from "../../../assets/ipc.jpg";
import img7 from "../../../assets/nulidad.jpg";
import { motion } from "framer-motion";
import { SlideDown, SlideLeft } from "../../../utility/animation";

const Hero = () => {
  return (
    <section>
      <div className="rounded-3x1 flex justify-center container">
        <motion.h1
          variants={SlideDown(0.3)}
          initial="initial"
          whileInView="animate"
          className="rounded-3xl text-5xl font-bold text-green-900 min-w-[650px] min-h-[52px] text-center"
        >
          Derecho de Fuerza Pública
        </motion.h1>
      </div>
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
              Subsidio Familiar.
            </motion.h1>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              Tiene derecho a reclamar retroactivo cualquiera de los anteriores
              si recibía dicho subsidio a septiembre de 2009 y por arbitrariedad del estado suspendió el pago
              de los mismos. Soldados profesionales e infantes de marina profesionales, que
              siendo miembros activos no se les ha reconocido pago, teniendo compañera permanente
              o esposa después del 27 de julio del 2014.
            </motion.p>
          </div>
        </div>
        {/*Image section*/}
        <div className="flex flex-col justify-center">
          <img src={img1} alt="" className="w-full rounded-3xl"/>
        </div>
      </div>

      {/*Segunda seccion*/}

      <div className="bg-brandWhite rounded-3xl container grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[650px]">

        {/*Image section*/}
        <div className="flex flex-col justify-center">
          <img src={img2} alt="" className="w-full rounded-3xl"/>
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
              Responsabilidad Administrativa.
            </motion.h1>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              El personal civil e incluso los miembros activos y en retiro de la Fuerza Publica,
              que por cualquier hecho, acto u omisión del personal de uniformados de la policía, ejercito,
              armada nacional o fuerza aérea, se viera afectados, por violación a derechos fundamentales,
              detrimento patrimonial, o perjuicios morales.
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
              Pensiones Negadas.
            </motion.h1>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              Suele ocurrir que al fallecer un miembro de la fuerza publica, a sus hijos,
              esposos o compañeros permanentes le sea negado el derecho a recibir pensión de sobreviviente,
              tan solo es necesario que el beneficiario demuestre que agente cotizo 50 semanas en los
              últimos tres años, si es así, pueden acceder a este derecho. Existen causales por medio de las
              cuales, las respectivas cajas de retiro CREMIL Y CASUR, indican el miembro en prospecto de retiro no
              posee derecho a una asignación de retiro, es de aclarar que cada caso es diferente, pero podemos
              revisar su caso y orientarlo a la satisfacción de sus necesidades de la menor manera.
            </motion.p>
          </div>
        </div>
        {/*Image section*/}
        <div className="flex flex-col justify-center">
          <img src={img3} alt="" className="w-full rounded-3xl"/>
        </div>
      </div>


      {/*cuarta seccion*/}

      <div className="bg-brandWhite rounded-3xl container grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[650px]">

        {/*Image section*/}
        <div className="flex flex-col justify-center">
          <img src={img4} alt="" className="w-full rounded-3xl"/>
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
              Beneficios por prestar Servicio Militar.
            </motion.h1>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              Cualquier Colombiano que prestara servicio militar, en el ejército, armada,
              policía, fuerza aérea o IMPEC, tiene derecho que después de haber prestado el servicio
              militar, y se hubiese vinculado a una entidad del estado, tiene derecho a pelear el reconocimiento
              del tiempo que presto servicio para el pago de sus cesantías, y para su respectivo bono pensional al
              fondo al cual este cotizando para pensión. Cualquier persona que prestando el servicio militar o en la
              escuela de formación castrense de oficiales, suboficiales o nivel ejecutivo en el caso de la policía,
              y resultase lesionado, o con deterioro en su capacidad laboral en razón al servicio militar, tiene
              derecho a ser indemnizado y pelear reconocimientos monetarios.
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
              Procesos Disciplinarios.
            </motion.h1>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              El proceso disciplinario es aquel que realiza el estado en virtud
              del poder punitivo que sobre el recae, respecto de las actuaciones particulares
              de cada miembro en hechos que puedan ser considerados como punibles,
              que tienen como fin, la sanción en dinero y/o la desvinculación de la
              institución respectiva, nuestra oficina cuenta con los profesionales
              idóneos para realizar la defensa técnica judicial requerida para salvaguardar
              sus derechos y velar por el debido proceso que se le debe seguir.
            </motion.p>
          </div>
        </div>
        {/*Image section*/}
        <div className="flex flex-col justify-center">
          <img src={img5} alt="" className="w-full rounded-3xl"/>
        </div>
      </div>

      {/*sexta seccion*/}

      <div className="bg-brandWhite rounded-3xl container grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[650px]">

        {/*Image section*/}
        <div className="flex flex-col justify-center">
          <img src={img6} alt="" className="w-full rounded-3xl"/>
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
              IPC.
            </motion.h1>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              Todo miembro de las fuerzas publica, ejercito, armada, policía, fuerza aérea,
              que se hubiese retirado antes del 31 de diciembre de 2004, tiene derecho a un
              reajuste de su asignación de retiro, y al pago de un dinero por concepto de
              retroactivo, que variaría de acuerdo con el grado que ostente, este derecho lo
              tienen solo quienes gocen de asignación de retiro a la fecha indicada.
            </motion.p>
          </div>
        </div>
      </div>

      {/*septima seccion*/}
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
              Nulidad y Restablecimiento del Derecho.
            </motion.h1>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              Si por alguna razón es desvinculado por ser llamado a calificar servicios, y considera que esta
              fue de manera injusta, tiene derecho a demandar y solicitar el reintegro a la institución, además
              de pedir las indemnizaciones respectivas a las que hubiere lugar y el retroactivo que se formara
              en el tiempo de litigio de sus derechos.
            </motion.p>
          </div>
        </div>
        {/*Image section*/}
        <div className="flex flex-col justify-center">
          <img src={img7} alt="" className="w-full rounded-3xl"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
