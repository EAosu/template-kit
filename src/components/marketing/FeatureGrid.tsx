import Container from "@/components/primitives/Container";
import InView from "@/components/motion/InView";
import { stagger, revealEmphatic } from "@/components/motion/motion";

type Item = { title: string; desc: string; icon?: React.ReactNode; };

export default function FeatureGrid({ items }: { items: Item[] }) {
    return (
        <section>
            <Container>
                <InView variants={stagger(.08)} className="grid gap-6 md:grid-cols-3">
                    {items.map((it, i) => (
                        <InView
                            key={i}
                            variants={revealEmphatic}
                            whileHover={{
                                y: -6,
                                rotate: -0.3,
                                scale: 1.01,
                                boxShadow: "0 18px 50px rgba(0,0,0,.18)",
                            }}
                            transition={{ type: "spring", stiffness: 260, damping: 22 }}
                            className="rounded-3xl bg-card p-6 border border-base shadow-soft"
                        >
                            {it.icon && <div className="mb-3">{it.icon}</div>}
                            <h3 className="text-lg font-semibold">{it.title}</h3>
                            <p className="mt-2 text-muted">{it.desc}</p>
                        </InView>
                    ))}
                </InView>
            </Container>
        </section>
    );
}
