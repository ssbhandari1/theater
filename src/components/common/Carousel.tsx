import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Carousel = ({ children, item }: any) => {
  const itemsPerSlide = 5;
  const totalSlides = Math.floor(item.length / itemsPerSlide);

  const [currentItem, setCurrentItem] = useState(0);

  const prevSlide = () => {
    setCurrentItem((prevIndex) =>
      prevIndex === 0 ? item.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentItem((prevIndex) =>
      prevIndex === item.length - 1 ? 0 : prevIndex + 1
    );
  };

  console.log("currentIMG", currentItem);
  return (
    <div className="flex gap-4  w-full relative overflow-hidden">
      {currentItem > 0 && (
        <div className="h-[35vh] w-10  bg-gradient-to-l from-transparent to-[#2e343f] absolute left-[0] flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-10">
          <IoIosArrowBack
            className="text-4xl cursor-pointer"
            onClick={prevSlide}
          />
        </div>
      )}
      <div
        className="flex gap-8 pl-4 w-[85vw] transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentItem * 100}%)` }}
      >
        {children}
      </div>

      {totalSlides !== currentItem && (
        <div className="h-[35vh] w-10 bg-gradient-to-r from-transparent to-[#2e343f] absolute right-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-10">
          <IoIosArrowForward
            className="text-4xl cursor-pointer"
            onClick={nextSlide}
          />
        </div>
      )}
    </div>
  );
};

export default Carousel;
