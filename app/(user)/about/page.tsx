import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";

import PreviewSuspense from "../../../components/PreviewSuspense";
import PreviewContent from "../../../components/PreviewContent";
import Bio from "../../../components/Bio";

//Fetch the data from sanity
const query = groq`
*[_type=='bio'] {
    ...,
} | order(_createdAt desc)`;

export default async function BioPage() {
  //IF YOU'RE IN PREVIEW MODE
  if (previewData()) {
    return (
      <PreviewSuspense fallback={<p>Loading preview</p>}>
        {/* Preview goes here */}
        <PreviewContent query={query} />
      </PreviewSuspense>
    );
  }

  //Fetch Bios
  const bios = await client.fetch(query);

  //IF YOU'RE NOT IN PREVIEW MODE
  return (
    <div className="flex items-center justify-center">
      {/* Bios goes here */}
      <Bio bios={bios} />
    </div>
  );
}
