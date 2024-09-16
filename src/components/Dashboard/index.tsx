import React from "react";
import MoiveBanner from "./moiveBanner";

const DashBoard = ({
  upcomingMoives,
  movieLogoData,
  randomMovie,
  movieLogo,
}: any) => {
  return (
    <div className="w-full h-full">
      <MoiveBanner
        upcomingMoives={upcomingMoives}
        movieLogoData={movieLogoData}
        randomMovie={randomMovie}
        movieLogo={movieLogo}
      />
    </div>
  );
};

export default DashBoard;
