import { notFound } from "next/navigation";
import { loadSite, type TemplateName } from "../../headless-data";
import Section from "@/components/primitives/Section";
import Container from "@/components/primitives/Container";
import ContactForm from "@/components/forms/ContactForm";

export const dynamic = "force-static";

export default async function ContactPage({
                                              params,
                                          }: {
    params: Promise<{ template: TemplateName }>;
}) {
    const { template } = await params;
    const site = await loadSite(template);
    if (!site) return notFound();

    const whatsappHref = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent("שלום, אשמח לקבל פרטים 🙂")}`;

    return (
        <>
            <Section>
                <Container>
                    <h1 className="text-4xl font-bold rounded-theme inline-block px-2">צור קשר</h1>
                    <p className="mt-3 text-muted">נשמח לשמוע מכם—וואטסאפ מיידי או טופס מהיר.</p>

                    <ContactForm
                        template={site.theme}       // "beauty" | "carpentry" | "restaurant"
                        whatsappHref={whatsappHref}
                        email={site.contact.email}
                    />
                </Container>
            </Section>
        </>
    );
}
