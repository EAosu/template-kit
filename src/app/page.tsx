// app/page.tsx (הפורטל)
"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import SpotlightCTA from "@/components/marketing/SpotlightCTA";
import Footer from "@/components/marketing/Footer";

type Card = {
    slug: "beauty" | "carpentry" | "restaurant";
    title: string;
    desc: string;
    img: { src: string; alt: string; width: number; height: number };
};

const cards: readonly Card[] = [
    {
        slug: "beauty",
        title: "Beauty Studio",
        desc: "ורוד-לבן בהיר, עדין ומדויק.",
        img: { src: "/images/beauty/hero.jpg", alt: "Beauty template hero", width: 1200, height: 800 },
    },
    {
        slug: "carpentry",
        title: "Carpentry",
        desc: "כהה-חם עם תחושת חומר.",
        img: { src: "/images/carpentry/hero.jpg", alt: "Carpentry template hero", width: 1200, height: 800 },
    },
    {
        slug: "restaurant",
        title: "Catering",
        desc: "טרי-חגיגי עם תפריט מסודר.",
        img: { src: "/images/restaurant/hero.jpg", alt: "Restaurant template hero", width: 1200, height: 800 },
    },
] as const;

export default function HomePage() {
    return (
        <main className="min-h-[100svh] bg-[var(--bg)] text-[var(--fg)]">
            <section className="mx-auto max-w-6xl px-4 py-24">
                <motion.h1
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }}
                    className="text-center text-5xl md:text-7xl font-extrabold"
                >
                    Ely Web Studio
                </motion.h1>

                <SpotlightCTA />

                <div role="separator" aria-hidden className="fancy-hr mx-auto my-14 max-w-5xl" />

                <motion.p
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .1 }}
                    className="mt-4 text-center text-muted"
                >
                    שלוש תבניות מודרניות ומוכרות — מוכנות להדגמה ולסגירת לקוח.
                </motion.p>

                <div className="mt-14 grid gap-6 md:grid-cols-3">
                    {cards.map((c, i) => (
                        <motion.article
                            key={c.slug}
                            initial={{ opacity: 0, y: 18, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: .45, delay: i * 0.08 }}
                            className="group rounded-2xl border border-base bg-card p-4 shadow-soft"
                        >
                            <div className="relative h-40 w-full overflow-hidden rounded-xl">
                                <Image
                                    src={c.img.src}
                                    alt={c.img.alt}
                                    width={c.img.width}
                                    height={c.img.height}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    priority={i === 0}
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                            </div>

                            <h2 className="mt-4 text-xl font-semibold">{c.title}</h2>
                            <p className="mt-1 text-sm text-muted">{c.desc}</p>

                            <div className="mt-5 flex items-center justify-between">
                                <Link
                                    href={`/${c.slug}`}
                                    target="_blank"
                                    className="hover:brightness-110 inline-flex rounded-xl bg-brand px-4 py-2 text-white focus-visible:ring"
                                    data-analytics="view-template"
                                    data-template={c.slug}
                                >
                                    צפה בתבנית
                                </Link>
                                <Link
                                    href="/sell"
                                    className="btn-hover rounded-xl border border-base bg-card px-3 py-2 hover:bg-white/5 focus-visible:ring"
                                    data-analytics="portal-cta"
                                >
                                    קבל הצעת מחיר
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>

            <Footer
                name="Ely Asaf • Web Studio"
                links={[
                    { label: "צור קשר", href: "/sell" },
                    { label: "הצהרת נגישות", href: "/accessibility" },
                ]}
            />
        </main>
    );
}
