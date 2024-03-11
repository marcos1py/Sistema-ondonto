import React, { useState } from "react";
import { Link } from "react-scroll";

import BtnWhatsapp from "./BtnWhatsapp";
const Home = () => {
    const handleClick = () => {
        // Chamando o código de rastreamento do Facebook
        fbq('track', 'Contact');
      };
    
  return (
    <div className="backgrond">
      <div class="linhaFundo">
        <div className="min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
          <div className=" md:w-2/4 text-center">
            <h1 className="text-5xl font-semibold leading-tight text-left" >
              Tenha um Site <span className="text-sky-400">profissional </span> 
              e aumente <span className="text-sky-400">suas vendas</span>.
            </h1>
            <p className="mt-5 text-start text-2xl">
              Você pode contar com profissionais que entendem exatamente o que
              você quer e trabalham com agilidade e eficiência. <br /> <span className="font-semibold"> O trabalho só
              termina quando você aprova!</span>
            </p>
            <p className="mt-5  text-sky-400">
                R$ 957,00 ANUAL + 1 manuteçao gratuita mensal
            </p>  
    <div className="mt-9">
              <a
                href="https://wa.me/5562993398590?text=Oi%2C+queria+solicitar+um+orçamento."
                className="bg-blue-600 hover:bg-blue-700 m-3 mt-9 text-white font-bold py-2 px-4 rounded"
                target="_blank"
                onClick={handleClick} //
              >
                Falar com um especialista
              </a>
    </div>
          </div>
          <div className=" w-full md:w-1/3">
            <img src="./img/imagem-home.png " alt="" />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
