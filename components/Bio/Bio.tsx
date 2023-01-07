import { BioProps } from "./Bio.types";

const Bio = ({ bios }: BioProps) => {
    
  return (
    <div>
      {bios.map((bio) => (
        <div className="flex flex-col pb-4">
          <h2>{bio.title}</h2>
          <p className="text-sm">{bio.body[0].children.map((inline) => inline.text)}</p>
        </div>
      ))}
    </div>
  );
};

export default Bio;
