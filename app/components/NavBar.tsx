import Link from "next/link";

function NavBar() {
  return (
    <nav className="h-16 flex justify-between px-80 items-center text-white absolute top-0 w-full">
      <Link href="/" className="text-4xl font-semibold">
        Mercy Saina<span className="text-lime-500 text-6xl">.</span>
      </Link>
      <ul className="flex items-center justify-evenly h-full w-2/5">
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
      <Link href="/">Let&apos;s talk</Link>
    </nav>
  );
}

export default NavBar;
