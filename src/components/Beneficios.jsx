import React from "react";
import { Link } from "react-scroll";

const Beneficios = () => {
  return (
    <div>
      <section className="your-work-area">
        <div className="">
          <div className="theme-text text-center">
            <h3
              id="beneficios"
              className="text-5xl font-semibold leading-tight"
            >
              Como podemos <span>te ajudar?</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-4">
            {/* Benefício 1 */}
            <div className="singel-pricing p-8">
              <h4>Design Personalizado e Atraente</h4>
              <p>
                Utilizando HTML, CSS e JavaScript, criamos landing pages
                personalizadas e visualmente atraentes, alinhadas com a identidade da sua marca.
              </p>
              <p>
                Transmitimos uma mensagem visual forte aos visitantes.
              </p>
            </div>

            {/* Benefício 2 */}
            <div className="singel-pricing p-8">
              <h4>Experiência do Usuário Aprimorada</h4>
              <p>
                O uso de JavaScript proporciona uma experiência interativa e dinâmica.
              </p>
              <p>
                Elementos como animações, transições suaves e validações de formulários melhoram a interação do usuário.
              </p>
            </div>

            {/* Benefício 3 */}
            <div className="singel-pricing p-8">
              <h4>Otimização para Dispositivos Móveis</h4>
              <p>
                Desenvolvemos landing pages responsivas que se adaptam a diferentes tamanhos de tela.
              </p>
              <p>
                Garantimos uma experiência consistente e eficaz, independentemente do dispositivo.
              </p>
            </div>

            {/* Benefício 4 */}
            <div className="singel-pricing p-8">
              <h4>Velocidade de Carregamento Aprimorada</h4>
              <p>
                Otimizamos o código e os recursos da página para melhorar a velocidade de carregamento.
              </p>
              <p>
                Crucial para reter a atenção dos visitantes e melhorar o posicionamento nos motores de busca.
              </p>
            </div>

            {/* Benefício 5 */}
            <div className="singel-pricing p-8">
              <h4>Funcionalidades Interativas</h4>
              <p>
                Utilizamos JavaScript para implementar funcionalidades interativas, como sliders e galerias de imagens dinâmicas.
              </p>
              <p>
                Elementos que envolvem os visitantes, aumentando o engajamento.
              </p>
            </div>

            {/* Benefício 6 */}
            <div className="singel-pricing p-8">
              <h4>Melhoria na Conversão</h4>
              <p>
                Projetamos landing pages eficazes com chamadas para ação claras.
              </p>
              <p>
                A capacidade de personalizar elementos visuais e funcionalidades é fundamental para aumentar as taxas de conversão.
              </p>
            </div>
          </div>
          <div className="theme-text text-center">
            <Link to="Contato" spy={true} smooth={true} duration={500}>
              <button
                href="#Contato"
                className="bg-blue-500 hover:bg-blue-700 m-3 text-white font-bold py-2 px-4 rounded"
              >
                Quero Conhecer
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Beneficios;
