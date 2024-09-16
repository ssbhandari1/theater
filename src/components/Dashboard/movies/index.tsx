import React, { useEffect } from "react";
import MovieGrid from "../movieGrid";

const Movies = ({
  url,
  trending,
  loading,
  error,
  popular,
  marvel,
  topRated,

}: any) => {
  return (
    <div className="w-full  flex flex-col gap-7 mb-[30vh] mt-10">
      {trending && (
        <div className="">
          <h2 className="text-xl font-bold text-gray-400 mb-4">
            Latest Releases
          </h2>
          <MovieGrid data={trending} url={url} section={"Latest Realeses"} />
        </div>
      )}
      {popular && (
        <div className="">
          <h2 className="text-xl font-bold text-gray-400 mb-4">Popular</h2>
          <MovieGrid data={popular} url={url} section={"Popular Movies"} />
        </div>
      )}
      {marvel && (
        <div className="">
          <h2 className="text-xl font-bold text-gray-400 mb-4">
            Marvel Movies
          </h2>
          <MovieGrid data={marvel} url={url} section={"Marvel Movies"} />
        </div>
      )}

      {topRated && (
        <div className="">
          <h2 className="text-xl font-bold text-gray-400 mb-4">Top Rated</h2>
          <MovieGrid data={topRated} url={url} section={"Top Rated"} />
        </div>
      )}
    </div>
  );
};

export default Movies;
