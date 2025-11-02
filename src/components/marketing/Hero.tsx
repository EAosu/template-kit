"use client";
import Image from "next/image";
import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import ButtonLink from "@/components/primitives/ButtonLink";
import Container from "@/components/primitives/Container";
import type { Media } from "@/lib/schema";

type Variant = "beauty" | "carpentry" | "restaurant";

export interface HeroUnifiedProps {
    variant: Variant;
    title: string;
    subtitle: string;
    primary: { label: string; href: string };
    secondary?: { label: string; href: string };
    heroImage?: Media;            // אופציונלי: תמונת רקע
    className?: string;
}

const HERO_PRESETS: Record<Variant, {
    sectionClass: string;
    titleClass: string;
    subtitleClass: string;
    primaryClass: string;
    secondaryClass: string;
    deco?: (reduce: boolean) => React.ReactNode;
    overlay?: string | React.CSSProperties;
    imageOpacity?: string;
}> = {
    beauty: {
        sectionClass: "relative overflow-hidden py-24 md:py-32",
        titleClass: "text-5xl/tight md:text-7xl/tight font-semibold text-fg",
        subtitleClass: "mt-4 text-lg text-muted",
        primaryClass: "btn-hover rounded-full",
        secondaryClass: "btn-hover rounded-full",
        imageOpacity: "opacity-70",
        overlay: "radial-gradient(60% 50% at 70% 20%, rgba(253,164,175,.25), transparent 60%)",
        deco: (reduce) => (
            <motion.div
                aria-hidden
                className="pointer-events-none absolute right-[-10%] top-[-10%] -z-10 h-[26rem] w-[26rem] rounded-full blur-3xl"
                style={{ background:"radial-gradient(closest-side, var(--brand-2), transparent)" }}
                initial={{opacity:.15, scale:.9}}
                animate={{opacity:.25, scale:1}}
                transition={reduce?{duration:0}:{duration:1}}
            />
        )
    },
    carpentry: {
        sectionClass: "relative overflow-hidden py-24 md:py-32",
        titleClass: "text-5xl/tight md:text-7xl/tight font-extrabold text-fg",
        subtitleClass: "mt-4 text-lg text-muted",
        primaryClass: "btn-hover rounded-md accent-ring",
        secondaryClass: "btn-hover rounded-md",
        imageOpacity: "opacity-45",
        overlay: "radial-gradient(50% 40% at 20% 10%, rgba(180,83,9,.18), transparent 60%)",
    },
    restaurant: {
        sectionClass: "relative overflow-hidden py-24 md:py-32",
        titleClass: "text-5xl/tight md:text-7xl/tight font-extrabold text-fg",
        subtitleClass: "mt-4 text-lg text-muted",
        primaryClass: "btn-hover rounded-xl",
        secondaryClass: "btn-hover rounded-xl",
        imageOpacity: "opacity-65",
        overlay: "radial-gradient(60% 50% at 50% 0%, rgba(16,185,129,.18), transparent 60%)",
    },
};

export default function Hero({
                                        variant, title, subtitle, primary, secondary, heroImage, className
                                    }: HeroUnifiedProps) {
    const reduce = useReducedMotion();
    const preset = HERO_PRESETS[variant];

    return (
        <section className={`${preset.sectionClass} ${className ?? ""}`}>
            {heroImage && (
                <div className="absolute inset-0 -z-10">
                    <Image
                        src={heroImage.src}
                        alt=""
                        fill
                        priority
                        sizes="100vw"
                        className={`object-cover ${preset.imageOpacity ?? "opacity-75"}`}
                    />
                    {/* Overlay עדין בלבד כדי שהטקסט יהיה קריא — לא יותר מ-0.25 */}
                    <div aria-hidden className="absolute inset-0"
                         style={{ background: "linear-gradient(to top, rgba(0,0,0,.18), rgba(0,0,0,.08) 40%, transparent)" }} />
                </div>
            )}

            {preset.deco?.(!!reduce)}

            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={reduce ? { duration: 0 } : { duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-3xl"
                >
                    <h1 className={preset.titleClass}>{title}</h1>
                    <p className={preset.subtitleClass}>{subtitle}</p>
                    <div className="mt-8 flex gap-3">
                        <ButtonLink href={primary.href} className={preset.primaryClass}>{primary.label}</ButtonLink>
                        {secondary && (
                            <ButtonLink href={secondary.href} variant="outline" className={preset.secondaryClass}>
                                {secondary.label}
                            </ButtonLink>
                        )}
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
