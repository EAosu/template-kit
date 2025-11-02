import { z } from "zod";

export const mediaSchema = z.object({
    src: z.string().min(1),
    width: z.number().int().positive(),
    height: z.number().int().positive(),
    alt: z.string().default(""),
});

export type Media = z.infer<typeof mediaSchema>;

export const siteSchema = z.object({
    name: z.string(),
    tagline: z.string(),
    theme: z.union([z.literal("beauty"), z.literal("carpentry"), z.literal("restaurant")]),
    primaryCta: z.object({ label: z.string(), href: z.string() }),
    secondaryCta: z.object({ label: z.string(), href: z.string() }).optional(),
    features: z.array(z.object({ title: z.string(), desc: z.string(), icon: z.any().optional() })),
    gallery: z.array(z.string()).default([]),
    pricing: z.array(z.object({
        name: z.string(),
        price: z.string(),
        items: z.array(z.string()),
    })),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),

    logo: mediaSchema.optional(),
    hero: mediaSchema.optional(),
    contact: z.object({ whatsapp:z.string(), email:z.string().email().optional() }),
});

export type SiteConfig = z.infer<typeof siteSchema>;
