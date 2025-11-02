import { NextResponse } from "next/server";

type Lead = {
    template: "beauty" | "carpentry" | "restaurant";
    name: string;
    email: string;
    phone?: string;
    message?: string;
    createdAt?: string;
};

const hasKV = !!process.env.UPSTASH_REDIS_REST_URL && !!process.env.UPSTASH_REDIS_REST_TOKEN;

export async function POST(req: Request) {
    try {
        const data = (await req.json()) as Lead;
        const lead: Lead = { ...data, createdAt: new Date().toISOString() };

        if (hasKV) {
            const { Redis } = await import("@upstash/redis");
            const redis = new Redis({
                url: process.env.UPSTASH_REDIS_REST_URL!,
                token: process.env.UPSTASH_REDIS_REST_TOKEN!,
            });
            // שומרים ברשימה לפי תבנית
            await redis.lpush(`leads:${lead.template}`, JSON.stringify(lead));
        } else {
            console.log("[LEAD - DEMO]", lead);
        }

        return NextResponse.json({ ok: true });
    } catch (e) {
        console.error("Lead save error:", e);
        return NextResponse.json({ ok: false }, { status: 500 });
    }
}
