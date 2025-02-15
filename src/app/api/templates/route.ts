import { NextResponse } from "next/server";

const Business_ID = process.env.Business_ID;
const FACEBOOK_GRAPH_API_URL = `https://graph.facebook.com/v22.0/${Business_ID}/message_templates`;
const ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;

if (!ACCESS_TOKEN) {
  throw new Error("Missing FB_ACCESS_TOKEN in environment variables.");
}

export async function GET() {
  try {
    const response = await fetch(`${FACEBOOK_GRAPH_API_URL}?access_token=${ACCESS_TOKEN}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error.message || "Failed to fetch templates");
    }

    const data = await response.json();

    if (!data.data || !Array.isArray(data.data)) {
      throw new Error("Invalid API response structure");
    }

    const formattedTemplates = data.data.map((template: any) => ({
      id: template.id,
      name: template.name,
      status: template.status,
      languages: template.language || "Unknown",
      categories: template.category || "Uncategorized",
    }));

    return NextResponse.json(formattedTemplates, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
