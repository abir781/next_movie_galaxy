import Image from "next/image";
import MovieHome from "./MovieHome";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <MovieHome></MovieHome>

    </div>
  );
}
