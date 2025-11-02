export type SeoInput = { title: string; description: string; url?: string; locale?: string };

export function buildMetadata({ title, description, url, locale = "he_IL" }: SeoInput) {
    return {
        title,
        description,
        metadataBase: url ? new URL(url) : undefined,
        alternates: { canonical: url },
        openGraph: {
            title, description,
            type: "website",
            locale,
            url,
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
        robots: { index: true, follow: true },
    };
}
