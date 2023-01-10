import Image from "next/image";

import makeUrl from "../../lib/helpers";
import { MilestonesProps } from "./Milestones.types";

const Milestones = ({ milestones }: MilestonesProps) => {

  return (
    <div>
      {/* Milestones */}
      {milestones.map((milestone) => (
        <div key={milestone._id}>
          <div className="relative w-full h-60 my-6">
            <Image
              src={makeUrl(milestone.mainImage).url()}
              alt={milestone.title}
              className="object-contain"
              fill
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Milestones;
