import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import MovieInto from "../../components/MovieInto";
import useGetTrendingContent from "../../hooks/useGetTrendingContext";

const HomeScreen = () => {
  const { trendingContent } = useGetTrendingContent();
  console.log("TrendingContent", trendingContent);
  return (
    <>
      <div className="relative h-screen text-white bg-black z-10">
        <Navbar />
        <div
          className="absolute top-0 left-0 w-full h-full object-cover z-10 bg-gradient-to-b from-black to-black/0 "
          aria-hidden="true"
        ></div>
        <img
          src="/extraction.jpg"
          alt="home-movie"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <MovieInto />
      </div>
    </>
  );
};

export default HomeScreen;
