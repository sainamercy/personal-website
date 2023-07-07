import Image from "next/image";

function About() {
  return (
    <section
      className="h-screen flex items-center justify-between w-full"
      id="about"
    >
      <div className="">
        <Image src="/heropage.png" alt="about" width={500} height={500} />
      </div>
      <div>
        <h2>About</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum eos
          nisi accusamus perspiciatis in dolore aperiam sint ratione velit
          assumenda fuga repellendus, dolor optio explicabo magnam id
          necessitatibus a. Aperiam!
        </p>
      </div>
    </section>
  );
}

export default About;
