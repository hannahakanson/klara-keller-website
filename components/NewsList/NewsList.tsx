import Link from "next/link";
import Image from "next/image";
import { NewsListProps } from "./NewsList.types";
import makeUrl from "../../src/lib/helpers";

const NewsList = ({ news }: NewsListProps) => {
  return (
    <div className="newsList">
      {/* News */}
      {news.map((news) => (
        <div key={news._id} className="w-full h-fit my-6 flex flex-col pb-2 mb-20 border-b">
          <div className="text-xs opacity-50">{news._updatedAt}</div>
          <h2 className="text-2xl mb-2">{news.title}</h2>
          <p className="text-sm">
            {news.body[0].children.map((inline) => inline.text)}
          </p>
          <div className="w-full h-96 relative mt-4 mb-4">
            <Image
              src={makeUrl(news.mainImage).url()}
              alt={news.title}
              className="object-cover"
              fill></Image>
          </div>
          <Link className="text-xs hover:underline" target="_blank" href={news.link}>
            READ MORE →
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
