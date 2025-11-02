"use client";
import { useMemo } from "react";

export default function TrailToCTA() {
    const path = useMemo(
        () => "M10,90 C150,40 300,140 590,30",
        []
    );

    return (
        <div className="relative mx-auto mt-16 flex max-w-3xl flex-col items-center trail-wrap">
            {/* שביל SVG */}
            <svg viewBox="0 0 600 120" className="h-28 w-full" aria-hidden>
                <path d={path} className="trail-stroke" />
            </svg>

            {/* נקודות שצועדות על המסלול (CSS motion-path) */}
            {Array.from({ length: 6 }).map((_, i) => (
                <div
                    key={i}
                    className="trail-dot"
                    style={{
                        offsetPath: `path("${path}")`,
                        animationDelay: `${i * 0.25}s`,
                    }}
                    aria-hidden
                />
            ))}

            {/* כפתור CTA מודגש */}
            <a
                href="mailto:ely@example.com?subject=בניית%20אתר%20לעסק"
                className="btn-hover cta-pulse mt-2 inline-flex rounded-xl bg-brand px-6 py-3 text-white font-semibold shadow-soft"
            >
                רוצה אתר? דברו איתי
            </a>
            <p className="mt-2 text-xs text-muted">לחיצה תפתח מייל לפנייה מהירה.</p>
        </div>
    );
}
