// import { useEffect } from "react";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MovieCard from "../components/MovieCard";
import Movie from "../features/movies";

import { useLoaderData } from "react-router-dom";
import Spinner from "../ui/Spinner";

const Homepage = () => {
  const topMovie = useLoaderData();

  return (
    <>
      <header className="bg-test relative h-[600px] px-3 py-2 lg:px-20">
        <Header />
        <CallToAction />
      </header>

      <main className="px-3 lg:px-20 py-2">
        <Movie />

        <section className="grid lg:grid-cols-4 lg:gap-20 pt-4 lg:pt-11">
          {!topMovie && <Spinner />}
          {topMovie?.results?.slice(0, 10).map((items) => (
            <MovieCard key={items.id} items={items} />
          ))}
        </section>
      </main>

      <footer className="flex flex-col gap-5 lg:gap-9 lg:mt-[100px] mb-[70px]">
        <Footer />
      </footer>
    </>
  );
};

export default Homepage;
