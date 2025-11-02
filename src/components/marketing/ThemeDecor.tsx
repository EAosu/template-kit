"use client";
import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

export interface ThemeDecorProps {
    theme: "beauty" | "carpentry" | "restaurant";
}

export default function ThemeDecor({ theme }: ThemeDecorProps) {
    const prefersReduce = useReducedMotion();

    if (theme === "beauty") {
        return (
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 0.35, scale: 1 }}
                    transition={prefersReduce ? { duration: 0 } : { duration: 1.1, ease: [0.22,1,0.36,1] }}
                    className="absolute left-1/2 top-[-10%] h-[28rem] w-[64rem] -translate-x-1/2 rounded-full blur-3xl"
                    style={{ background: "linear-gradient(90deg,var(--brand),var(--brand-2))" }}
                />
                <div className="absolute inset-0 [mask-image:radial-gradient(60%_40%_at_50%_0%,black,transparent)] bg-white/0" />
            </div>
        );
    }

    if (theme === "carpentry") {
        return (
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 25% 10%, #8b5a2b 0, transparent 40%), radial-gradient(circle at 80% 30%, #3f2b1d 0, transparent 35%)"
                    }}
                />
                <div
                    className="absolute inset-0 mix-blend-overlay opacity-20"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 20 20'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/g%3E%3C/svg%3E\")"
                    }}
                />
            </div>
        );
    }

    return (
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <motion.div
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 0.28 }}
                transition={prefersReduce ? { duration: 0 } : { duration: 1.0, ease: [0.22,1,0.36,1] }}
                className="absolute inset-x-0 top-[-6rem] h-[18rem] [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]"
                style={{ background: "linear-gradient(90deg,var(--brand),var(--brand-2))" }}
            />
            <div className="absolute inset-x-0 bottom-[-8rem] h-[16rem] opacity-20"
                 style={{ background: "radial-gradient(60% 40% at 50% 50%, var(--brand-2), transparent)" }} />
        </div>
    );
}
