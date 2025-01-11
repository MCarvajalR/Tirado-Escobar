// eslint-disable-next-line no-unused-vars
import React from "react";
import Form from "../Form/Form.jsx";
import HeroImage from "../../../assets/atencionFormulario.png";

const Hero = () => {
  return (
    <section>
      <div className="bg-brandWhite container grid grid-cols-1 md:grid-cols-2 gap-14 max-w-full">
        {/*image section*/}
        <div className="flex items-center justify-center px-20 ">
          <img src={HeroImage} alt="" className="w-full rounded-3xl" />
        </div>
        {/*text section*/}
        <div className="mx-8 scale-90">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Hero;
