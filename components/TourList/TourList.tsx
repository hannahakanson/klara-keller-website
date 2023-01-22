import Link from "next/link";
import { TourListProps } from "./TourList.types";

const TourList = ({ tour }: TourListProps) => {
  return (
    <div className="w-full p-4">
      {tour.length > 0 ? (
        tour.map((concert) => (
          <div
            key={concert._id}
            className="border-b p-4 flex flex-row items-center justify-between">
            <div className="flex flex-col">
              <div>{concert.location}</div>
              <div className="italic">{concert.title}</div>
            </div>

            <div className="flex items-center gap-4">
              {concert.date}
              <Link
                className="text-xs border p-2 hover:text-black hover:bg-slate-50"
                href={concert.link}
                target="_blank">
                BOOK TICKET
              </Link>
            </div>
          </div>
        ))
      ) : (
        <div>
          <h2 className="flex items-center justify-center">NO UPCOMING CONCERTS RIGHT NOW.</h2>
        </div>
      )}
    </div>
  );
};

export default TourList;

