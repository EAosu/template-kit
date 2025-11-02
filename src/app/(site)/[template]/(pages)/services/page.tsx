import { notFound } from "next/navigation";
import { loadSite, type TemplateName } from "../../headless-data";
import Section from "@/components/primitives/Section";
import Container from "@/components/primitives/Container";
import FeatureGrid from "@/components/marketing/FeatureGrid";
import Pricing from "@/components/marketing/Pricing";

export const dynamic = "force-static";

export default async function ServicesPage({
                                               params,
                                           }: {
    params: Promise<{ template: TemplateName }>;
}) {
    const { template } = await params;
    const site = await loadSite(template);
    if (!site) return notFound();

    return (
        <>
            <Section>
                <Container>
                    <h1 className="text-4xl font-bold">שירותים</h1>
                    <p className="mt-3 text-muted">
                        מה אנחנו מציעים ב{site.name}: חבילות, התאמות ושדרוגים שיווקיים שמייצרים תוצאות.
                    </p>
                </Container>
            </Section>

            <FeatureGrid items={site.features} />

            <Section>
                <Container>
                    <h2 className="text-2xl font-semibold">חבילות ומחירים</h2>
                    <p className="mt-2 text-muted">בחרו את מה שמתאים לכם - אפשר לשלב ולהרחיב.</p>
                </Container>
            </Section>

            <Pricing plans={site.pricing} />
        </>
    );
}
