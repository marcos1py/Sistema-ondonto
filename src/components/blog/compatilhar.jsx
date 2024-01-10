import React from 'react';

const Compatilhar = () => {
    return (
        <div className="flex flex-col items-center mt-6  p-4 rounded-md">
          <h2 className="text-lg font-bold mb-2">Compartilhe:</h2>
          <div className="flex space-x-4">
            {/* Adicione as classes do Tailwind CSS para estilizar os botões */}
            <button className="bg-blue-500 text-white py-2 px-4 rounded">
              Facebook
            </button>
            <button className="bg-blue-300 text-white py-2 px-4 rounded">
              Twitter
            </button>
            <button className="bg-blue-700 text-white py-2 px-4 rounded">
              LinkedIn
            </button>
            <button className="bg-green-500 text-white py-2 px-4 rounded">
              WhatsApp
            </button>
            <button className="bg-gray-700 text-white py-2 px-4 rounded">
              Email
            </button>
          </div>
        </div>
    );
}

export default Compatilhar;
