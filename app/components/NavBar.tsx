"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function NavBar() {
  const [navBg, setNavBg] = useState("");
  const [textCl, setTextCl] = useState("");
  const [navShad, setNavShad] = useState("");
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setNavBg("white");
        setTextCl("black");
        setNavShad("lg");
      } else {
        setNavBg("");
        setTextCl("white");
        setNavShad("");
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  return (
    <nav
      className={`h-20 z-10 fixed top-0 w-full shadow-${navShad} bg-${navBg}`}
    >
      <div className="xl:[85%] lg:w-[90%] w-[95%] mx-auto h-full flex justify-between items-center text-white">
        <Link
          href="#home"
          className={`lg:text-4xl text-2xl font-semibold whitespace-nowrap cool-link text-${textCl}`}
        >
          Mercy Saina<span className="text-[#91FF00]">.</span>
        </Link>
        <ul
          className={`lg:flex items-center justify-evenly h-full w-1/2 hidden font-semibold xl:w-1/3 text-${textCl}`}
        >
          <li>
            <Link href="#home" className="cool-link">
              HOME
            </Link>
          </li>
          <li>
            <Link href="#about" className="cool-link">
              WHAT I DO
            </Link>
          </li>
          <li>
            <Link href="#about" className="cool-link">
              PROJECTS
            </Link>
          </li>
          <li>
            <Link href="#about" className="cool-link">
              CONTACT
            </Link>
          </li>
        </ul>
        <div className="w-1/5 h-full lg:flex justify-center items-center hidden">
          <Link
            href="/Mercy_Saina_Resume.pdf"
            className="bg-black py-2 px-5 font-semibold rounded-md shadow-lg hover:bg-white hover:text-black border border-black"
            target="_blank"
          >
            Resume
          </Link>
        </div>
        <div className="w-8 h-5 flex flex-col justify-between items-center text-4xl lg:hidden text-red-400 cursor-pointer overflow-hidden group">
          <span className="w-full h-[2px] bg-blue-500 inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-blue-500 inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-blue-500 inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
