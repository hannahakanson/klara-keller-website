"use client";
import Image from "next/image";

import makeUrl from "../../src/lib/helpers";
import { HeroContentProps } from "./HeroContent.types";
import { useState } from "react";
import { HeroContent } from "../../sanity/typings";
import { useThemeContext } from "../../src/Contexts/ThemeContext";
import Link from "next/link";

const HeroContent = ({ content }: HeroContentProps) => {

  //Sort out the two different album sides
  const sideAContent = content.filter((object) => object.side === "A");
  const sideBContent = content.filter((object) => object.side === "B");

  //State for active content
  const [activeContent, setActiveContent] = useState<{
    content: HeroContent[];
  }>({
    content: sideAContent
  });

  //Theme
  const { setTheme, sideA, setSideA }: any = useThemeContext();

  //Handle the switch of theme and set active content
  const handleSwitchSide = () => {
    if (sideA) {
      setActiveContent({ content: sideBContent });
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
    if (!sideA) {
      setActiveContent({ content: sideAContent });
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
    setSideA(!sideA);
  };

  return (
    <div className="heroImage flex flex-col justify-center items-center w-full px-4">
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
          <ul className="px-4">
            {content.songs.map((song, index) => (
              <li key={index} className="hover:underline">
                <Link href={song.link} target="_blank">
                <h2 key={index} className="text-5xl mt-4">
                  {song.title}
                </h2>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {/* Switch sides + theme */}
      <p onClick={handleSwitchSide} className="pt-10 uppercase underline">
        {sideA ? "Switch to side B" : "Switch to side A"}
      </p>
    </div>
  );
};

export default HeroContent;
