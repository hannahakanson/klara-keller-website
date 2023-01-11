import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";

import PreviewSuspense from "../../../components/PreviewSuspense";
import PreviewContent from "../../../components/PreviewContent";
import ContactList from "../../../components/ContactList";

//Fetch the data from sanity
const query = groq`
*[_type=='contact'] {
    ...,
} | order(_createdAt desc)`;

export default async function ContactPage() {
  //IF YOU'RE IN PREVIEW MODE
  if (previewData()) {
    return (
      <PreviewSuspense fallback={<p>Loading preview</p>}>
        {/* Preview goes here */}
        <PreviewContent query={query} />
      </PreviewSuspense>
    );
  }

  //Fetch contacts
  const contacts = await client.fetch(query);

  //IF YOU'RE NOT IN PREVIEW MODE
  return (
    <div className="flex items-center justify-center md:w-2/3">
      {/* Contacts goes here */}
      <ContactList contacts={contacts} />
    </div>
  );
}
