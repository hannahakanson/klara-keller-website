import Image from "next/image"

import makeUrl from "../../lib/helpers";
import { ContentListProps } from "./ContentList.types";


const ContentList = ({ content }: ContentListProps) => {
  console.log(content.length);

  return (
    <div>
      {/* Content */}
      {content.map((content) => (
        <div key={content._id}>
          <div className="relative w-full h-60 my-6">
            <Image
              src={makeUrl(content.mainImage).url()}
              alt={content.title}
              className="object-contain"
              fill
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentList;
