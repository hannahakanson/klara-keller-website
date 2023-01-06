import Image from "next/image";
import Link from "next/link";

import makeUrl from "../../lib/helpers";
import { AlbumListProps } from "./AlbumList.types";

const AlbumList = ({ albums }: AlbumListProps) => {
  return (
    <div className="gap-10 items-center justify-center flex flex-wrap flex-col md:flex-row">
      {albums.map((album) => (
        <Link href={album.link} target="_blank" key={album._id}>
          <div className="relative h-40 m-2 p-2 rounded-md hover:scale-110 transition ease-in-out delay-50 hover:-translate-y-1">
            <div>
              <Image
                src={makeUrl(album.mainImage).url()}
                alt={album.title}
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AlbumList;
