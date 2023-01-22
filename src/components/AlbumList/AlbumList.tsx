import Image from "next/image";
import Link from "next/link";

import makeUrl from "../../lib/helpers";
import { AlbumListProps } from "./AlbumList.types";

const AlbumList = ({ albums }: AlbumListProps) => {
  return (
    <div className="w-full items-center justify-center flex flex-wrap flex-col md:flex-row md:px-10">
      {albums.map((album) => (
        <Link href={album.link} target="_blank" key={album._id}>
          <div className="relative h-full p-2 rounded-md hover:scale-110 transition ease-in-out delay-50 hover:-translate-y-1">
            <div className="relative w-96 h-96">
              <Image
                src={makeUrl(album.mainImage).url()}
                alt={album.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AlbumList;
