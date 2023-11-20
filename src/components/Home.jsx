import React, { useState } from "react";
import { Link } from "react-scroll";
const Home = () => {
    return (
        <div className="backgrond">
            <div class="linhaFundo">
                <div className="min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
                    <div className=" md:w-2/4 text-center">
                        <h2 className="text-5xl font-semibold leading-tight">
                            Um sistema que voce <br />pode<span className="text-sky-400"> Confia</span>

                        </h2>
                        <p className="  mt-5 text-start">
                            Potencialize sua clínica odontológica com eficiência
                            através de um SaaS integrado para agendamento,
                            prontuário eletrônico e gestão financeira. Transforme a
                            experiência do seu consultório com praticidade.
                        </p>

                        <Link to="Contato" spy={true} smooth={true} duration={500}>
                            <button  href="#Contato" className="bg-blue-500 hover:bg-blue-700 m-3 text-white font-bold py-2 px-4 rounded">
                                Quero Conhecer
                            </button>
                        </Link>
                    </div>

                    <div className=" w-full md:w-2/4">
                    <img src="../Sistema-ondonto/img/Banner1.png " alt="mulher" />

                    </div>
                </div>
            </div>

        </div>


    );
};

export default Home;