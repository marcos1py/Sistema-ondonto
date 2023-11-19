import React from 'react';

function FAQ() {
  return (
    <div className="container mt-10 mx-auto md:px-7">
      <section className="mb-32">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="mb-6 md:mb-0">
          <h2 className="text-5xl font-semibold leading-tight">
                            Perguantas mais <br /> frequentes<span className="text-sky-400"> </span>

                        </h2>

            <p className="font-bold">
              <br />
              Esta com outra duvida?
              <a
                href="#Contato"
                className="font-bold text-sky-400  transition duration-300 hover:text-sky-300 "
              >
                Entra em contato com suporte
              </a>
              .
            </p>
          </div>

          <div className="mb-6 md:mb-0">
            <p className="mb-4 font-bold text-sky-400 ">
            Como o software protege a privacidade e segurança dos dados dos pacientes?
            </p>
            <p className="mb-12 text-black ">
            Adotamos medidas robustas de segurança, incluindo criptografia de dados, controle de acesso restrito e procedimentos regulares de backup. Priorizamos a privacidade dos pacientes e cumprimos todas as normas e regulamentações relacionadas à segurança de informações médicas.
            </p>

            <p className="mb-4 font-bold text-sky-400 ">
            Como posso adquirir o software para minha clínica odontológica?
            </p>
            <p className="mb-12 text-black ">
            Para adquirir o software, é necessário passar por um processo de seleção. Nossa equipe avaliará as necessidades específicas da sua clínica, o número de profissionais envolvidos e outros requisitos para garantir que a solução seja personalizada de acordo com suas demandas. Entre em contato conosco para iniciar o processo de seleção e discutir as opções disponíveis. Estamos comprometidos em proporcionar uma experiência adaptada às suas necessidades e garantir o máximo benefício do software para o seu consultório.            </p>

            <p className="mb-4 font-bold text-sky-400 ">
            Quanto custa a implementação do software para minha clínica odontológica?
            </p>
            <p className="mb-12 text-black ">
            O custo da implementação do software pode variar com base nas necessidades específicas da sua clínica, tamanho e funcionalidades adicionais desejadas. Recomendamos entrar em contato com nossa equipe de suporte ou agendar uma demonstração para discutir suas exigências e receber uma cotação personalizada. Estamos comprometidos em oferecer opções acessíveis e flexíveis para atender às diversas demandas dos profissionais de odontologia.            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
