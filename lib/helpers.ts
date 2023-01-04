import { client } from "./sanity.client"
import imageUrlBuilder from "@sanity/image-url"

const builder = imageUrlBuilder(client)

const makeUrl = (source: any) => {
    return builder.image(source);
}

export default makeUrl