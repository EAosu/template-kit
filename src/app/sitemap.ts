// app/sitemap.ts
import type { MetadataRoute } from "next";

export const dynamic = "force-static";
export const revalidate = 60 * 60;

const TEMPLATES = ["beauty", "carpentry", "restaurant"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
    const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://elyasaf-webstudio.vercel.app";

    // absolute URLs בלבד
    const staticRoutes = ["", "sell", "sell/thanks", "accessibility"].map((p) => `${base}/${p}`);
    const templateRoutes = TEMPLATES.flatMap((t) => [
        `${base}/${t}`,
        `${base}/${t}/about`,
        `${base}/${t}/services`,
        `${base}/${t}/contact`,
    ]);

    const urls = [...staticRoutes, ...templateRoutes];

    const lastMod = new Date();

    return urls.map((url) => ({
        url,
        lastModified: lastMod,
        changeFrequency: "monthly",
        priority: 0.8,
    }));
}
