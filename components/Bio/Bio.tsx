import { BioProps } from "./Bio.types";

const Bio = ({ bio }: BioProps) => {
  return (
    <div>
      <p>{bio.title}</p>
    </div>
  );
};

export default Bio;
