import { NextResponse } from "next/server";
import connectToDB from "@/app/lib/mongodb";
import TemplateLibrary from "@/app/models/Template_Library";

export async function GET() {
  try {
    await connectToDB();

    const templates = await TemplateLibrary.find({}).lean();

    return NextResponse.json(templates, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to fetch templates" }, { status: 500 });
  }
}
