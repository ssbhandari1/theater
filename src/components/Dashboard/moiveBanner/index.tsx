import Image from "next/image";
import React, { useEffect, useState } from "react";
import { GrFormAdd } from "react-icons/gr";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getMovieVideo, getUpcomingMovies, getMovieLogo } from "@/redux/thunk";
const MoiveBanner = ({
  upcomingMoives,
  movieLogoData,
  randomMovie,
  movieLogo,
}: any) => {
  const dispatch = useAppDispatch();
  const url = "https://image.tmdb.org/t/p/original";

  return (
    <div className="relative w-full h-[80vh] ">
      <div className="w-full h-full flex items-center justify-center">
        <Image
          width={260}
          height={260}
          className="rounded-xl"
          src={`${url}${randomMovie?.backdrop_path}`}
          alt={randomMovie?.title}
          style={{
            color: "",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-64 rounded-xl">
        <div className="w-full h-64 bg-gradient-to-b from-transparent to-[#253d68] rounded-xl"></div>
      </div>
      <div className="w-[40%] h-full absolute bg-gradient-to-l from-transparent to-[#273755] top-0  rounded-xl">
        <div className="w-full h-full flex flex-col bg-transparent p-3 gap-5 justify-end font-medium">
          {/* <h2> {randomMovie?.title}</h2> */}
          {movieLogo && (
            <div className="w-[20vw] h-[10vh]">
              <Image
                width={260}
                height={260}
                className="rounded-xl"
                src={movieLogo || ""}
                alt={randomMovie?.title}
                style={{
                  color: "",
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                loading="lazy"
                decoding="async"
              />
            </div>
          )}

          <div className="flex gap-4 text-slate-200 text-[0.8rem] font-bold">
            {" "}
            <span> 2024 </span> <span>1 Season</span> <span>Hindi</span>
            <span>U/A 16+</span>
          </div>
          <p className="tracking-wide text-slate-400 text-[0.8rem]">
            {randomMovie?.overview}
          </p>
          <div className="flex gap-2 text-[0.8rem] font-bold text-slate-200 whitespace-nowrap">
            <span> Action</span>|<span>Drama </span>|<span>Social Cause</span>|
            <span>Humour </span>
          </div>
          <div className="w-full h-14  text-slate-600 flex justify-center items-center rounded-md gap-3 p-2">
            <button className="p-2 text-sm w-full font-bold  rounded-md bg-white">
              Watch Now
            </button>

            <button className="p-2  font-bold rounded-md  bg-white">
              <GrFormAdd className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoiveBanner;
