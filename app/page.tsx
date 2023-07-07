import NavBar from "./components/NavBar";
import About from "./components/About";
import Image from "next/image";
import TypeAnimation from "./components/TypeAnimation";
import { FaArrowRight } from "react-icons/fa";
import SideSkills from "./components/SideSkills";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <section className="h-screen" id="home">
        <NavBar />
        <div className="flex h-full relative">
          <div className="h-full bg-black w-2/3">
            <div className="flex flex-col justify-center h-full text-white gap-4 w-1/2 mx-auto">
              <h1 className="text-[5rem]">Hi I&apos;m Mercy,</h1>
              <p className="text-4xl p-4 bg-amber-100 border-4 border-[#91FF00] text-black max-w-fit font-semibold">
                I&apos;M A{" "}
                <span className="text-gray-900">
                  <TypeAnimation />
                </span>
              </p>
              <button className="w-fit py-2 px-6 bg-gray-700/20 rounded-md border border-gray-700 mt-7 hover:bg-white hover:text-black flex items-center gap-2">
                Get in touch <FaArrowRight />
              </button>
              <Image
                alt="hero-image"
                src="/main.png"
                width={600}
                height={600}
                className="absolute bottom-0 right-80"
              />
            </div>
          </div>

          <div className="w-1/3 h-full bg-[#91FF00] flex justify-end items-center">
            <SideSkills />
          </div>
        </div>
      </section>
      <About />
    </main>
  );
}
