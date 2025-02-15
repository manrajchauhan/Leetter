import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import connectToDB from "@/app/lib/mongodb";
import Contact from "@/app/models/Contact";

const SECRET_KEY = process.env.JWT_SECRET as string;

const authenticate = (req: NextApiRequest, res: NextApiResponse) => {
  const authToken = req.headers.authorization?.split(" ")[1];

  if (!authToken) {
    return res.status(401).json({ message: "Unauthorized: Missing auth token" });
  }

  try {
    const decoded = jwt.verify(authToken, SECRET_KEY) as unknown as { client_id: string };
    if (!decoded.client_id) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
    return { clientId: decoded.client_id };
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDB();

  if (req.method === "GET") {
    try {
      const authResult = authenticate(req, res);
      if (!authResult) return;

      const { clientId } = authResult;
      const contacts = await Contact.find({ client_id: clientId });

      return res.status(200).json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      return res.status(500).json({ message: "Server error" });
    }
  }

  return res.status(405).json({ message: "Method Not Allowed" });
}
