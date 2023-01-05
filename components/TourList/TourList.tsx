import Link from "next/link";
import { TourListProps } from "./TourList.types";

const TourList = ({ tour }: TourListProps) => {
  return (
    <div>
      {tour.map((concert) => (
        <div key={concert._id} className="flex flex-col pb-4">
          <div className="text-xs">{concert.title}</div>
          <div>{concert.location}</div>
          <div className="text-xs">{concert.date}</div>
          <Link href={concert.link}>Book ticket</Link>
        </div>
      ))}
    </div>
  );
};

export default TourList;
