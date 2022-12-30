import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-yellow-400 py-3 px-8 mb-4 shadow-md flex space-x-4 items-center">
        <h1 className="text-xl font-bold">Pokedex</h1>
        <Image
          src="https://seeklogo.com/images/P/pokeball-logo-DC23868CA1-seeklogo.com.png"
          alt="logo"
          width={40}
          height={40}
        />
      </nav>
    </div>
  );
};

export default Navbar;
