import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/blog/Footer";

const Portifolio = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <main className="container mx-auto p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600 mb-2">Portfólio</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg">
            <img
              src="./img/telaPcSite1.png"
              alt="Projeto 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Landing page</h3>
              <p className="text-gray-600">Landing page para um empresa no aramo de aviaçao que falava quem eles sao.</p>
            </div>
          </div>
          <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg">
            <img
              src="./img/telaPcSite3.png"
              alt="Projeto 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Sistema de Cinema </h3>
              <p className="text-gray-600">Sistema Desktop para gerenciar compras de ingresso e funcionas, podendo colocar filme. (Desktop)</p>
            </div>
          </div>
          <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg">
            <img
              src="./img/telaPcSite4.png"
              alt="Projeto 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Sistema de gestao de projetos </h3>
              <p className="text-gray-600">Sistema de projetos que usa kanbam, para gerenciar projetos.(Web) </p>
            </div>
          </div>
          <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg">
            <img
              src="./img/telaPcSite2.png"
              alt="Projeto 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Aplicativo mobile</h3>
              <p className="text-gray-600">Cliente q vendia trufas solicitol um app para calcular os lucros e gastos, algo para ajudar ele no dia dia.</p>
            </div>
          </div>
          <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg">
            <img
              src="./img/telaPc2.png"
              alt="Projeto 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Nome do Projeto</h3>
              <p className="text-gray-600">Descrição breve do projeto.</p>
            </div>
          </div>
          <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="./img/telaPc2.png"
              alt="Projeto 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Nome do Projeto</h3>
              <p className="text-gray-600">Descrição breve do projeto.</p>
            </div>
          </div>

        </div>
      </main>

      <div className="bg-blue-800">
        <Footer />
      </div>
    </div>
  );
};

export default Portifolio;
