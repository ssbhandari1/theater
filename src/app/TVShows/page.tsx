"use client";
import DashBoard from "@/components/Dashboard";
import Movies from "@/components/Dashboard/movies";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  getMovieLogo,
  getPopularTVShows,
  getTopRatedTVShows,
  getTvShows,
} from "@/redux/thunk";
import React, { useEffect, useState } from "react";

const Page = () => {
  const dispatch = useAppDispatch();
  const { trending, loading, error, popular, topRated } = useAppSelector(
    (state) => state.TVData
  );
  useEffect(() => {
    dispatch(getTvShows("/trending/tv/day"));
    dispatch(getPopularTVShows("/tv/popular"));
    dispatch(getTopRatedTVShows("/tv/top_rated"));
  }, [dispatch]);
  const upcomingMoives = useAppSelector(
    (state) => state?.moviesData?.upcomingMoives
  );
  const movieLogoData: any = useAppSelector(
    (state) => state?.moviesData?.movieLogo
  );

  const [randomMovie, setRandomMovie] = useState<any>(null);
  const [movieLogo, setMovieLogo] = useState<string | null>(null);

  useEffect(() => {
    if (upcomingMoives && upcomingMoives?.length > 0) {
      const randomIndex = Math.floor(Math.random() * upcomingMoives?.length);
      const selectedMovie: any = upcomingMoives[randomIndex];
      setRandomMovie(selectedMovie);

      // Fetch the logo for the selected random movie
      dispatch(getMovieLogo(`/movie/${selectedMovie?.id}/images`));
    }
  }, [upcomingMoives, dispatch]);

  useEffect(() => {
    const imgurl = "https://image.tmdb.org/t/p/original";
    if (
      movieLogoData &&
      movieLogoData.logos &&
      movieLogoData.logos.length > 0
    ) {
      const logoPath = movieLogoData?.logos[2]?.file_path;
      setMovieLogo(`${imgurl}${logoPath}`);
    }
  }, [movieLogoData]);
  console.log("TVShowsData", { trending, popular });
  return (
    <div className="max-w-[1050px] h-full overflow-hidden  rounded-md pl-4 pr-4 text-white  ">
      <DashBoard
        upcomingMoives={upcomingMoives}
        movieLogoData={movieLogoData}
        randomMovie={randomMovie}
        movieLogo={movieLogo}
      />
      <Movies
        trending={trending}
        loading={loading}
        popular={popular}
        topRated={topRated}
      />
    </div>
  );
};

export default Page;
