import React from "react";
import type { SiteConfig } from "@/lib/schema";

type Props = { site: SiteConfig; url?: string };

export default function SchemaOrg({ site, url }: Props) {
    const address = {
        "@type": "PostalAddress",
        addressCountry: "IL",
    };

    let type = "LocalBusiness";
    if (site.theme === "beauty") type = "BeautySalon";
    if (site.theme === "restaurant") type = "Restaurant";

    const data = {
        "@context": "https://schema.org",
        "@type": type,
        name: site.name,
        url,
        description: site.tagline,
        address,
        telephone: site.contact.whatsapp ? `+${site.contact.whatsapp}` : undefined,
        sameAs: [] as string[],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
