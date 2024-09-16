"use client";
// import Image from "next/image";
import React, { useEffect } from "react";
import deadpool from "../../../../public/deadpool.jpg";
import UserCard from "@/components/common/User";
import { useParams, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  getMoiveCast,
  getMovieDetails,
  getMovieVideo,
  getSimilarMovies,
} from "@/redux/thunk";
import { Skeleton } from "@nextui-org/skeleton";
import { Image } from "@nextui-org/react";
import dayjs from "dayjs";
import Carousel from "@/components/common/Carousel";
import Videos from "@/components/common/Videos";
import MovieGrid from "@/components/Dashboard/movieGrid";
const SkeletoComponent = () => {
  return (
    <div className="max-w-[300px] w-full flex flex-col items-center gap-3">
      <Skeleton className="flex rounded-full w-[180px] h-[180px]" />
      <Skeleton className="h-3 w-3/5 rounded-lg" />
      <Skeleton className="h-3 w-4/5 rounded-lg" />
    </div>
  );
};

const Page = () => {
  const dispatch = useAppDispatch();
  const { movieVideo, credits, movieDetails, similarMoives }: any =
    useAppSelector((state) => state?.moviesData);
  const { slug } = useParams();
  const mediaType = slug[0];
  const id = slug[1];

  const url = "https://image.tmdb.org/t/p/original";
  // const { slug } = router?.query;
  useEffect(() => {
    dispatch(getMovieVideo(`/${mediaType}/${id}/videos`));
    dispatch(getMoiveCast(`/${mediaType}/${id}/credits`));
    dispatch(getMovieDetails(`/${mediaType}/${id}`));
    dispatch(getSimilarMovies(`/${mediaType}/${id}/similar`));
    //getSimilarMovies
  }, []);
  console.log("movieVideo", {
    movieVideo,
    credits,
    movieDetails,
    similarMoives,
  });
  return (
    <div className="w-[80vw] h-full flex flex-col gap-6 mb-10">
      <div className="w-full h-[70vh] grid grid-cols-3 p-3">
        <div className="col-span-1 w-full h-full">
          <Image
            isBlurred
            width={320}
            height={400}
            src={url + movieDetails?.poster_path}
            alt="NextUI Album Cover"
            className="m-2"
          />
        </div>
        <div className="col-span-2  flex flex-col  gap-5 pl-5">
          <div className="flex flex-col gap-3 ">
            <h2 className="text-3xl font-bold text-slate-50">
              {movieDetails?.title}
            </h2>
            <span className="text-slate-400 text-xl font-semibold">
              Chaos loves company.{" "}
            </span>
          </div>
          <div className="flex flex-col text-slate-50">
            <h3 className="text-xl font-semibold">Overview</h3>
            <p className="text-slate-400 ">{movieDetails?.overview}</p>
          </div>
          <div className="flex flex-col text-slate-400 gap-2">
            <div className="flex gap-3  items-center">
              <span className="text-xl text-slate-300">Status</span>:{" "}
              <p> {movieDetails?.status}</p>
            </div>
            <div className="flex gap-3  items-center ">
              <span className="text-xl text-slate-300">Release Date</span>:{" "}
              <p> {dayjs(movieDetails?.release_date).format("MMM D , YYYY")}</p>
            </div>
            <div className="flex gap-3  items-center">
              <span className="text-xl text-slate-300">Runtime</span>:{" "}
              <p>{movieDetails?.runtime}min</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 text-white ">
        <h2 className="text-xl font-semibold">Top Cast</h2>
        <div className="flex w-full gap-4">
          {credits?.cast ? (
            <Carousel item={credits?.cast}>
              {credits?.cast?.map((data: any, index: any) => (
                <UserCard key={index} data={data} />
              ))}
            </Carousel>
          ) : (
            <div className="flex w-full justify-center gap-4 p-1">
              {Array.from({ length: 6 }).map((_, index) => (
                <SkeletoComponent key={index} />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-3 text-white ">
        <h2 className="text-xl font-semibold">Official Videos</h2>
        <div className="flex w-full gap-4">
          {movieVideo ? (
            <Carousel item={movieVideo}>
              {movieVideo?.map((data: any, index: any) => (
                <Videos key={index} data={data} />
              ))}
            </Carousel>
          ) : (
            <div className="flex w-full justify-center gap-4 p-1">
              {Array.from({ length: 6 }).map((_, index) => (
                <SkeletoComponent key={index} />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-3 text-white ">
        <div className="w-full h-full overflow-hidden  rounded-md pl-4 pr-4 text-white  ">
          <div className="w-full  flex flex-col gap-7 mb-[30vh] mt-10">
            <div className="">
              <h2 className="text-xl font-bold text-gray-400 mb-4">
                Similar Movies
              </h2>
              <MovieGrid data={similarMoives} section={"Similar Movies"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
//src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
export default Page;
