import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email }: { email: string } = req.body;
    console.log(email);
    res.status(200).json({ status: "ok" });
  } else {
    res.status(404).json({ status: "not found" });
  }
}
