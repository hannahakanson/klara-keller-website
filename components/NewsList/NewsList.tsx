import Image from "next/image";

import makeUrl from "../../lib/helpers";
import { NewsListProps } from "./NewsList.types";

const NewsList = ({ news }: NewsListProps) => {
  console.log(news.length);

  return (
    <div>
      {/* News */}
      {news.map((news) => (
        <div key={news._id}>
          <div className="relative w-full h-60 my-6">
            <h2>{news.title}</h2>
            <p className="text-sm">
              {news.body[0].children.map((inline) => inline.text)}
            </p>
            <Image
              src={makeUrl(news.mainImage).url()}
              alt={news.title}
              className="object-contain"
              fill
            />
            <div className="text-xs">{news._updatedAt}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
