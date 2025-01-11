// eslint-disable-next-line no-unused-vars
import React from "react";
import Card from "./CardComp.jsx";
import Icon1 from "../../../assets/natural.png";
import Icon2 from "../../../assets/profesor.png";
import Icon3 from "../../../assets/familia.png";
import Icon4 from "../../../assets/administrativo.png";
import Icon5 from "../../../assets/publico.png";
import { motion } from "framer-motion";
import { SlideUp, SlideDown } from "../../../utility/animation.jsx";

const Services = () => {
  return (
    <section>
      <div className="container py-16">
        <motion.div
          variants={SlideDown(0.1)}
          whileInView={"animate"}
          initial="initial"
          className="py-10 text-center"
        >
          <h1 className="text-4xl font-bold text-darkBlue">
            ¿Cómo podemos ayudarte?
          </h1>
          <p className="text-xl text-gray-400 mt-4">
            Contamos con diferentes servicios de derecho a una pensión que se
            pueden ajustar a tu necesidad o situación en la que te encuentres.
          </p>
          <p className="text-gray-400 mt-4">
            Podrás consultar a detalle cada una con solo darle clic al boton de
            cada categoría o simplemente enviandonos un formulario de contacto.
          </p>
        </motion.div>

        <div className="col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-5">
            <motion.div
              variants={SlideUp(0.1)}
              whileInView={"animate"}
              initial="initial"
            >
              <Card
                icon={Icon1}
                heading="Pensión de ámbito natural"
                text="Consultar"
                link="/natural"
              />
            </motion.div>
            <motion.div
              variants={SlideUp(0.25)}
              initial="initial"
              whileInView="animate"
            >
              <Card
                icon={Icon2}
                heading="Pensión para los docentes"
                text="Consultar"
                link="/docentes"
              />
            </motion.div>
            <motion.div
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
            >
              <Card
                icon={Icon3}
                heading="Derecho de la familia"
                text="Consultar"
                link="/familiar"
              />
            </motion.div>
            <motion.div
              variants={SlideUp(0.55)}
              initial="initial"
              whileInView="animate"
            >
              <Card
                icon={Icon4}
                heading="Derecho Administrativo"
                text="Consultar"
                link="/administrativo"
              />
            </motion.div>
            <motion.div
              variants={SlideUp(0.7)}
              initial="initial"
              whileInView="animate"
            >
              <Card
                icon={Icon5}
                heading="Pensiones de Fuerza Pública"
                text="Consultar"
                link="/fuerzaPublica"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
