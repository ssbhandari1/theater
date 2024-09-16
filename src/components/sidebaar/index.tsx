"use client";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import { GrHomeRounded } from "react-icons/gr";
import { FiTv } from "react-icons/fi";
import { PiFilmSlate } from "react-icons/pi";
import { useRouter } from "next/navigation";

const SideBaar = () => {
  const router = useRouter();
  const handleNavigate = (type: string) => {
    if (type === "TV") {
      router.push("/TVShows");
    } else if (type === "Movies") {
      router.push("/movies");
    } else if (type === "home") {
      router.push("/");
    } else if (type === "search") {
      router.push("/Search");
    } else {
      router.push("/");
    }
  };
  return (
    <div className=" w-full h-full  text-white flex flex-col gap-9 ml-8 mt-10">
      <div>LOGO</div>
      <div className="flex flex-col pt-3 pb-3 gap-10 text-slate-700 hover:text-slate-400 text-xl cursor-pointer group">
        <div className="flex items-center font-semibold gap-3 transform transition-transform duration-300 hover:scale-110 hover:text-slate-100">
          <CgProfile />
          <h3 className="opacity-0 transform -translate-x-4 transition-opacity transition-transform duration-500 group-hover:opacity-100 group-hover:translate-x-0">
            Profile
          </h3>
        </div>
        <div
          className="flex items-center font-semibold gap-3 transform transition-transform duration-300 hover:scale-110 hover:text-slate-100"
          onClick={() => handleNavigate("search")}
        >
          <FiSearch />
          <h3 className="opacity-0 transform -translate-x-4 transition-opacity transition-transform duration-500 group-hover:opacity-100 group-hover:translate-x-0">
            Search
          </h3>
        </div>
        <div
          className="flex items-center gap-3 font-semibold transform transition-transform duration-300 hover:scale-110 hover:text-slate-100"
          onClick={() => handleNavigate("home")}
        >
          <GrHomeRounded />
          <h3 className="opacity-0 transform -translate-x-4 transition-opacity transition-transform duration-500 group-hover:opacity-100 group-hover:translate-x-0">
            Home
          </h3>
        </div>
        <div
          className="flex items-center gap-3 font-semibold transform transition-transform duration-300 hover:scale-110 hover:text-slate-100"
          onClick={() => handleNavigate("TV")}
        >
          <FiTv />
          <h3 className="opacity-0 transform -translate-x-4 transition-opacity transition-transform duration-500 group-hover:opacity-100 group-hover:translate-x-0">
            TV
          </h3>
        </div>
        <div className="flex items-center gap-3 font-semibold transform transition-transform duration-300 hover:scale-110 hover:text-slate-100">
          <PiFilmSlate />
          <h3 className="opacity-0 transform -translate-x-4 transition-opacity transition-transform duration-500 group-hover:opacity-100 group-hover:translate-x-0">
            Movies
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SideBaar;
