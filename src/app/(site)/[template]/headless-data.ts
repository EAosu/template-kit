import { siteSchema, type SiteConfig } from "@/lib/schema";

export const TEMPLATES = ["beauty", "carpentry", "restaurant"] as const;
export type TemplateName = typeof TEMPLATES[number];

const templateLoaders: Record<TemplateName, () => Promise<SiteConfig>> = {
    beauty: () => import("@/templates/beauty/config").then((m) => m.site),
    carpentry: () => import("@/templates/carpentry/config").then((m) => m.site),
    restaurant: () => import("@/templates/restaurant/config").then((m) => m.site),
};

export async function loadSite(template: TemplateName): Promise<SiteConfig | null> {
    try {
        const loader = templateLoaders[template];
        const raw = await loader();
        const parsed = siteSchema.safeParse(raw);
        if (!parsed.success) {
            console.error("Invalid site config:", parsed.error);
            return null;
        }
        return parsed.data;
    } catch (e) {
        console.error("Failed to load site config:", e);
        return null;
    }
}
