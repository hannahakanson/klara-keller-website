import Image from "next/image";

import makeUrl from "../../lib/helpers";
import { BioProps } from "./Bio.types";

const Bio = ({ bios }: BioProps) => {
  return (
    <div>
      {bios.map((bio) => (
        <div className="flex flex-col pb-4">
          <div className="flex flex-col pb-4 relative">
            <div className="flex">
              <h2 className="text-3xl">{bio.title}</h2>
              {/* <Image
                src={makeUrl(bio.mainImage).url()}
                alt={bio.title}
                className="object-cover w-full h-auto"
                fill
              /> */}
            </div>
          </div>
          <p className="text-sm">
            {bio.body[0].children.map((inline) => inline.text)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Bio;
