import "./globals.css";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
    title: "Ely Template Kit",
    description: "שלוש תבניות ייעודיות: סלון יופי, נגרות וקייטרינג - עם עיצוב עכשווי, SEO ונגישות.",
    url: process.env.NEXT_PUBLIC_SITE_URL
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="he" dir="rtl">
        <body>{children}</body>
        </html>
    );
}
