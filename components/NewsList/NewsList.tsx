import { NewsListProps } from "./NewsList.types";

const NewsList = ({ news }: NewsListProps) => {

  return (
    <div>
      {/* News */}
      {news.map((news) => (
        <div key={news._id} className="relative w-full my-6">
          <div className="relative w-full display:flex flex-col">
            <div className="text-xs opacity-50">{news._updatedAt}</div>
            <h2>{news.title}</h2>
            <p className="text-sm">
              {news.body[0].children.map((inline) => inline.text)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
