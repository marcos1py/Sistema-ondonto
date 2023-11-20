import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <div className="backgrond">
      <div className="flex p-5 px-5 items-center">
        <div className=" mr-10 ">
          <Link
            to="#"
            className="flex items-center font-semibold  text-3xl p-1 cursor-pointer"
          >
            <img src="../Sistema-ondonto/img/logo.png" alt="Logo" className="w-9 h-8 mr-2 " />
            Confia
          </Link>
        </div>
        <div className="flex-grow"></div>
        <div className="hidden md:flex gap-5 font-medium text-lg items-center">
          <Link
            className="hover:text-[#A7CEFC] transition-all cursor-pointer"
            to="sobre"
            spy={true}
            smooth={true}
            duration={500}
          >
            Quem Somos?
          </Link>
          <Link
            className="hover:text-[#A7CEFC] transition-all cursor-pointer"
            to="beneficios"
            spy={true}
            smooth={true}
            duration={500}
          >
            Benefícios
          </Link>
          <Link
            className="hover:text-[#A7CEFC] transition-all cursor-pointer"
            to="Depoimentos"
            spy={true}
            smooth={true}
            duration={500}
          >
            Depoimentos
          </Link>
          <Link
            className="hover:text-[#A7CEFC] transition-all cursor-pointer "
            to="blog"
            spy={true}
            smooth={true}
            duration={500}
          >
            Blog
          </Link>
          <Link
            className="text-base leading-6 text-gray-100 hover:text-sky-300 cursor-pointer"
            to="Contato"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contato
          </Link>
          <Link
            className="text-base leading-6 text-gray-100 hover:text-sky-300 cursor-pointer mr-5"
            to="faq"
            spy={true}
            smooth={true}
            duration={500}
          >
            FAQ
          </Link>
        </div>
        <div className="md:flex gap-2">
        <Link  to="/login" spy={true} smooth={true} duration={500}>
            <button
              href="#"
              className=" bg-[#FFE492] hover:bg-yellow-400  hover:text-white m-3 text-black font-bold py-2 px-4 rounded">
              Login
            </button>
          </Link>

          <Link  to="Contato" spy={true} smooth={true} duration={500}>
            <button
              href="#Contato"
              className="bg-blue-500 hover:bg-blue-700 m-3 text-white font-bold py-2 px-4 rounded">
              Conhecer
            </button>
          </Link>
        </div>
        <div className="flex md:hidden" onClick={handleChange}>
          <div className="p-2">
            <AiOutlineMenu size={22} />
          </div>
        </div>
      </div>
      <div
        className={` ${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-blue-500 left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 `}
      >
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#A7CEFC] transition-all cursor-pointer"
        >
          Quem Somos?
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#A7CEFC] transition-all cursor-pointer"
        >
          Benefícios
        </Link>
        <Link
          to="courses"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#A7CEFC] transition-all cursor-pointer"
        >
          Depoimentos
        </Link>
        <Link
          to="reviews"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#A7CEFC] transition-all cursor-pointer"
        >
          Blog
        </Link>
        <Link
          className="text-base leading-6 text-gray-100 hover:text-sky-300 cursor-pointer"
          to="Contato"
          spy={true}
          smooth={true}
          duration={500}
        >
          Contato
        </Link>
        <Link
          className="text-base leading-6 text-gray-100 hover:text-sky-300 cursor-pointer"
          to="faq"
          spy={true}
          smooth={true}
          duration={500}
        >
          FAQ
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
