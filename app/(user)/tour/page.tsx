import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";

import PreviewSuspense from "../../../components/PreviewSuspense";
import PreviewContent from "../../../components/PreviewContent";
import TourList from "../../../components/TourList";

//Fetch the data from sanity
const query = groq`
*[_type=='concert'] {
    ...,
} | order(_createdAt desc)`;

export default async function TourPage() {
  //IF YOU'RE IN PREVIEW MODE
  if (previewData()) {
    return (
      <PreviewSuspense fallback={<p>Loading preview</p>}>
        {/* Preview goes here */}
        <PreviewContent query={query} />
      </PreviewSuspense>
    );
  }

  //Fetch tour
  const tour = await client.fetch(query);

  //IF YOU'RE NOT IN PREVIEW MODE
  return (
    <div className="flex items-center justify-center">
      {/* Tour goes here */}
      <TourList tour={tour} />
    </div>
  );
}
