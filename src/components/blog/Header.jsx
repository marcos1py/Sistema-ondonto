import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isBlogPage, setIsBlogPage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Verifica se a URL contém "/blog"
    setIsBlogPage(window.location.pathname.includes("/blog"));
  }, []); // Executa apenas uma vez no carregamento inicial



  return (
    <div className="backgrond ">
      <div className=" flex p-5 px-5 items-center">
        <div className=" mr-10 ">
          <Link
            onClick={() => navigate("/")}

            className="flex items-center font-semibold  text-3xl p-1 cursor-pointer"
          >
            <img src="/img/logo.png" alt="Logo" className="w-9 h-8 mr-2 " />
           Confia
          </Link>
        </div>
        <div className="flex-grow"></div>
        <div className="flex gap-5 font-medium text-lg items-center">
          <Link
            className="hover:text-[#A7CEFC] transition-all cursor-pointer"
            onClick={() => navigate("/")}
            to="sobre"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
          <div
            className={`${
              isBlogPage ? "text-[#A7CEFC]" : "hover:text-[#A7CEFC]"
            } transition-all cursor-pointer`}
            onClick={() => navigate("/blog")}
          >
            Blog
          </div>
        </div>

      </div>

    </div>
  );
};

export default Header;
