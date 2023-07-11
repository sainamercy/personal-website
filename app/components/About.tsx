import Image from "next/image";

function About() {
  return (
    <section
      className="h-screen flex flex-col items-center justify-center"
      id="about"
    >
      <h3 className="text-4xl font-semibold mt-10 text-gray-800">
        Learn about me
      </h3>
      <div className="flex items-center justify-center w-3/4 mx-auto gap-10">
        <div className="bg-black">
          <Image src="/aboutPage.png" alt="about" width={500} height={500} />
        </div>
        <div className="flex flex-col items-center justify-center gap-10 w-full md:w-1/2">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
            eos nisi accusamus perspiciatis in dolore aperiam sint ratione velit
            assumenda fuga repellendus, dolor optio explicabo magnam id
            necessitatibus a. Aperiam!
          </p>
          <div>
            <h3>My skills</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>TailwindCSS</li>
              <li>Redux</li>
              <li>Node.js</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
