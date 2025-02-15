import { NextApiRequest, NextApiResponse } from "next";
import connectToDB from "@/app/lib/mongodb";
import Contact from "@/app/models/Contact";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDB();

  if (req.method === "POST") {
    try {
      const { name, email, source, attributes } = req.body;
      const authToken = req.headers.authorization;
      const clientId = req.headers["client_id"];

      if (!authToken || !clientId) {
        return res.status(401).json({ message: "Unauthorized: Missing auth token or client ID" });
      }

      if (!name || !email || !source) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      const newContact = new Contact({
        name,
        email,
        source,
        attributes,
        client_id: clientId,
      });

      await newContact.save();
      return res.status(201).json({ message: "Contact added successfully", contact: newContact });
    } catch (error) {
      console.error("Error adding contact:", error);
      return res.status(500).json({ message: "Server error" });
    }
  }

  return res.status(405).json({ message: "Method Not Allowed" });
}
