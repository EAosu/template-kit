import type { Metadata } from "next";
import SalesHero from "@/components/sales/SalesHero";
import LeadForm from "@/components/sales/LeadForm";
import Link from "next/link";

export const metadata: Metadata = {
    title: "בניית אתרים מהירה לעסקים | Template Kit",
    description: "תבניות פרימיום מותאמות לעסק + חיבורי וואטסאפ, ג׳ימייל, טפסים, SEO ונגישות. התחילו להשיג לקוחות מהר.",
    alternates: { canonical: "/sell" },
    openGraph: { title: "בניית אתרים מהירה לעסקים", description: "Template Kit שמייצר לידים", url: "/sell" }
};

const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ely Asaf - Web Studio",
    "email": "elyasaf896@gmail.com",
    "url": "https://template-kit.vercel.app/sell",
    "areaServed": "Israel",
    "priceRange": "$$",
    "sameAs": ["https://github.com/EAosu","https://www.linkedin.com/in/ely-asaf/"],
    "offers": {
        "@type": "Offer",
        "priceCurrency": "ILS",
        "availability": "https://schema.org/InStock",
        "url": "https://template-kit.vercel.app/sell#packages"
    }
};

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
    return (
        <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
            {subtitle ? <p className="mt-2 text-muted">{subtitle}</p> : null}
        </div>
    );
}

function Card({ children }: { children: React.ReactNode }) {
    return <div className="rounded-3xl bg-card border border-base shadow-soft p-6">{children}</div>;
}

export default function SellPage() {
    return (
        <>
            <Link
                href="/"
                aria-label="חזרה לדף התבניות"
                className="fixed bottom-5 left-5 z-40 md:hidden rounded-full bg-card border border-base text-white px-4 py-3 shadow-soft focus-visible:ring"
                >
                חזרה לתבניות
            </Link>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <SalesHero />
            <section className="py-14">
                <div className="mx-auto max-w-6xl px-6">
                    <SectionTitle title="למה לבחור בי" subtitle="זריזות, איכות, ושקיפות מלאה" />
                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                        <Card><h3 className="font-semibold">מהירות על</h3><p className="text-muted mt-1">עולים לאוויר בתוך ימים - לא חודשים.</p></Card>
                        <Card><h3 className="font-semibold">מודולריות</h3><p className="text-muted mt-1">תשתית תבניות חכמה שמותאמת בקליק.</p></Card>
                        <Card><h3 className="font-semibold">תוצאות</h3><p className="text-muted mt-1">CTA, SEO ונגישות - כדי שיגיעו אליך.</p></Card>
                    </div>
                </div>
            </section>

            <section id="packages" className="py-14">
                <div className="mx-auto max-w-6xl px-6">
                    <SectionTitle title="חבילות ומחירים" subtitle="גמיש בהתאם לעסק ולתקציב" />
                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                        <Card>
                            <h3 className="text-xl font-bold">התחלה</h3>
                            <p className="text-3xl font-extrabold mt-1">₪2,490</p>
                            <ul className="mt-3 text-muted space-y-2">
                                <li>דף נחיתה ממיר</li><li>חיבור טופס למייל</li><li>מותאם נייד ונגישות בסיסית</li>
                            </ul>
                            <a href="#contact" className="mt-6 inline-block rounded-full px-5 py-3 bg-brand text-white hover:brightness-110">קבלו הצעה</a>
                        </Card>
                        <Card>
                            <h3 className="text-xl font-bold">עסק צומח</h3>
                            <p className="text-3xl font-extrabold mt-1">₪4,900</p>
                            <ul className="mt-3 text-muted space-y-2">
                                <li>אתר עד 5 עמודים</li><li>גלריות/בלוג/עדכונים</li><li>SEO + אנליטיקס</li>
                            </ul>
                            <a href="#contact" className="mt-6 inline-block rounded-full px-5 py-3 bg-brand text-white hover:brightness-110">קבלו הצעה</a>
                        </Card>
                        <Card>
                            <h3 className="text-xl font-bold">פרימיום</h3>
                            <p className="text-3xl font-extrabold mt-1">₪7,900</p>
                            <ul className="mt-3 text-muted space-y-2">
                                <li>עיצוב מותאם אישית</li><li>אוטומציות ו-API</li><li>נגישות, ביצועים ו-A/B</li>
                            </ul>
                            <a href="#contact" className="mt-6 inline-block rounded-full px-5 py-3 bg-brand text-white hover:brightness-110">קבלו הצעה</a>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="py-14">
                <div className="mx-auto max-w-6xl px-6">
                    <SectionTitle title="איך זה עובד" />
                    <div className="mt-8 grid gap-6 md:grid-cols-4">
                        <Card><h3 className="font-semibold">1. היכרות</h3><p className="text-muted mt-1">יעדים, קהל וסטייל.</p></Card>
                        <Card><h3 className="font-semibold">2. בחירת תבנית</h3><p className="text-muted mt-1">Beauty / Carpentry / Restaurant או מותאם אישית.</p></Card>
                        <Card><h3 className="font-semibold">3. התאמות</h3><p className="text-muted mt-1">צבעים, לוגו, תוכן, אינטגרציות.</p></Card>
                        <Card><h3 className="font-semibold">4. עלייה לאוויר</h3><p className="text-muted mt-1">דומיין, SEO, הדרכה קצרה, והופ - לקוחות.</p></Card>
                    </div>
                </div>
            </section>

            <section className="py-14">
                <div className="mx-auto max-w-4xl px-6">
                    <SectionTitle title="שאלות נפוצות" />
                    <div className="mt-8 space-y-4">
                        <Card><h3 className="font-semibold">כמה זמן לוקח?</h3><p className="text-muted mt-1">דף נחיתה – 3-5 ימים. אתר מלא - 1-2 שבועות, תלוי בהיקף.</p></Card>
                        <Card><h3 className="font-semibold">מה עלות תחזוקה?</h3><p className="text-muted mt-1">אפשר ריטיינר חודשי או לפי צורך.</p></Card>
                        <Card><h3 className="font-semibold">נגישות/SEO?</h3><p className="text-muted mt-1">כן. ה־Template Kit בנוי לזה מהיסוד.</p></Card>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="mx-auto max-w-3xl px-6">
                    <SectionTitle title="ספרו לי מה אתם צריכים" subtitle="מקבל את המיילים ישירות ומגיב מהר" />
                    <div className="mt-8 rounded-3xl bg-card border border-base shadow-soft p-6">
                        <LeadForm />
                    </div>
                </div>
            </section>
        </>
    );
}
