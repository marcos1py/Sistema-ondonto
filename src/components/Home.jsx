import React, { useState } from "react";
import { Link } from "react-scroll";
const Home = () => {
    return (
        <div className="backgrond">
            <div class="linhaFundo">
                <div className="min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
                    <div className=" md:w-2/4 text-center">
                        <h2 className="text-5xl font-semibold leading-tight">
                        Uma empresa de criação de sites em que você pode <span className="text-sky-400">Confiar</span>.
                        </h2>
                        <p className="  mt-5 text-start">
                        Eleve a presença online de sua empresa
                         com eficiência através de um sites, otimizando a experiência 
                          do usuário. Transforme a visibilidade de sua
                           marca com praticidade e qualidade.
                        </p>

                        <Link to="Contato" spy={true} smooth={true} duration={500}>
                            <button  href="#Contato" className="bg-blue-600 hover:bg-blue-700 m-3 mt-9 text-white font-bold py-2 px-4 rounded">
                                Quero Conhecer
                            </button>
                        </Link>
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