import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";

import PreviewSuspense from "../../components/PreviewSuspense";
import PreviewContent from "../../components/PreviewContent";
import ContentList from "../../components/ContentList";
import NewsList from "../../components/NewsList";

//Fetch the data from sanity
const query = groq`
*[_type=='heroContent'] {
    ...,
} | order(_createdAt desc)`;

const newsQuery = groq`
*[_type=='news'][0...3] {
    ...,
} | order(_createdAt desc)`;

export default async function HomePage() {
  //IF YOU'RE IN PREVIEW MODE
  if (previewData()) {
    return (
      <PreviewSuspense fallback={<p>Loading preview</p>}>
        {/* Preview goes here */}
        <PreviewContent query={query} />
      </PreviewSuspense>
    );
  }

  const content = await client.fetch(query);
  const news = await client.fetch(newsQuery);

  //IF YOU'RE NOT IN PREVIEW MODE
  return (
    <div>
      {/* Content goes here */}
      <ContentList content={content} />

      {/* News goes here */}
      <NewsList news={news} />
    </div>
  );
}
