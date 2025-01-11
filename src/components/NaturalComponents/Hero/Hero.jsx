/* eslint-disable no-unused-vars */
import React from "react";
import img1 from "../../../assets/pensionNegada.jpg"
import img2 from "../../../assets/incremento.jpg"
import img3 from "../../../assets/reliquidacionVejez.jpg"
import img4 from "../../../assets/retroactivo.jpg"
import img5 from "../../../assets/traslado.jpg"
import img6 from "../../../assets/extranjero.jpg"
import img7 from "../../../assets/proyeccion.jpg"
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
          Pension de ámbito Natural
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
              Pensiones Negadas.
            </motion.h1>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              Le negaron la pensión de vejez, invalidez o sobreviviente? No
              importa cuántos años hayan pasado, aún podemos revisar su caso y
              determinar si tiene el derecho. Nuestra experiencia nos demuestra
              que el 75% de las pensiones que fueron negadas si se tenía el
              derecho a ellas.
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
              Incremento de Pensión.
            </motion.h1>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              Los Pensionados por vejez de Colpensiones, pueden incrementar su pensión en un 14% por esposa
              o compañera permanente, en un 7% por cada hijo hasta los 16 años de edad o hasta los 18 si es
              estudiante y por hijos declarados inválidos, siempre que éstos dependan económicamente del pensionado,
              es decir que no estén laborando ni sean pensionados.
            </motion.p>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              Pensionados por invalidez de origen común, también tienen derecho a este beneficio, siempre que su
              pensión se haya causado antes de 1994.
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
              Reliquidación de la Pensión.
            </motion.h1>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              El 80% de los pensionados están mal liquidados, es muy importante
              llevar a cabo el trámite de reliquidación, para el cual hacemos previamente
              el estudio y determinamos la diferencia entre la pensión que está recibiendo
              y la que legalmente le corresponde, este estudio es muy importante pues no
              hacerlo puede ocasionarle un grave perjuicio. Hemos logrado la reliquidación
              para miles de pensionados hasta en un 90%.
            </motion.p>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              La reliquidación es posible tanto en pensiones de vejez como de invalidez y sobrevivientes.
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
              Retroactivo Pensional de Intereses Moratorios.
            </motion.h1>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              Las entidades de seguridad social, como Colpensiones o los fondos privados, usualmente
              niegan estos derechos argumentando normas o disposiciones legales que le son menos
              favorables al pensionado. El término para reclamar estos derechos es de tres (3) años,
              contados a partir del momento en que se recibe la notificación del reconocimiento de la
              pensión o bien desde que estos son negados.
            </motion.p>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              Generalmente es necesario acudir a la vía de la demanda laboral para que un juez ordene
              el reconocimiento y pago de éstos.
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
              Traslado de Régimen.
            </motion.h1>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              Pensionarse por Colpensiones o por un fondo privado implica grandes diferencias, en el monto de la mesada pensional,
              edad requerida y fecha de reconocimiento entre otros, por eso es tan importante antes de solicitar un traslado
              tener una asesoría correcta. No necesariamente lo que le conviene a una persona le conviene a otra, se trata
              de saber en cada caso específico cual es la mejor alternativa.
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
              Colombianos en el Exterior.
            </motion.h1>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              Si Usted cotizó algún tiempo en Colombia y se fue a vivir al extranjero esas semanas
              no se pierden, a través de nosotros inicie la investigación de esos tiempos, para
              determinar si debe continuar cotizando o reclamar los derechos que puedan corresponderle,
              incluso aplicando convenios internacionales para sumar tiempos.
            </motion.p>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              Los pensionados Colombianos, cuya residencia está fuera del país, tienen derecho al
              reintegro de porcentajes pensionales que le son descontados de su mesada pensional
              y está reclamación puede hacerse de forma retroactiva.
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
              Proyecte su pensión.
            </motion.h1>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              Muchos litigios y pérdidas de derechos se evitarían si las personas no esperaran
              hasta cumplir la edad de pensión para empezar a preocuparse por su situación pensional,
              saber qué ley le cobija, cuales son los requisitos que aplican y como puede desde ya
              mejorar su monto pensional, son razones más que suficientes para solicitar su estudio
              de pensión anticipado.
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
