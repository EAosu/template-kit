"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import BrandLogo from "@/components/branding/BrandLogo";
import type { Media } from "@/lib/schema";

export type NavItem = { label: string; href: string };

export interface NavProps {
    theme: "beauty" | "carpentry" | "restaurant";
    items: ReadonlyArray<NavItem>;
    brand: string;
    logo?: Media;
}

export default function Nav({ theme, items, brand, logo }: NavProps) {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
    }, [open]);

    const surface =
        theme === "carpentry"
            ? "color-mix(in oklab, var(--bg) 80%, transparent)"
            : "color-mix(in oklab, var(--bg) 92%, transparent)";

    const radius =
        theme === "beauty" ? "rounded-full" : theme === "carpentry" ? "rounded-md" : "rounded-xl";

    return (
        <header
            className="fixed top-0 inset-x-0 z-50 border-b border-base backdrop-blur"
            style={{ background: surface }}
        >
            <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-2">
                <Link href="/" aria-label={brand} className="flex items-center gap-2">
                    <BrandLogo logo={logo} name={brand} />
                </Link>

                <ul className="hidden md:flex items-center gap-2">
                    {items.map((item) => {
                        const active = pathname === item.href;
                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`nav-link px-3 py-2 transition-all focus-visible:ring
                  ${active ? "bg-brand/10 text-brand" : "hover:bg-white/5"}
                  ${radius}`}
                                    data-active={active ? "true" : "false"}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <button
                    onClick={() => setOpen(!open)}
                    className={`md:hidden inline-flex items-center justify-center w-10 h-10 border border-base bg-card ${radius}`}
                    aria-label="פתח תפריט"
                    aria-expanded={open}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        {open ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </nav>

            {open && (
                <div className="md:hidden absolute top-full inset-x-0 bg-card backdrop-blur border-t border-base shadow-lg animate-in fade-in slide-in-from-top-2 duration-300">
                    <ul className="flex flex-col gap-1 p-4">
                        {items.map((item) => {
                            const active = pathname === item.href;
                            return (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className={`block text-center px-4 py-3 ${radius} transition-all focus-visible:ring
                      ${active ? "bg-brand/10 text-brand" : "hover:bg-white/5"}`}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            );
                        })}
                        <li className="pt-2">
                            <Link
                                href="/sell"
                                onClick={() => setOpen(false)}
                                className={`block text-center px-4 py-3 bg-brand text-white hover:brightness-110 transition ${radius}`}
                            >
                                קבל הצעת מחיר
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}
