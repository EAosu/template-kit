import Section from "@/components/primitives/Section";
import Container from "@/components/primitives/Container";
import { InView } from "@/components/motion/InView";
import { fadeUp } from "@/components/motion/motion";

export default function Pricing({ plans }:{ plans:{name:string;price:string;items:string[]}[] }) {
    return (
        <Section>
            <Container>
                <div className="grid gap-6 md:grid-cols-3">
                    {plans.map((p,i) => (
                        <InView key={i} variants={fadeUp}>
                            <div className="rounded-3xl bg-card p-6 border border-base flex flex-col shadow-soft">
                                <h3 className="text-xl font-semibold">{p.name}</h3>
                                <div className="mt-2 text-3xl font-bold text-brand">{p.price}</div>
                                <ul className="mt-4 space-y-2 text-sm text-muted">
                                    {p.items.map((li, idx)=> <li key={idx}>• {li}</li>)}
                                </ul>
                                <a href="#contact" className="mt-6 inline-flex items-center justify-center rounded-xl bg-brand px-4 py-2 text-white">
                                    קבל הצעת מחיר
                                </a>
                            </div>
                        </InView>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
