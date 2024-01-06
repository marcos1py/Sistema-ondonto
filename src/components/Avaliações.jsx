import React from "react";

const Avaliacoes = () => {
  return (
    <section className="">

      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">

        <h2 className="text-center text-4xl font-bold tracking-tight  sm:text-5xl">
          Depoimentos
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          {/* Avaliação 1 - Barbeiro */}
          <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
            
            <div className="flex items-center gap-4">
              <img
                alt="Man"
                src="../img/barbeiro.jpeg"
                className="h-14 w-14 rounded-full object-cover"
              />

              <div>
                <div className="flex justify-center gap-0.5 text-sky-500">
                  {/* Ícones de avaliação */}
                </div>

                <p className="mt-0.5 text-lg font-medium text-gray-900">
                  João Silva
                </p>
                <p className="mt-0.5  text-gray-600">
                  Barbeiro
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-700">
              Agradeço muito pela criação da landing page! Ela atraiu mais clientes para o meu salão de barbearia e me ajudou a organizar melhor as agendas. A experiência tem sido incrível, e estou ansioso para continuar usando os seus serviços.
            </p>
          </blockquote>

          {/* Avaliação 2 - Dentista */}
          <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-4">
              <img
                alt="Man"
                src="./img/dentista.jpeg"
                className="h-14 w-14 rounded-full object-cover"
              />

              <div>
                <div className="flex justify-center gap-0.5 text-sky-500">
                  {/* Ícones de avaliação */}
                </div>

                <p className="mt-0.5 text-lg font-medium text-gray-900">
                  Maria Oliveira
                </p>
                <p className="mt-0.5  text-gray-900">
                  Dentista
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-700">
              A landing page que vocês criaram foi essencial para o meu consultório odontológico. Ela não apenas atraiu novos pacientes, mas também simplificou o agendamento, proporcionando uma gestão mais eficiente. Obrigada por contribuir para o sucesso da minha clínica.
            </p>
          </blockquote>

          {/* Avaliação 3 - Empresário */}
          <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-4">
              <img
                alt="Man"
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                className="h-14 w-14 rounded-full object-cover"
              />

              <div>
                <div className="flex justify-center gap-0.5 text-sky-500">
                  {/* Ícones de avaliação */}
                </div>

                <p className="mt-0.5 text-lg font-medium text-gray-900">
                  Carlos Lima
                </p>
                <p className="mt-0.5  text-gray-900">
                  Empresário
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-700">
              Estou extremamente satisfeito com a landing page desenvolvida para a minha empresa. Ela trouxe mais visibilidade, atraiu clientes em potencial e facilitou o acesso rápido às informações cruciais. Obrigado por contribuir para o crescimento do meu negócio!
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Avaliacoes;
  