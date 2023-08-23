import { NextApiRequest, NextApiResponse } from "next";

const sampleComments = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@email.com",
    comment: "This is a comment",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "janedoe@email.com",
    comment: "This is another comment",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, name, comment } = req.body;
    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !comment ||
      comment.trim() === ""
    ) {
      return res.status(422).json({ message: "Invalid input." });
    }
    const newComment = {
      id: Number(new Date().toISOString()),
      name,
      email,
      comment,
    };
    sampleComments.push(newComment);
    console.log(newComment);
    return res
      .status(201)
      .json({ message: "Added comment.", comment: newComment });
  }
  if (req.method === "GET") {
    return res.status(200).json({ comments: sampleComments });
  }
}
