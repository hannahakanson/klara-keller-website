import Link from "next/link";
import { NewsListProps } from "./NewsList.types";

const NewsList = ({ news }: NewsListProps) => {

  return (
    <div>
      {/* News */}
      {news.map((news) => (
        <div key={news._id} className="relative w-full my-6">
          <div className="relative w-full display:flex flex-col">
            <div className="text-xs opacity-50">{news._updatedAt}</div>
            <h2 className="text-2xl mb-2">{news.title}</h2>
            <p className="text-sm mb-4">
              {news.body[0].children.map((inline) => inline.text)}
            </p>
            <Link className="text-xs hover:underline" href={news.link}>READ MORE →</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
