import NavBar from "./components/NavBar";
import About from "./components/About";
import Image from "next/image";

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
        <div className="h-screen bg-black w-2/3 flex flex-col justify-center items-center text-white gap-4">
          <h1 className="text-[6rem]">Hi I&apos;m Mercy</h1>
          <p className="text-4xl p-6 bg-white border-4 border-lime-500 text-black">
            A passionate software developer
          </p>
        </div>
        <div className="w-1/3 h-screen bg-lime-500"></div>
      </div>
      <About />
    </div>
  );
}
