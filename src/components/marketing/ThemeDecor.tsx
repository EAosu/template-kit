// components/marketing/ThemeDecor.tsx
"use client";
import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

export interface ThemeDecorProps {
    theme: "beauty" | "carpentry" | "restaurant";
}

export default function ThemeDecor({ theme }: ThemeDecorProps) {
    const reduce = useReducedMotion();

    if (theme === "beauty") {
        return (
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0.75, scale: 1 }}
                    animate={reduce ? {} : { opacity: [0.7, 0.9, 0.7], scale: [1, 1.02, 1] }}
                    transition={reduce ? { duration: 0 } : { duration: 14, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0"
                    style={{
                        background: [
                            "radial-gradient(70% 65% at 70% 0%, rgba(255,192,203,0.55), transparent 70%)",
                            "radial-gradient(55% 50% at 20% 25%, rgba(253,164,175,0.45), transparent 65%)",
                            "radial-gradient(60% 45% at 60% 85%, rgba(244,114,182,0.35), transparent 70%)",
                        ].join(", "),
                    }}
                />
                <motion.div
                    initial={{ opacity: 0.4 }}
                    animate={reduce ? {} : { opacity: [0.35, 0.5, 0.35] }}
                    transition={reduce ? { duration: 0 } : { duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-1/2 bottom-[-18%] h-[42rem] w-[82rem] -translate-x-1/2 rounded-full blur-3xl"
                    style={{
                        background: "radial-gradient(closest-side, rgba(255,255,255,0.85), rgba(255,255,255,0.15))",
                    }}
                />
                <div
                    className="absolute inset-0 mix-blend-overlay opacity-[.05]"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='.5'/></svg>\")",
                        backgroundSize: "160px 160px",
                    }}
                />
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
                            "radial-gradient(circle at 25% 10%, #8b5a2b 0, transparent 40%), radial-gradient(circle at 80% 30%, #3f2b1d 0, transparent 35%)",
                    }}
                />
                <div
                    className="absolute inset-0 mix-blend-overlay opacity-20"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 20 20'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
                    }}
                />
            </div>
        );
    }

    return (
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <motion.div
                initial={{ opacity: 0.6, scale: 1 }}
                animate={reduce ? {} : { opacity: [0.55, 0.75, 0.55], scale: [1, 1.015, 1] }}
                transition={reduce ? { duration: 0 } : { duration: 16, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0"
                style={{
                    background: [
                        "radial-gradient(80% 60% at 50% -10%, rgba(22,163,74,0.35), transparent 70%)",
                        "radial-gradient(55% 45% at 20% 35%, rgba(16,185,129,0.28), transparent 65%)",
                        "radial-gradient(50% 40% at 85% 80%, rgba(34,197,94,0.22), transparent 60%)",
                    ].join(", "),
                }}
            />
            <div
                className="absolute inset-0 mix-blend-overlay opacity-[.045]"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='.45'/></svg>\")",
                    backgroundSize: "160px 160px",
                }}
            />
        </div>
    );
}
