import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const mode = searchParams.get("hub.mode");
    const token = searchParams.get("hub.verify_token");
    const challenge = searchParams.get("hub.challenge");

    if (mode === "subscribe" && token === process.env.WA_VERIFY_TOKEN) {
        return new NextResponse(challenge, { status: 200 });
    } else {
        return new NextResponse("Forbidden", { status: 403 });
    }
}

export async function POST(req: NextRequest) {
    try {

        const body = req.body ? await req.json() : null;

        if (!body) {
            console.warn("⚠️ Received an empty webhook request!");
            return new NextResponse("EVENT_RECEIVED", { status: 200 });
        }

        console.log("Received Webhook:", JSON.stringify(body, null, 2));

        if (body.object === "whatsapp_business_account") {
            const messages = body.entry?.[0]?.changes?.[0]?.value?.messages;
            if (messages) {
                const message = messages[0];
                const from = message.from;
                const text = message.text?.body;

                console.log(`📩 New message from ${from}: ${text}`);
            }
        }

        return new NextResponse("EVENT_RECEIVED", { status: 200 });
    } catch (error) {
        console.error("🚨 Webhook Error:", error);
        return new NextResponse("Error processing request", { status: 500 });
    }
}
