import React from "react";

const Blog = () => {
  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
          Blog
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">

          {/* Blog Post 1 - Criação de Sites */}
          <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-4">
              <img src="./img/blog1.png" alt="img" className="w-full h-40 object-cover" />
            </div>
            <div>
              <p className="mt-0.5 text-lg font-medium text-gray-900">
                A Importância da Criação de Sites Profissionais
              </p>
            </div>
            <p className="mt-4 text-gray-700">
              Explore por que ter um site profissional é crucial nos dias de hoje. Descubra como a criação de um site impacta positivamente a presença online, atrai clientes e fortalece a identidade digital de qualquer negócio.
            </p>
            <div className="theme-text text-center">
              <button className="text-center bg-blue-500 hover:bg-blue-700 m-3 text-white font-bold py-2 px-4 rounded">
                Ler mais sobre
              </button>
            </div>
          </blockquote>

          {/* Blog Post 2 - Escolhendo Profissionais Experientes */}
          <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-4">
              <img src="./img/blog2.png" alt="img" className="w-full h-40 object-cover" />
            </div>
            <div>
              <p className="mt-0.5 text-lg font-medium text-gray-900">
                Por Que Escolher um Profissional para a Criação do Seu Site?
              </p>
            </div>
            <p className="mt-4 text-gray-700">
              Conheça os benefícios de contar com profissionais experientes na criação do seu site. Desde o design até a otimização para motores de busca (SEO), descubra como especialistas podem fazer a diferença no sucesso online do seu negócio.
            </p>
            <div className="theme-text text-center">
              <button className="text-center bg-blue-500 hover:bg-blue-700 m-3 text-white font-bold py-2 px-4 rounded">
                Ler mais sobre
              </button>
            </div>
          </blockquote>

          {/* Blog Post 3 - Aumentando a Visibilidade com um Site */}
          <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-4">
              <img src="./img/blog3.png" alt="img" className="w-full h-40 object-cover" />
            </div>
            <div>
              <p className="mt-0.5 text-lg font-medium text-gray-900">
                Estratégias para Aumentar a Visibilidade Através do Seu Site
              </p>
            </div>
            <p className="mt-4 text-gray-700">
              Descubra como maximizar a visibilidade online do seu negócio por meio de estratégias eficazes. Desde a otimização de conteúdo até a promoção nas redes sociais, explore maneiras de atrair mais visitantes e potenciais clientes.
            </p>
            <div className="theme-text text-center">
              <button className="text-center bg-blue-500 hover:bg-blue-700 m-3 text-white font-bold py-2 px-4 rounded">
                Ler mais sobre
              </button>
            </div>
          </blockquote>

        </div>
      </div>
    </section>
  );
};

export default Blog;
