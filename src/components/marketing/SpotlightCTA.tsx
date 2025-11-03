// components/marketing/SpotlightCTA.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SpotlightCTA() {
    return (
        <section className="relative py-20 m-1">
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
            >
                <motion.div
                    className="absolute left-1/2 top-1/2 h-[10rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
                    style={{ background: "radial-gradient(closest-side, rgba(255,255,255,1), transparent)" }}
                    animate={{ x: [-60, 60, -60], y: [-30, 20, -30], opacity: [0.6, 0.7, 0.6] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold">רוצים אתר שמייצר לקוחות?</h2>
                <p className="mt-3 text-muted">השאירו פרטים ונחזור אליכם עם הצעת מחיר מהירה.</p>

                <div className="mt-10 text-center">
                    <Link href="/sell" className="rounded-full px-6 py-3 bg-black/50 text-white hover:bg-black/70">
                        קבלו הצעת מחיר
                    </Link>
                </div>
            </div>
        </section>
    );
}
