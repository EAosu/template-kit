"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SalesHero() {
    return (
        <section className="relative overflow-hidden py-20 md:py-28">
            {/* רקע נשי/טכנולוגי עדין */}
            <motion.div
                aria-hidden
                className="absolute inset-0 -z-10"
                initial={{ opacity: 0.7, scale: 1 }}
                animate={{ opacity: [0.7, 0.9, 0.7], scale: [1, 1.015, 1] }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    background: [
                        "radial-gradient(60% 50% at 70% 0%, rgba(109,40,217,.25), transparent 70%)",
                        "radial-gradient(55% 45% at 20% 30%, rgba(34,211,238,.20), transparent 65%)",
                        "linear-gradient(180deg, rgba(255,255,255,.06), transparent)"
                    ].join(", "),
                }}
            />
            <div className="mx-auto max-w-5xl px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                    אתרים מהירים שמייצרים לקוחות
                </h1>
                <p className="mt-4 text-lg md:text-xl text-muted">
                    תבניות פרימיום מותאמות לעסק שלך + התאמות עיצוב, תוכן ואוטומציות. התחלה מהירה - תוצאה מושלמת.
                </p>
                <div className="mt-8 flex items-center justify-center gap-3">
                    <Link href="#packages" className="rounded-full px-6 py-3 bg-brand text-white btn-hover focus-visible:ring">
                        חבילות ומחירים
                    </Link>
                    <Link href="#contact" className="rounded-full px-6 py-3 border border-base bg-card hover:bg-white/5 focus-visible:ring">
                        דברו איתי
                    </Link>
                </div>
            </div>
        </section>
    );
}
