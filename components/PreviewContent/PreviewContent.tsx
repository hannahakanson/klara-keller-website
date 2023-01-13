"use client";

import { usePreview } from "../../lib/sanity.preview";
import { PreviewContentProps } from "./PreviewContent.types";

//Components
import ContentList from "../ContentList";
import NewsList from "../NewsList";
import ContactList from "../ContactList";
import Bio from "../Bio";
import Milestones from "../Milestones";

export default function PreviewContent({
  newsQuery,
  heroQuery,
  contactQuery,
  milestonesQuery,
  bioQuery,
}: PreviewContentProps) {
  if (heroQuery && newsQuery) {
    const content = usePreview(null, heroQuery);
    const news = usePreview(null, newsQuery);

    return (
      <>
        <ContentList content={content} />
        <NewsList news={news} />
      </>
    );
  }
  if (contactQuery) {
    const contacts = usePreview(null, contactQuery);

    return (
      <>
        <ContactList contacts={contacts} />
      </>
    );
  }

  if (milestonesQuery && bioQuery) {
    const bios = usePreview(null, bioQuery);
    const milestones = usePreview(null, milestonesQuery);

    return (
      <>
        <Bio bios={bios} />
        <Milestones milestones={milestones} />
      </>
    );
  }
  return null;
}
