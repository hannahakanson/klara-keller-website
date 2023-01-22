import { BioProps } from "./Bio.types";

const Bio = ({ bios }: BioProps) => {
  return (
    <div>
      {bios.map((bio) => (
        <div className="flex flex-col p-4">
          <div className="flex flex-col pb-4 relative">
            <h2 className="text-3xl">{bio.title}</h2>
          </div>
          <p className="text-sm">
            {bio.body[0].children.map((inline) => inline.text)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Bio;
