import Image from "next/image";

const Header = () => {
  return (
    <header className="mx-auto flex items-center justify-between bg-black">
      <div className="flex items-center space-x-4 py-1 px-6 text-orange-400 bg-black">
        <Image
          src="/images/orange.png"
          alt="WEBXES Tech Logo"
          width={100}
          height={100}
          className="rounded-lg"
        />
        <h1 className="text-5xl font-bold">WEBXES Tech.</h1>
      </div>

      <nav>
        <ul className="flex space-x-8 pr-8 text-2xl font-medium">
          <li>
            <a href="#" className="text-orange-400 hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-orange-400 hover:text-white">
              About Us
            </a>
          </li>
          <li>
            <a href="#contact" className="text-orange-400 hover:text-white">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
