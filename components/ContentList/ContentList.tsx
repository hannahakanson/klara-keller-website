import Image from "next/image"

import makeUrl from "../../lib/helpers";
import { ContentListProps } from "./ContentList.types";


const ContentList = ({ content }: ContentListProps) => {
  console.log(content.length);

  return (
    <div className="heroImage bg-slate-200">
      {/* Content */}
      {content.map((content) => (
        <div key={content._id}>
          <div className="relative w-full h-96 my-6">
            <Image
              src={makeUrl(content.mainImage).url()}
              alt={content.title}
              className="object-cover"
              priority={true}
              fill
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentList;
