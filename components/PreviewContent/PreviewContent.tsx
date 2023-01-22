"use client";

import { usePreview } from "../../src/lib/sanity.preview";
import { PreviewContentProps } from "./PreviewContent.types";

//Components
import ContentList from "../HeroContent";
import NewsList from "../NewsList";
import ContactList from "../ContactList";
import Bio from "../Bio";
import Milestones from "../Milestones";
import AlbumList from "../AlbumList";
import TourList from "../TourList";

export default function PreviewContent({
  newsQuery,
  heroQuery,
  contactQuery,
  milestonesQuery,
  bioQuery,
  albumQuery,
  concertQuery,
}: PreviewContentProps) {
  // Check to get the right content for each query
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

   if (albumQuery) {
     const albums = usePreview(null, albumQuery);

     return (
       <>
         <AlbumList albums={albums} />
       </>
     );
   }

   if (concertQuery) {
     const tour = usePreview(null, concertQuery);

     return (
       <>
         <TourList tour={tour} />
       </>
     );
   }
  return null;
}
