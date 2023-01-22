import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../../src/lib/sanity.client";

import PreviewSuspense from "../../../components/PreviewSuspense";
import PreviewContent from "../../../components/PreviewContent";
import ContactList from "../../../components/ContactList";

//Fetch the data from sanity
const contactQuery = groq`
*[_type=='contact'] {
    ...,
} | order(_createdAt desc)`;

export default async function ContactPage() {
  //IF YOU'RE IN PREVIEW MODE
  if (previewData()) {
    return (
      <PreviewSuspense fallback={<p>Loading preview</p>}>
        {/* Preview goes here */}
        <PreviewContent contactQuery={contactQuery} />
      </PreviewSuspense>
    );
  }

  //Fetch contacts
  const contacts = await client.fetch(contactQuery);

  //IF YOU'RE NOT IN PREVIEW MODE
  return (
    <div className="w-full flex flex-col md:w-2/5">
      {/* Contacts goes here */}
      <ContactList contacts={contacts} />
    </div>
  );
}
