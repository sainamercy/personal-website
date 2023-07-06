import Link from "next/link";

function NavBar() {
  return (
    <nav className="h-24 flex justify-between items-center text-white z-10 sticky bg-black top-0 w-full">
      <Link href="/" className="text-4xl font-semibold pl-80">
        Mercy Saina<span className="text-[#91FF00]">.</span>
      </Link>
      <ul className="flex items-center justify-evenly h-full w-1/3">
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="#about">PROJECTS</Link>
        </li>
        <li>
          <Link href="#about">ABOUT ME</Link>
        </li>
        <li>
          <Link href="#about">CONTACT</Link>
        </li>
      </ul>
      <div className="bg-[#91FF00] w-1/3 h-full flex justify-center items-center">
        <Link href="/" className="bg-black py-2 px-5 rounded-lg shadow-lg">
          Resume
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
