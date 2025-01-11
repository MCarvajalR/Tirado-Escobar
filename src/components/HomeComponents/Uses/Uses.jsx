// eslint-disable-next-line no-unused-vars
import React from "react";
import Img1 from "../../../assets/natural.png";
import Img2 from "../../../assets/profesor.png";
import Img3 from "../../../assets/familia.png";

const Uses = () => {
  return (
    <section className="hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div className="flex flex-col justify-center xl:pr-14">
            <h1 className="text-4xl font-bold text-darkBlue">
              ¿Cómo podemos ayudarte?
            </h1>
            <p className="text-xl text-gray-400 mt-4">
              Contamos con diferentes servicios de derecho a una pensión que se
              pueden ajustar a tu necesidad o situación en la que te encuentres.
            </p>
            <p className="text-gray-400 mt-4">
              Podrás consultar a detalle cada una con solo darle clic al boton
              de cada categoría o simplemente enviandonos un formulario de
              contacto.
            </p>
            <button className="w-fit mt-4 border border-gray-200 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transform duration-300">
              <a href="">Clic para saber más</a>
            </button>
          </div>
          <div>
            <img src={Img1} alt="" className="w-full rounded-3xl" />
            <p className="text-gray-400 mt-4">Pension Natural</p>
          </div>
          <div>
            <img src={Img2} alt="" className="w-full rounded-3xl" />
            <p className="text-gray-400 mt-4">Pensión Docentes</p>
          </div>
          <div>
            <img src={Img3} alt="" className="w-full rounded-3xl" />
            <p className="text-gray-400 mt-4">Derecho Familiar</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Uses;
