import { NextResponse } from "next/server";
import connectToDB from "@/app/lib/mongodb";
import TemplateLibrary from "@/app/models/Template_Library";

const templates = [
  { category: "Marketing", name: "Marketing Campaign", body: "Boost your sales with this engaging WhatsApp campaign template." },
  { category: "Promotions", name: "Limited Time Offer", body: "Notify your users about limited-time discounts and offers." },
  { category: "Notifications", name: "New Feature Alert", body: "Inform your users about new features or product updates." },
  { category: "Updates", name: "System Maintenance", body: "Keep your users informed about scheduled system maintenance." },
  { category: "Reminders", name: "Event Reminder", body: "Send timely reminders for events, appointments, or tasks." },
];

export async function POST(req: Request) {
  try {
    await connectToDB();
    await TemplateLibrary.insertMany(templates);

    return NextResponse.json({ message: "Templates added successfully" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Database error", error }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: "Use POST to seed templates" }, { status: 405 });
}
