import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../src/lib/sanity.client";

import PreviewSuspense from "../../src/components/PreviewSuspense";
import PreviewContent from "../../src/components/PreviewContent";
import HeroContent from "../../src/components/HeroContent";
// import NewsList from "../../components/NewsList";

//Fetch the data from sanity
const heroQuery = groq`
*[_type=='heroContent'] {
    ...,
} | order(_createdAt desc)`;

const newsQuery = groq`
*[_type=='news'][0...3] {
    ...,
} | order(_createdAt desc)`;


export default async function HomePage() {
  const content = await client.fetch(heroQuery);
  // const news = await client.fetch(newsQuery);

  //IF YOU'RE IN PREVIEW MODE
  if (previewData()) {
    return (
      <PreviewSuspense fallback={<p>Loading preview</p>}>
        {/* Preview for heroContent and news goes here */}
        <PreviewContent heroQuery={heroQuery} newsQuery={newsQuery} />

      </PreviewSuspense>
    );
  }

  //IF YOU'RE NOT IN PREVIEW MODE
  return (
    <div className="w-full">
      {/* Content goes here */}
      <HeroContent content={content} />

      {/* News goes here */}
      {/* <NewsContent news={news} /> */}
    </div>
  );
}
