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
              Pensiones Negadas
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
              Incremento de Pensión
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
              Reliquidación de la Pensión
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
              Retroactivo Pensional e Intereses Moratorios
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
            Pensionados por invalidez de origen común, también tienen derecho a este beneficio, siempre que su 
            pensión se haya causado antes de 1994.
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
              Traslado de régimen
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
              Colombianos en el Exterior
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
            Pensionados por invalidez de origen común, también tienen derecho a este beneficio, siempre que su 
            pensión se haya causado antes de 1994.
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
              Proyecte su pensión
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
          <img src={HeroTirado} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
