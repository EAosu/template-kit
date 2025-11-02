import type { SiteConfig } from "@/lib/schema";
const w = (n:string)=>`https://wa.me/${n}?text=${encodeURIComponent("שלום, מעוניין בהצעת מחיר לפרויקט נגרות.")}`;

export const site: SiteConfig = {
    theme: "carpentry",
    name: "Oak & Steel",
    tagline: "נגרות מותאמת אישית-דיוק, עמידות ואסתטיקה.",
    primaryCta: { label: "הצעת מחיר בווטסאפ", href: w("972507654321") },
    secondaryCta: { label: "פרויקטים", href: "#gallery" },
    features: [
        { title: "מטבחים בהתאמה מלאה", desc: "גימור פרימיום, חומרי גלם איכותיים." },
        { title: "נגרות מסחרית", desc: "דלפקים, מדפים, ריהוט חנות." },
        { title: "רהיטים יחידניים", desc: "שולחנות סלון, מזנונים, ספריות קיר." },
    ],
    gallery: ["/images/carpentry/1.jpg","/images/carpentry/2.jpg","/images/carpentry/3.jpg","/images/carpentry/4.jpg"],
    logo: {
        src: "/logos/carpentry-logo.svg",
        width: 140,
        height: 36,
        alt: "Strong Wood",
    },
    hero: {
        src: "/images/carpentry/hero.jpg",
        width: 2400,
        height: 1400,
        alt: "סטודיו מפואר לנגרות",
    },
    pricing: [
        { name: "סקיצה ואפיון", price: "₪490", items: ["מדידות בשטח", "הדמיה בסיסית", "כתב כמויות ראשוני"] },
        { name: "פרויקט בינוני", price: "₪7,900–19,000", items: ["ייצור", "התקנה", "אחריות"] },
        { name: "פרימיום", price: "₪20,000+", items: ["חומרי פרימיום", "Custom מלא", "ליווי אדריכלי"] },
    ],
    contact: { whatsapp: "972507654321", email: "build@oaksteel.co.il" },
};
