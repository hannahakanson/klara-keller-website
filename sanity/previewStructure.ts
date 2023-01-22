import Iframe from "sanity-plugin-iframe-pane";
import type { DefaultDocumentNodeResolver } from "sanity/desk";

let route: string

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {

  //Controlling the routing in preview mode
  switch(schemaType) {
  case "heroContent" && "news":
    route = ""
    break;
  case "album":
    route = "/music"
    break;
case "concert":
    route = "/tour"
    break;
  case "contact":
    route = "/contact"
    break;
case "bio" && "milestone":
    route = "/about"
    break;
    
  default:
    console.log("Invalid schema type")
}
    return S.document().views([
      S.view.form(),

      S.view
        .component(Iframe)
        .options({
          url: `${
            process.env.NEXT_PUBLIC_VERCEL_API || "http://localhost:3000"
          }/api/preview`,
          defaultSize: "desktop",
          reload: {
            button: true,
          },
          attributes: {},
        })
        .title("Preview"),
    ]);
};
