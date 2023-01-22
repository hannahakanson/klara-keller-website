import { client } from "./sanity.client"
import imageUrlBuilder from "@sanity/image-url"

const builder = imageUrlBuilder(client)

//Function to convert image irl
const makeUrl = (source: any) => {
    return builder.image(source);
}

export default makeUrl


const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

//Scroll to top function
export function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}
