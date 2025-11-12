import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
    title: {
        default: "Ely Asaf • Web Studio",
        template: "%s | Ely Asaf • Web Studio",
    },
    description: "שם עסק: Ely Asaf • Web Studio  \n" +
        "תיאור קצר: אתרי תדמית מהירים שמייצרים לקוחות - עם SEO, נגישות ותבניות פרימיום מותאמות אישית.  \n" +
        "שירותים עיקריים: בניית אתרי תדמית, דפי נחיתה, אינטגרציות אוטומטיות, תחזוקה ושדרוג SEO.  \n" +
        "שפה: עברית ו/או אנגלית  \n" +
        "אזור פעילות: כל הארץ (עיקר: עסקים קטנים ובינוניים, עצמאיים, קוסמטיקאיות, מסעדות, נגריות)\n",
    alternates: { canonical: "/" },
    openGraph: {
        title: "Ely Asaf • Web Studio",
        description:
            "בונה אתרים מהירים, נגישים ויפים לעסקים בישראל.",
        url: "https://elyasaf-webstudio.vercel.app",
        siteName: "Ely Asaf Web Studio",
        images: [
            {
                url: "/og.png",
                width: 1200,
                height: 630,
                alt: "Ely Asaf Web Studio - בניית אתרים ודפי נחיתה",
            },
        ],
        locale: "he_IL",
        type: "website",
    },
    twitter: { card: "summary_large_image" },
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html className={"overflow-x-hidden"} lang="he" dir="rtl">
        <body>
        <Link href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[9999] focus:bg-black focus:text-white focus:rounded px-3 py-2">
            דלג לתוכן
        </Link>
        {children}
        </body>
        </html>
    );
}
