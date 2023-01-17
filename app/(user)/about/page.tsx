import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";

import PreviewSuspense from "../../../components/PreviewSuspense";
import PreviewContent from "../../../components/PreviewContent";
import Bio from "../../../components/Bio";
import Milestones from "../../../components/Milestones";

//Fetch the data from sanity
const bioQuery = groq`
*[_type=='bio'] {
    ...,
} | order(_createdAt desc)`;

const milestonesQuery = groq`
*[_type=='milestone'] {
    ...,
} | order(year asc)`;

export default async function BioPage() {
  //IF YOU'RE IN PREVIEW MODE
  if (previewData()) {
    return (
      <PreviewSuspense fallback={<p>Loading preview</p>}>
        {/* Preview goes here */}
        <PreviewContent bioQuery={bioQuery} milestonesQuery={milestonesQuery} />
      </PreviewSuspense>
    );
  }

  //Fetch Bios
  const bios = await client.fetch(bioQuery);
  //Fetch Milestones
  const milestones = await client.fetch(milestonesQuery);

  //IF YOU'RE NOT IN PREVIEW MODE
  return (
    <div className="flex flex-col md:w-2/5">
      {/* Bios goes here */}
      <Bio bios={bios} />

      {/* Milestones goes here */}
      <Milestones milestones={milestones} />
    </div>
  );
}
