"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import deadpool from "../../../../public/deadpool.jpg";
import Image from "next/image";
import { useAppDispatch } from "@/redux/hooks";
import { GrFormAdd } from "react-icons/gr";
import { Card, Skeleton } from "@nextui-org/react";
import { fetchdataFromApi } from "@/utils/api";
import { useRouter } from "next/navigation";

const SkeletoComponent = () => {
  return (
    <Card className="w-[180px] space-y-5 p-1 bg-slate-800" radius="lg">
      <Skeleton className="rounded-lg bg-slate-800">
        <div className="h-[35vh] rounded-lg bg-default-800"></div>
      </Skeleton>
    </Card>
  );
};
const MovieGrid = ({ data, section }: any) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleClick = (type: string, id: string) => {
    router.push(`/explore/${"movie"}/${id}`); // Replace with your desired route
  };
  const url = "https://image.tmdb.org/t/p/original";
  
  const itemsPerSlide = 6;
  const [currentIMG, setCurrentIMG] = useState(0);
  console.log("currentIMG", currentIMG);
  const totalSlides = Math.ceil(data.length / itemsPerSlide);

  const prevSlide = () => {
    setCurrentIMG((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIMG((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const [hoveredIndex, setHoveredIndex] = useState<number | any>(null);
  console.log("hoveredIndex", hoveredIndex);
  const handleMouseEnter = (id: number) => {
    setHoveredIndex(id);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  console.log("trending", data);

 
  return (
    <div className="w-full h-full relative z-1 ">
      {currentIMG > 0 && (
        <div className="h-[35vh] w-10  bg-gradient-to-l from-transparent to-[#2e343f] absolute left-[-1rem] flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-10">
          <IoIosArrowBack
            className="text-4xl cursor-pointer"
            onClick={prevSlide}
          />
        </div>
      )}

      {totalSlides !== currentIMG && (
        <div className="h-[35vh] w-10 bg-gradient-to-r from-transparent to-[#2e343f] absolute right-[-1rem] flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-10">
          <IoIosArrowForward
            className="text-4xl cursor-pointer"
            onClick={nextSlide}
          />
        </div>
      )}

      <div className=" ">
        {!data || data.length === 0 ? (
          // Render 5 skeleton loaders if data is not available
          <div className="flex gap-4 p-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <SkeletoComponent key={index} />
            ))}
          </div>
        ) : (
          <div
            className="flex gap-4 p-1 transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIMG * 100}%)` }}
          >
            {data?.map((movie: any, index: any) => {
              const posterUrl = movie?.poster_path
                ? url + movie?.poster_path
                : deadpool;

              return (
                <div key={movie?.id}>
                  {hoveredIndex === movie?.id ? (
                    <div
                      onMouseLeave={handleMouseLeave}
                      className="flex flex-col min-w-[170px] h-[35vh] overflow-hidden rounded-bl-xl rounded-br-xl cursor-pointer scale-[1.4] z-[1000] transition-transform duration-500 delay-500"
                    >
                      <div className="w-full h-[50%] relative rounded-tl-xl rounded-tr-xl">
                        <Image
                          alt="Hovered Profile Bio"
                          width={260}
                          height={260}
                          className="rounded-tl-xl rounded-tr-xl"
                          src={posterUrl}
                          style={{
                            color: "black",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>

                      <div className="flex-1 bg-slate-900 rounded-bl-xl rounded-br-xl flex flex-col gap-2 p-2">
                        <div className="w-full h-10  text-slate-600 flex justify-center items-center rounded-md gap-3 p-2">
                          <button
                            className="p-2 text-xs w-full font-bold  rounded-md bg-white"
                            onClick={() => handleClick(movie?.type, movie?.id)} 
                          >
                            Watch Now
                          </button>

                          <button className="p-2  font-bold rounded-md  bg-white">
                            <GrFormAdd className="text-sm" />
                          </button>
                        </div>
                        <div className="flex-1 gap-2 flex flex-col">
                          <div className="flex gap-2 text-[0.5rem] font-bold text-slate-400 whitespace-nowrap">
                            <span>{movie?.release_date?.slice(0, 4)} </span>|
                            <span>Drama </span>
                            <span>Humour </span>
                          </div>
                          <div className="text-[0.4rem] text-gray-500">
                            {movie?.overview}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      onMouseEnter={() => handleMouseEnter(movie?.id)}
                      className="min-w-[170px] h-[35vh] bg-white rounded-xl -z-10 cursor-pointer"
                    >
                      <Image
                        alt="Default Profile Bio"
                        width={260}
                        height={260}
                        className="rounded-xl -z-10"
                        src={posterUrl}
                        style={{
                          color: "transparent",
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        loading="lazy"
                        decoding="async"
                      />
                      {/* Future different content for default state */}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieGrid;
