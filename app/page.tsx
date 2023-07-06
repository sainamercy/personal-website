import NavBar from "./components/NavBar";
import About from "./components/About";
import Image from "next/image";
import TypeAnimation from "./components/TypeAnimation";

export default function Home() {
  return (
    <main>
      <section className="h-screen">
        <NavBar />
        <div className="flex relative h-[90%]">
          <div className="h-full bg-black w-2/3">
            <div className="flex flex-col justify-center h-full text-white gap-4 w-1/2 mx-auto">
              <h1 className="text-[5rem]">Hi I&apos;m Mercy,</h1>
              <p className="text-4xl p-4 bg-amber-100 border-4 border-[#91FF00] text-black max-w-fit font-semibold">
                I&apos;M A{" "}
                <span className="text-gray-900">
                  <TypeAnimation />
                </span>
              </p>
              <Image
                alt="hero-image"
                src="/heropage-test3.png"
                width={600}
                height={600}
                className="absolute bottom-0 right-80"
              />
            </div>
          </div>

          <div className="w-1/3 h-full bg-[#91FF00]"></div>
        </div>
      </section>
      <About />
    </main>
  );
}
