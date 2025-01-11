/* eslint-disable no-unused-vars */
import React from "react";
import img1 from "../../../assets/divorcio.jpg";
import img2 from "../../../assets/herencia.jpg";
import img3 from "../../../assets/interdiccion.jpg";
import img4 from "../../../assets/negacion.jpg";
import img5 from "../../../assets/alimentos.jpg";
import img6 from "../../../assets/Capitulaciones.jpg"
import img7 from "../../../assets/custodia.jpg";
import img8 from "../../../assets/patria.png";
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
          Derecho de la Familia
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
              Divorcios.
            </motion.h1>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              El divorcio se da entre dos personas que contrajeron matrimonio,
              ya sea por los ritos de la iglesia católica o bien por lo civil y desean terminar con éste.
            </motion.p>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              El divorcio puede adelantarse por notaria y/o juzgado cuando hay común acuerdo
              entre las partes, pero cuando las partes están en desacuerdo debe hacerse por
              juzgado invocando una de las causales contempladas en la ley.
            </motion.p>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              Dentro del divorcio se solicita además la liquidación de la sociedad conyugal,
              bien sea que existan bienes o no al momento de practicarla.
            </motion.p>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              En el caso de las personas que conviven en unión libre no es viable adelantar
              trámites de divorcio, ni tampoco es necesario excepto hayan bienes por liquidar,
              pero entonces no estaríamos frente a un divorcio, se trataría de una liquidación
              de sociedad patrimonial, para lo cual debe solicitarse previamente la declaración
              de la unión marital de hecho ante el juez de familia.
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
              Sucesiones.
            </motion.h1>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              La sucesión de la herencia puede ser testada o intestada, la primera se da cuando
              el difunto ha dejado un testamento en el que estipula como quiere que sean repartidos
              sus bienes, y la segunda cuando no hay testamento.
            </motion.p>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              Se abre la sucesión de los bienes, a partir de la muerte y el proceso se
              debe seguir en el último domicilio del causante.
            </motion.p>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              Se puede hacer por notaria: cuando todos los herederos están de acuerdo en su
              realización y partición de los bienes del fallecido o por juzgado cuando no hay acuerdo
              entre los herederos del fallecido, en cuanto a la repartición de los bienes de éste.
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
              Interdicción.
            </motion.h1>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              Es un proceso que se adelanta ante el Juez de familia, en el que se solicita
              que se declare interdicto a una persona que por una situación de enfermedad mental
              no puede cuidarse, ni hacerse cargo de sus propios negocios.
            </motion.p>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              Los procesos de interdicción usualmente se adelantan en los casos que el interdicto
              es beneficiario de una pensión o va a heredar bienes.
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
              Demanda de filiación.
            </motion.h1>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              Este proceso se refiere a los hijos que aseguran serlo de un determinado padre
              sin que éste acepte darles el apellido.
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
              Demanda de alimentos.
            </motion.h1>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              En este proceso se trata el sostenimiento integral de un hijo (a) menor o siendo
              mayor de edad pero menor de 25 años se encuentre estudiando. El
              demandado es el padre o madre que se rehúsa a cumplir con sus obligaciones económicas
              respecto del hijo (a).
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
              Capitulaciones
            </motion.h1>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              Son las que se celebran antes de contraer matrimonio civil o religioso,
              con el fin de proteger los bienes que se tengan o adquieran con posterioridad
              al matrimonio, con esta figura se evita adelantar trámites de separaciones
              de bienes, en caso de divorcio.
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
              Custodia.
            </motion.h1>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              De conformidad con la Ley, la custodia de los menores deben
              asumirla directamente sus padres. En situaciones, en las que los padres
              ya no conviven juntos es necesario llegar a un acuerdo respecto de quien
              estará a cargo del menor, puede darse la figura de una custodia compartida
              o bien recaer en cabeza de uno de los padres, sin que esto implique la pérdida del
              contacto del otro padre con su hijo menor.
            </motion.p>
          </div>
        </div>
        {/*Image section*/}
        <div className="flex flex-col justify-center">
          <img src={img7} alt="" className="w-full rounded-3xl"/>
        </div>
      </div>
      {/*Octava seccion*/}
      <div className="bg-brandWhite rounded-3xl container grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[650px]">
        {/*Image section*/}
        <div className="flex flex-col justify-center">
          <img src={img8} alt="" className="w-full rounded-3xl"/>
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
              Perdida de la patria potestad.
            </motion.h1>
            <motion.p
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              Ante el maltrato físico o psicológico u otras de las tantas causales que enumera
              la ley, uno de los padres puede solicitar que el otro pierda la patria potestad
              del hijo, para lo cual es necesario adelantar proceso ante el juez de familia.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
