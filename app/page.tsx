"use client";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div>
      <div className="flex relative min-h-screen">
        <NavBar />
        <Image
          alt="hero-image"
          src="/heropage.png"
          width={600}
          height={600}
          className="absolute bottom-0 right-80"
        />
        <div className="h-screen bg-black w-2/3">
          <div className="flex flex-col justify-center h-full text-white gap-4 w-1/2 mx-auto">
            <h1 className="text-[6rem]">Hi I&apos;m Mercy</h1>
            <p className="text-4xl p-4 bg-amber-100 border-4 border-lime-500 text-black max-w-fit">
              I&apos;M A{" "}
              <span className="text-gray-800">
                <Typewriter
                  words={["WEB DEVELOPER", "DESIGNER", "PROGRAMMER"]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={200}
                  deleteSpeed={100}
                  delaySpeed={1000}
                />
              </span>
            </p>
          </div>
        </div>
        <div className="w-1/3 h-screen bg-lime-500"></div>
      </div>
      <About />
    </div>
  );
}
