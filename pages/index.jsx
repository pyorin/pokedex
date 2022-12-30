import Navbar from "../components/Navbar";
import Pokedex from "../components/Pokedex";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pokedex</title>
      </Head>
      <Navbar />
      <Pokedex />
    </div>
  );
}
