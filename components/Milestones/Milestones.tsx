"use client";
import { useState } from "react";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

import makeUrl from "../../lib/helpers";
import { MilestonesProps } from "./Milestones.types";

const Milestones = ({ milestones }: MilestonesProps) => {
  const slides = milestones.map((milestone) => {
    return {
      url: makeUrl(milestone.mainImage).url(),
      year: milestone.year,
      desc: milestone.title
    };
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1400px] h-[680px] w-full m-auto py-4 px-4 relative group">
      <div className="flex top-4 justify-center py-2">
        {/* Navigation with years */}
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="relative flex items-center flex-wrap text-xl cursor-pointer">
            <div
              className={`p-4 ${
                slideIndex === currentIndex ? "opacity-100" : "opacity-25"
              }`}>
              {slide.year}
            </div>
            {/* Timeline dividers */}
            <div>
              {slideIndex !== slides.length - 1 && (
                <div
                  className={`w-20 h-[0.1rem] bg-gradient-to-r from-pink-500 rounded ${
                    slideIndex === currentIndex ? "opacity-100" : "opacity-25"
                  }`}></div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Image */}
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500 relative">
        {" "}
        <div className="p-4 text-lg w-full bg-klara-purple absolute top-0 flex justify-center">
          <h2>{slides[currentIndex].desc}</h2>
        </div>
      </div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-klara-pink/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-klara-pink/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
};

export default Milestones;
