import React from "react";

const Blog = () => {
  return (
    <section class="">
      <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 class="text-center text-4xl font-bold tracking-tight  sm:text-5xl">
        Blog
        </h2>

        <div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">

          <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
            <div class="flex items-center gap-4">
            <img src="../Sistema-ondonto/src/assets/images/Banner1.png" alt="img" />
            <img src="../Sistema-ondonto/assets/images/Banner1.png" alt="img" />
            </div>
            <div>

              <p class="mt-0.5 text-lg font-medium text-gray-900">
               Desvendando o Software Ondonto
              </p>
            </div>
            <p class="mt-4 text-gray-700">
            Explore os detalhes do software Ondonto e descubra
             como ele revoluciona a prática odontológica no Brasil
             . De gestão eficiente de pacientes a inovações tecnológicas,
              mergulhe nas características que tornam este software uma escolha 
              indispensável para profissionais comprometidos.
            </p>
            <div class="theme-text text-center">
            <button className="text-center bg-blue-500 hover:bg-blue-700 m-3 text-white font-bold py-2 px-4 rounded">
                Ler mais sobre
            </button>
          </div>
          </blockquote>
          
          <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
            <div class="flex items-center w-100">
              <img src="../img/Banner1.png" alt="img" />
            </div>
            <div>

              <p class="mt-0.5 text-lg font-medium text-gray-900">
              Como a Ondonto Transformou Consultórios Odontológicos
              </p>
            </div>
            <p class="mt-4 text-gray-700">
            Conheça histórias inspiradoras de profissionais da 
            odontologia que adotaram a Ondonto em seus consultórios.
            Aumento na eficiência, melhorias na experiência do paciente e
             conquistas notáveis – saiba como essa solução está transformando
              vidas profissionais.
            </p>
            <div class="theme-text text-center">
            <button className="text-center bg-blue-500 hover:bg-blue-700 m-3 text-white font-bold py-2 px-4 rounded">
                Ler mais sobre
            </button>
          </div>
          </blockquote>
          
          <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
            <div class="flex items-center gap-4">
            <img src="../Sistema-ondonto/img/Banner1.png" alt="img" />
            </div>
            <div>

              <p class="mt-0.5 text-lg font-medium text-gray-900">
               Tendências Odontológicas no Brasil:
              </p>
            </div>
            <p class="mt-4 text-gray-700">
            Descubra as últimas tendências na odontologia brasileira 
            e como a Ondonto tem liderado a inovação. De materiais avançados 
            a abordagens de tratamento pioneiras, explore o que está moldando 
            o futuro da saúde bucal no Brasil.
            </p>
            <div class="theme-text text-center">
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
