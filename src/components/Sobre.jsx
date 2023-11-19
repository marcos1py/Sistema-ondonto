import React from "react";
import { Link } from "react-scroll";

const Sobre = () => {
    return (
    

        <div className=" mt-1 mb-20 flex flex-col-reverse md:flex-row items-center gap-5 ">

            <div className=" w-full md:w-2/4">
                <img src='Sistema-ondonto/img/BannerSobre.png' alt="img" />
            </div>
            <div className="w-full md:w-3/4 text-center space-y-11 m-10 p-10">
                <h3 className="text-4xl font-semibold " >
                    <span className="text-sky-400 mb-10" >Sobre</span>
                </h3>

                <p className=" ">
                Potencialize a administração da sua clínica odontológica
                 com o Confia, o SaaS que oferece uma solução integrada 
                 para agendamento, prontuário eletrônico, gestão financeira e 
                 muito mais. Transforme a experiência do seu consultório com 
                 eficiência e praticidade!

                </p>
                <Link to="Contato" spy={true} smooth={true} duration={500}>
                            <button  href="#Contato" className="bg-blue-500 hover:bg-blue-700 m-3 text-white font-bold py-2 px-4 rounded">
                                Quero Conhecer
                            </button>
                        </Link>
            </div>
        </div>
    );
};

export default Sobre;