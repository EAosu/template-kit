"use client";
import Link from "next/link";

export default function BackToTemplates() {
    return (
        <div className="mb-6 flex justify-center md:justify-start">
            <Link
                href="/"
                aria-label="חזרה לדף התבניות"
                className={[
                    "group inline-flex items-center gap-2 rounded-full",
                    "border border-base bg-card px-4 py-2 shadow-soft",
                    "hover:bg-white/5 focus-visible:ring",
                    "btn-hover"
                ].join(" ")}
                data-analytics="back-to-templates"
            >
                <svg
                    width="18" height="18" viewBox="0 0 24 24"
                    className="transition-transform duration-300 group-hover:-translate-x-0.5"
                    aria-hidden="true"
                >
                    <path
                        d="M10.5 6L4.5 12L10.5 18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M5 12H19.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
                <span className="text-sm">חזרה לתבניות</span>
            </Link>
        </div>
    );
}
