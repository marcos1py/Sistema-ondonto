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
              Porque podemos e<span>te ajudar?</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-4">
            {/* Benefício 1 */}
            <div className="singel-pricing p-8">
              <h4>Gestão Eficiente de Pacientes</h4>
              <p>
                Armazenamento seguro de informações do paciente, histórico
                médico e odontológico.
              </p>
              <p>
                Acesso rápido a dados relevantes durante consultas e
                procedimentos.
              </p>
            </div>

            {/* Benefício 2 */}
            <div className="singel-pricing p-8">
              <h4>Agendamento e Controle de Consultas</h4>
              <p>
                Facilita o agendamento de consultas, evitando conflitos de
                horários.
              </p>
              <p>
                Lembretes automáticos para pacientes, reduzindo o índice de faltas.
              </p>
            </div>

            {/* Benefício 3 */}
            <div className="singel-pricing p-8">
              <h4>Prontuário Eletrônico</h4>
              <p>
                Substituição dos registros em papel por um sistema digital,
                promovendo organização e redução de erros.
              </p>
              <p>
                Facilita o compartilhamento de informações entre profissionais
                de saúde.
              </p>
            </div>

            {/* Benefício 4 */}
            <div className="singel-pricing p-8">
              <h4>Controle Financeiro</h4>
              <p>
                Gerenciamento de pagamentos, faturamento e controle de despesas.
              </p>
              <p>
                Geração de relatórios para análise financeira.
              </p>
            </div>

            {/* Benefício 5 */}
            <div className="singel-pricing p-8">
              <h4>Atualizações e Inovações</h4>
              <p>
                Recebimento de atualizações regulares para se adaptar a mudanças
                nas práticas odontológicas.
              </p>
              <p>
                Integração com novas tecnologias e inovações na área da saúde.
              </p>
            </div>

            {/* Benefício 6 */}
            <div className="singel-pricing p-8">
              <h4>Segurança e Backup</h4>
              <p>
                Garantia de segurança dos dados do paciente.
              </p>
              <p>
                Rotinas automáticas de backup para evitar perda de informações.
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
