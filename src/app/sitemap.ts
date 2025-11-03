import type { MetadataRoute } from "next";

const TEMPLATES = ["beauty", "carpentry", "restaurant"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
    const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

    const staticRoutes = ["", "sell", "sell/thanks", "accessibility"];
    const templateRoutes = TEMPLATES.flatMap((t) => [
        `${t}`,
        `${t}/about`,
        `${t}/services`,
        `${t}/contact`,
    ]);

    return [...staticRoutes, ...templateRoutes].map((path) => ({
        url: `${base}/${path}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    }));
}
