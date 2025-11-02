import { notFound } from "next/navigation";
import { loadSite, type TemplateName, TEMPLATES } from "./headless-data";
import FeatureGrid from "@/components/marketing/FeatureGrid";
import Gallery from "@/components/marketing/Gallery";
import Pricing from "@/components/marketing/Pricing";
import FAQ from "@/components/marketing/FAQ";
import Hero from "@/components/marketing/Hero";

export const dynamic = "force-static";
export const dynamicParams = false;
export async function generateStaticParams() {
    return TEMPLATES.map((template) => ({ template }));
}

export default async function TemplateHome({
                                               params,
                                           }: {
    params: Promise<{ template: TemplateName }>;
}) {
    const { template } = await params;
    const site = await loadSite(template);
    if (!site) return notFound();

    return (
        <>
            <Hero
                variant={site.theme}
                title={site.name}
                subtitle={site.tagline}
                primary={site.primaryCta}
                secondary={site.secondaryCta}
                heroImage={site.hero}
            />
            <div role="separator" aria-hidden className="fancy-hr mx-auto my-14 max-w-5xl" />
            <FeatureGrid items={site.features} />
            <div role="separator" aria-hidden className="fancy-hr mx-auto my-14 max-w-5xl" />
            <Gallery images={site.gallery} />
            <Pricing plans={site.pricing} />
            {site.faq && <FAQ items={site.faq} />}
        </>
    );
}
