import { NextResponse } from "next/server";

const ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;
const PHONE_NUMBER_ID = process.env.PHONE_NUMBER_ID;

export async function GET() {
  try {
    const API_URL = `https://graph.facebook.com/v22.0/${PHONE_NUMBER_ID}?fields=verified_name,display_phone_number&access_token=${ACCESS_TOKEN}`;

    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error.message);
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
