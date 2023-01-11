import Image from "next/image";
import Link from "next/link";

import makeUrl from "../../lib/helpers";
import { AlbumListProps } from "./AlbumList.types";

const AlbumList = ({ albums }: AlbumListProps) => {
  return (
    <div className="gap-5 items-center justify-center flex flex-wrap flex-col md:flex-row">
      {albums.map((album) => (
        <Link href={album.link} target="_blank" key={album._id}>
          <div className="relative h-full m-4 p-2 rounded-md hover:scale-110 transition ease-in-out delay-50 hover:-translate-y-1">
            <div className="relative">
              <Image
                src={makeUrl(album.mainImage).url()}
                alt={album.title}
                width={200}
                height={200}
                className="object-cover"
              />
              {/* !! Fix this */}
              {/* <div className="hover:visible invisible absolute inset-0 flex items-center justify-center text-white font-bold text-lg bg-opacity-75 bg-black">
                {album.title}
              </div> */}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AlbumList;
