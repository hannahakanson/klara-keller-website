import makeUrl from "../../lib/helpers";
import { ContentListProps } from "./ContentList.types";


const ContentList = ({ content }: ContentListProps) => {
  console.log(content.length);

  return (
    <div>
      {/* Content */}
      {content.map((content) => (
        <div key={content._id}>
          <div>
            <img
              src={makeUrl(content.mainImage).url()}
              alt={content.title}
            />
          </div>
          <p>{content.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ContentList;
