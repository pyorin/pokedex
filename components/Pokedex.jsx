import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const Pokedex = () => {
  const [pokemon, setPokemon] = useState([]);
  const [details, setDetails] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [filter, setFilter] = useState("");

  const fetchApi = async () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then((d) => setPokemon(d.data.results));
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const handleClick = (url) => {
    axios.get(url).then((d) => setDetails(d.data));
    setShowDetails(true);
  };

  const handleClose = () => {
    setShowDetails(false);
  };

  const handlePagi = () => {
    alert("hm belum jadi nanti aja...");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="search pokemon"
        className="mx-auto mb-4 block p-1 border shadow-md shadow-slate-600 rounded-md"
        onChange={(e) => setFilter(e.target.value)}
      />
      <div className="flex flex-col md:flex-row px-5">
        <div className="w-full flex my-3 items-center bg-[url('https://p4.wallpaperbetter.com/wallpaper/661/885/120/nature-pokemon-wallpaper-preview.jpg')] rounded-md bg-cover bg-center">
          {showDetails ? (
            <div className="backdrop-blur p-3 w-56 m-auto mt-6 border mb-6 rounded-md shadow-md relative">
              <h1 className="text-xl text-center">{details.name}</h1>
              <p className="text-center">base_exp: {details.base_experience}</p>
              <Image
                src={
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
                  details.id +
                  ".png"
                }
                alt={details.name}
                width={200}
                height={200}
              />
              <div
                onClick={() => handleClose()}
                className="flex justify-center cursor-pointer shadow-md items-center absolute -top-3 -right-3 bg-red-500 rounded-full w-8 h-8 transition-all duration-500 hover:bg-red-600"
              >
                <p className="text-white">X</p>
              </div>
            </div>
          ) : null}
        </div>
        <div className="h-[350px] overflow-scroll w-full px-5">
          <ul className="space-y-2">
            {pokemon.map((poke, i) =>
              poke.name.includes(filter) ? (
                <li
                  key={i}
                  className="bg-slate-600 text-white border-slate-500 py-1 px-3 shadow-md shadow-slate-800 rounded-md mx-auto transition-all duration-500 cursor-pointer hover:bg-yellow-400 hover:text-black"
                  onClick={() => handleClick(poke.url)}
                >
                  {poke.name}
                </li>
              ) : null
            )}
          </ul>
        </div>
      </div>
      <div className="w-[200px] flex justify-center mx-auto space-x-5 mt-6">
        <button
          onClick={() => handlePagi()}
          className="text-center py-1 px-4 bg-slate-600 duration-500 hover:bg-yellow-400 hover:text-black text-white shadow-md rounded-md"
        >
          Prev
        </button>
        <button
          onClick={() => handlePagi()}
          className="text-center bg-slate-600 px-4 p-1 duration-500 hover:bg-yellow-400 hover:text-black text-white shadow-md rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pokedex;
