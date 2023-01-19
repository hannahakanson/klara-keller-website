"use client";
import Image from "next/image";

import makeUrl from "../../lib/helpers";
import { HeroContentProps } from "./HeroContent.types";
import { useState } from "react";
import { HeroContent } from "../../typings";

const HeroContent = ({ content }: HeroContentProps) => {

  const sideA = content.filter((object) => object.side === "A");
  const sideB = content.filter((object) => object.side === "B");

  const [isSideA, setIsSideA] = useState(true);
  const [activeContent, setActiveContent] = useState<{
    content: HeroContent[]
  }>({
    content: sideA,
  });


  const handleSwitchSide = () => {
    if(isSideA) {
      setActiveContent({content: sideB})
    }
    if (!isSideA) {
      setActiveContent({ content: sideA });
    }
    setIsSideA(!isSideA)
  };

  return (
    <div className="heroImage flex flex-col justify-center items-center w-full">
      {/* Content */}
      {activeContent.content.map((content) => (
        <div
          key={content._id}
          className="flex flex-col items-center justify-center">
          <div
            onClick={handleSwitchSide}
            className="relative w-96 h-96 md:w-128 md:h-128 my-6 animate-spin-slow">
            <Image
              src={makeUrl(content.mainImage).url()}
              alt={content.title}
              className="object-cover"
              priority={true}
              fill
            />
          </div>
          <div>
            {content.songs.map((song, index) => (
              <h2 key={index} className="text-5xl">{song}</h2>
            ))}
          </div>
        </div>
      ))}
      <p onClick={handleSwitchSide} className="pt-10 uppercase underline">
        {isSideA ? "Switch to side B" : "Switch to side A"}
      </p>
    </div>
  );
};

export default HeroContent;
