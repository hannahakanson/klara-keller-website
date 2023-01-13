"use client";

import { usePreview } from "../../lib/sanity.preview";
import { PreviewContentProps } from "./PreviewContent.types";
import ContentList from "../ContentList";
import NewsList from "../NewsList";

export default function PreviewContent({
  newsQuery,
  heroQuery,
}: PreviewContentProps) {
  if (heroQuery !== undefined && newsQuery !== undefined) {
    const content = usePreview(null, heroQuery);
    const news = usePreview(null, newsQuery);

    return (
      <>
        <ContentList content={content} />
        <NewsList news={news} />
      </>
    );
  }
  return null;
}
