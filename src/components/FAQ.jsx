import React from 'react';

function FAQ() {
  return (
    <div className="container mt-10 mx-auto md:px-7">
      <section className="mb-32">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="mb-6 md:mb-0">
            <h2 className="text-5xl font-semibold leading-tight">
              Perguntas mais <br /> frequentes<span className="text-sky-400"> </span>
            </h2>

            <p className="font-bold">
              <br />
              Ainda tem dúvidas?
              <a
                href="#Contato"
                className="font-bold text-sky-400  transition duration-300 hover:text-sky-300 "
              >
                Entre em contato com o suporte
              </a>
              .
            </p>
          </div>

          <div className="mb-6 md:mb-0">
            {/* Pergunta 1 */}
            <p className="mb-4 font-bold text-sky-400 ">
              Qual é o prazo de entrega para a criação de uma landing page?
            </p>
            <p className="mb-12 text-black ">
              Resposta: Nosso prazo padrão de entrega para a criação de uma landing page personalizada é de duas semanas a partir da confirmação do pedido. Esse período permite que nossa equipe dedique a atenção necessária para garantir um produto final de alta qualidade.
            </p>

            {/* Pergunta 2 */}
            <p className="mb-4 font-bold text-sky-400 ">
              Qual é a forma de pagamento oferecida pela empresa?
            </p>
            <p className="mb-12 text-black ">
              Resposta: Oferecemos uma opção conveniente de pagamento anual para nossos clientes. Isso significa que você pode pagar pela criação da sua landing page uma vez por ano, simplificando o processo e garantindo acesso contínuo aos nossos serviços ao longo do período contratado.
            </p>

            {/* Pergunta 3 */}
            <p className="mb-4 font-bold text-sky-400 ">
              Como posso solicitar personalizações adicionais na minha landing page?
            </p>
            <p className="mb-12 text-black ">
              Resposta: Se você precisar de personalizações adicionais ou tiver requisitos específicos para a sua landing page, entre em contato conosco através do nosso suporte. Estamos prontos para discutir suas necessidades e garantir que sua landing page atenda às expectativas da sua marca.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
