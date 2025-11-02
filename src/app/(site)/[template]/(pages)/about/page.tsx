import { notFound } from "next/navigation";
import { loadSite, type TemplateName } from "../../headless-data";
import Gallery from "@/components/marketing/Gallery";
import Section from "@/components/primitives/Section";
import Container from "@/components/primitives/Container";

export default async function AboutPage({ params }: { params: Promise<{ template: TemplateName }>}) {
    const { template } = await params;
    const site = await loadSite(template);
    if (!site) return notFound();

    const base = `/${template}`;
    const nav = [
        { label: "בית", href: base },
        { label: "אודות", href: `${base}/about` },
        { label: "שירותים", href: `${base}/services` },
        { label: "צור קשר", href: `${base}/contact` },
    ];

    return (
        <main className={`relative theme-${site.theme}`}>
            <Section>
                <Container>
                    <h1 className="text-4xl font-bold">אודות {site.name}</h1>
                    <p className="mt-4 text-muted">
                        כאן תכתוב כמה פסקאות על העסק: ניסיון, ערכים, למה לבחור בכם וכו׳.
                    </p>
                </Container>
            </Section>
            <Gallery images={site?.gallery} />
        </main>
    );
}
