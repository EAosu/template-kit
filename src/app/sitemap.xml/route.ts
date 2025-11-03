import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const routes = [
        "", "sell", "sell/thanks",
        "beauty", "restaurant", "carpentry",
        "beauty/about", "restaurant/about", "carpentry/about",
        "beauty/contact", "restaurant/contact", "carpentry/contact",
        "accessibility"
    ];

    return routes.map((path) => ({
        url: `${base}/${path}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    }));
}
