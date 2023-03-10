import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../../src/lib/sanity.client";

import PreviewSuspense from "../../../src/components/PreviewSuspense";
import PreviewContent from "../../../src/components/PreviewContent";
import AlbumList from "../../../src/components/AlbumList";

//Fetch the data from sanity
const albumQuery = groq`
*[_type=='album'] {
    ...,
} | order(_createdAt desc)`

export default async function AlbumPage() {
  //IF YOU'RE IN PREVIEW MODE
  if (previewData()) {
    return (
      <PreviewSuspense fallback={<p>Loading preview</p>}>
        {/* Preview goes here */}
        <PreviewContent albumQuery={albumQuery} />
      </PreviewSuspense>
    );
  }

  //Fetch Albums
  const albums = await client.fetch(albumQuery);

  //IF YOU'RE NOT IN PREVIEW MODE
  return (
    <div className="flex items-center justify-center">
      {/* Albums goes here */}
      <AlbumList albums={albums} />
    </div>
  );
}
