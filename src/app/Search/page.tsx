"use client";
import React, { useEffect, useState } from "react";
import { Card, Input, Skeleton } from "@nextui-org/react";
import { FiSearch } from "react-icons/fi";
import { getSearchData } from "@/redux/thunk";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { Image } from "@nextui-org/react";
const SkeletoComponent = () => {
  return (
    <Card className="w-[180px] space-y-5 p-1 bg-slate-800" radius="lg">
      <Skeleton className="rounded-lg bg-slate-800">
        <div className="h-[35vh] rounded-lg bg-default-800"></div>
      </Skeleton>
    </Card>
  );
};
const Page = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [pageNum, setPageNum] = useState(1);
  const [query, setQuery] = useState("thor");
  const [currentInput, setCurrentInput] = useState(query);
  const { searchData, loading } = useAppSelector((state) => state.searchData);
  console.log("searchData", searchData);
  const url = "https://image.tmdb.org/t/p/original";

  const handleChange = (e: any) => {
    setCurrentInput(e.target.value);
  };

  // Handle key press, specifically the Enter key
  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      setQuery(currentInput); // Set the query to the value typed when Enter is pressed
    }
  };
  console.log("query", query);
  const handleClick = (type: string, id: string) => {
    router.push(`/explore/${"movie"}/${id}`); // Replace with your desired route
  };
  useEffect(() => {
    dispatch(getSearchData(`/search/multi?query=${query}&page=${pageNum}`));
  }, [query]);
  return (
    <div className="max-w-[80vw] w-full h-full overflow-hidden rounded-md pl-4 pr-4 text-white">
      <div className="w-full">
        <Input
          type="text"
          className="w-full"
          value={currentInput} // Bind the input value to the currentInput state
          startContent={
            <FiSearch className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          }
          onChange={handleChange} // Handle typing
          onKeyDown={handleKeyPress} // Handle hitting Enter
        />
      </div>
      <div className="w-full h-full flex flex-col gap-4 mt-10">
        <h3 className="text-slate-400 font-semibold">TOP RESULT</h3>
        <div className="w-full h-full flex items-center justify-center flex-wrap  gap-8">
          {loading &&
            Array.from({ length: 6 }).map((_, index) => (
              <SkeletoComponent key={index} />
            ))}

          {searchData?.map((movie: any, index: any) => {
            const posterUrl = movie?.poster_path;
            if (movie?.media_type === "person") return;
            return (
              <div
                className="flex flex-col gap-2"
                key={index}
                onClick={() => handleClick(movie?.type, movie?.id)}
              >
                <Image
                  isBlurred
                  width={200}
                  height={260}
                  src={url + posterUrl}
                  alt="NextUI Album Cover"
                  className="m-1 rounded-xl cursor-pointer"
                />
                <div className="text-white w-[200px] text-wrap p-1">
                  <h3 className="break-words text-[0.9]">
                    {(movie?.original_title || movie?.name).slice(0, 30)}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
