"use client";
import DashBoard from "@/components/Dashboard";
import Movies from "@/components/Dashboard/movies";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  getIMG_URL,
  getMarvelMovies,
  getMovieLogo,
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMoives,
  getUpcomingMovies,
} from "@/redux/thunk";
import { useEffect, useState } from "react";
export default function Home() {
  const dispatch = useAppDispatch();
  const [url, setUrl] = useState<any>({});

  const { trending, loading, error, popular, marvel, topRated } =
    useAppSelector((state) => state?.moviesData);
  console.log("trendingMoives", { topRated });
  const fetchApiConfig = async () => {
    try {
      const res = await getIMG_URL("/configuration");
      console.log("resl11111", res);
      setUrl(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApiConfig();
  }, [dispatch]);

  useEffect(() => {
    // const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
    dispatch(getTrendingMoives("/trending/movie/day"));
    dispatch(getPopularMovies("/movie/popular"));
    dispatch(getTopRatedMovies("/movie/top_rated"));
    dispatch(getMarvelMovies("/discover/movie?with_companies=420"));
    dispatch(getUpcomingMovies("/movie/upcoming"));
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
  return (
    <div className="max-w-[1050px] h-full overflow-hidden  rounded-md pl-4 pr-4 text-white  ">
      <DashBoard
        upcomingMoives={upcomingMoives}
        movieLogoData={movieLogoData}
        randomMovie={randomMovie}
        movieLogo={movieLogo}
      />
      <Movies
        url={url}
        trending={trending}
        loading={loading}
        error={error}
        popular={popular}
        marvel={marvel}
        topRated={topRated}
      />
    </div>
  );
}
