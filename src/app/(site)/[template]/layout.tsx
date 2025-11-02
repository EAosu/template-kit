import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { loadSite, type TemplateName } from "./headless-data";
import ThemeDecor from "@/components/marketing/ThemeDecor";
import Nav from "@/components/marketing/Nav";
import Footer from "@/components/marketing/Footer";
import SchemaOrg from "@/components/seo/SchemaOrg";

export default async function TemplateLayout({
                                                 children,
                                                 params,
                                             }: {
    children: ReactNode;
    params: Promise<{ template: TemplateName }>;
}) {
    const { template } = await params;
    const site = await loadSite(template);
    if (!site) return notFound();

    const base = `/${template}` as const;
    const navItems = [
        { label: "בית", href: base },
        { label: "אודות", href: `${base}/about` },
        { label: "שירותים", href: `${base}/services` },
        { label: "צור קשר", href: `${base}/contact` },
    ] as const;

    return (
        <div className={`relative min-h-screen theme-${site.theme}`}>
            <ThemeDecor theme={site.theme} />
            <SchemaOrg site={site} url={process.env.NEXT_PUBLIC_SITE_URL ? `${process.env.NEXT_PUBLIC_SITE_URL}${base}` : undefined} />

            <Nav theme={site.theme} items={navItems} brand={site.name} logo={site.logo} />
            <main id="main">{children}</main>
            <Footer name={site.name} links={[{ label: "צור קשר", href: `${base}/contact` }]} />
        </div>
    );
}
