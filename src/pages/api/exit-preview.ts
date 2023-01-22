import type { NextApiRequest, NextApiResponse } from "next";

//Exit preview mode
export default function preview(req: NextApiRequest, res: NextApiResponse) {
  res.clearPreviewData({});
  res.writeHead(307, { Location: "/" });
  res.end();
}
