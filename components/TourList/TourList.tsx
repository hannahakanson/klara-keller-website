import Link from "next/link";
import { TourListProps } from "./TourList.types";

const TourList = ({ tour }: TourListProps) => {
  return (
    <div className="w-2/3">
      {tour.map((concert) => (
        <div
          key={concert._id}
          className="border p-4 flex mb-4 flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-4">
            <div>{concert.location}</div>
            <div>{concert.title}</div>
            <div>{concert.date}</div>
          </div>
          <Link className="text-xs border p-2 hover:text-black hover:bg-slate-50" href={concert.link} target="_blank">
            BOOK TICKET
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TourList;
