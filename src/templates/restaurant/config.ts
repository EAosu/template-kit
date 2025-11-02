import type { SiteConfig } from "@/lib/schema";
const w = (n:string)=>`https://wa.me/${n}?text=${encodeURIComponent("שלום, מעוניין בתפריט והצעת מחיר לאירוע.")}`;

export const site: SiteConfig = {
    theme: "restaurant",
    name: "Local Catering",
    tagline: "טעם מקומי טרי לכל אירוע-איכות שמרגישים.",
    primaryCta: { label: "קבלו תפריט עכשיו", href: w("972502555897") },
    secondaryCta: { label: "צפו במנות", href: "#gallery" },
    features: [
        { title: "מגשים לאירועים", desc: "פתיחות, עיקריות, קינוחים-כשר." },
        { title: "התאמות תזונתיות", desc: "טבעוני/ללא גלוטן/ללא סוכר." },
        { title: "שירות עד הבית/אולם", desc: "גמיש ומהיר." },
    ],
    gallery: ["/images/restaurant/1.jpg","/images/restaurant/2.jpg","/images/restaurant/3.jpg","/images/restaurant/4.jpg"],
    logo: {
        src: "/logos/restaurant-logo.svg",
        width: 140,
        height: 36,
        alt: "Good Food",
    },
    hero: {
        src: "/images/restaurant/hero.jpg",
        width: 2400,
        height: 1400,
        alt: "מסעדה יוקרתית",
    },
    pricing: [
        { name: "מגש פתיחה", price: "₪169", items: ["עד 6 סועדים", "בחירה מרשימה", "אריזה מוקפדת"] },
        { name: "חבילת אירוע קטן", price: "₪1,490", items: ["עד 20 איש", "תפריט מגוון", "משלוח עד הבית"] },
        { name: "קייטרינג מלא", price: "מותאם", items: ["יעוץ תפריט", "צוות הגשה", "שירות מלא"] },
    ],
    contact: { whatsapp: "972502555897", email: "orders@catering.co.il" },
};
