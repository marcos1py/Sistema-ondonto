import React from "react";

const Sobre = () => {
    const handleClick = () => {
        // Chamando o código de rastreamento do Facebook
        fbq('track', 'Contact');
      };
  return (
    <div className="mt-1 mb-20 flex flex-col-reverse md:flex-row items-center gap-5 ">
      <div className="w-full md:w-2/4">
        <img src="./img/BannerSobre.png" alt="img" />
      </div>
      <div className="w-full md:w-3/4 text-center space-y-11 m-10 p-10">
        <h3 className="text-4xl font-semibold ">
          <span className="text-blue-500 mb-10">Sobre</span>
        </h3>

        <p className="text-left">
          <h3 className="text-2xl ">
            Somos especialistas em criar e implantar{" "}
            <span className="text-sky-400 font-semibold">sites institucionais</span> com
            soluções amigáveis e
            <span className="text-sky-400 font-semibold"> totalmente personalizadas</span>.
            <br />
            <br />

            A Confia que atua no mercado há muitos anos oferecendo serviços para
            que seu negócio esteja presente 100% na internet. <br />
            <br />

            Durante toda nossa história, sempre nos diferenciamos pela{" "}
            <span className="text-sky-400 font-semibold">Confiança,
          agilidade, atendimento e personalização </span>, além de toda a capacidade
            técnica da entrega. <br />
            <br />

            Por aqui sempre entendemos o que nossos clientes
            querem, em um nível que eles nem sabem explicar, e nosso trabalho <span className="text-sky-400 font-semibold"> só
            encerra quando o cliente fica satisfeito.</span> 
          </h3>

        </p>

 <div className="mt-5">
 <div className="mt-9">
              <a
                href="https://wa.me/5562993398590?text=Oii%2C+queria+solicitar+um+orçamento."
                className="bg-blue-600 hover:bg-blue-700 m-3 mt-9 text-white font-bold py-2 px-4 rounded"
                target="_blank"
                onClick={handleClick} //
              >
                Falar com um especialista
              </a>
    </div>
 </div>
      </div>
    </div>
  );
};

export default Sobre;
