import Image from "next/image";
import Link from "next/link";

import makeUrl from "../../lib/helpers";
import { AlbumListProps } from "./AlbumList.types";

const AlbumList = ({ albums }: AlbumListProps) => {
  return (
    <div>
      {albums.map((album) => (
        <Link href={album.link} target="_blank">
          <div key={album._id} className="flex flex-col pb-4">
            <div className="text-xs">{album.title}</div>
            <div className="relative w-full h-60 my-6">
              <Image
                src={makeUrl(album.mainImage).url()}
                alt={album.title}
                className="object-contain"
                fill
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AlbumList;
