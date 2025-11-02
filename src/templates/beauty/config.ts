import type { SiteConfig } from "@/lib/schema";

const w = (num:string) => `https://wa.me/${num}?text=${encodeURIComponent("היי, אשמח לפרטים :)")}`;

export const site: SiteConfig = {
    theme: "beauty",
    name: "Bloom Studio",
    tagline: "יופי. דיוק. חוויה אישית שמרגישים.",
    primaryCta: { label: "דברו איתנו בווטסאפ", href: w("972501234567") },
    secondaryCta: { label: "צפו בגלריה", href: "#gallery" },
    features: [
        { title: "טיפולי פנים מתקדמים", desc: "התאמה אישית לכל סוג עור." },
        { title: "מניקור ופדיקור", desc: "אסתטיקה ללא פשרות." },
        { title: "איפור ערב וכלות", desc: "לוק זוהר שיישאר כל האירוע." },
    ],
    gallery: ["/images/beauty/1.jpg","/images/beauty/2.jpg","/images/beauty/3.jpg","/images/beauty/4.jpg"],
    logo: {
        src: "/logos/beauty-logo.svg",
        width: 140,
        height: 36,
        alt: "Rose Beauty",
    },
    hero: {
        src: "/images/beauty/hero.jpg",
        width: 2400,
        height: 1400,
        alt: "סלון יופי מודרני ובהיר",
    },
    pricing: [
        { name: "חבילת היכרות", price: "₪249", items: ["ייעוץ + טיפול בסיס", "המלצות בית", "קביעת מעקב"] },
        { name: "קלאסית", price: "₪490", items: ["טיפול מלא", "סרומים מותאמים", "תיאום אונליין"] },
        { name: "פרימיום", price: "₪890", items: ["טיפול מתקדם", "סט מוצרים לבית", "עדיפות בתורים"] },
    ],
    faq: [
        { q: "איך קובעים תור?", a: "בלחיצה על הוואטסאפ, או טופס יצירת קשר." },
        { q: "האם יש חניה?", a: "כן, ברחוב הצמוד והחניון העירוני." },
    ],
    contact: { whatsapp: "972501234567", email: "hello@bloomstudio.co.il" },
};
