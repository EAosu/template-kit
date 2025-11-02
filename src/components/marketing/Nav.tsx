// components/marketing/Nav.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

    const surface =
        theme === "carpentry"
            ? "color-mix(in oklab, var(--bg) 80%, transparent)"
            : "color-mix(in oklab, var(--bg) 92%, transparent)";

    return (
        <header className="fixed top-0 inset-x-0 z-50 border-b border-base backdrop-blur"
                style={{ background: surface }}>
            <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-2">
                <Link href="/" aria-label={brand} className="flex items-center gap-2">
                    <BrandLogo logo={logo} name={brand} />
                </Link>

                <ul className="flex items-center gap-2">
                    {items.map((item) => {
                        const active = pathname === item.href;
                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`nav-link px-3 py-2 transition-all focus-visible:ring
                  ${active ? "bg-brand/10 text-brand" : "hover:bg-white/5"}
                  ${theme === "beauty" ? "rounded-full" : theme === "carpentry" ? "rounded-md" : "rounded-xl"}`}
                                    data-active={active ? "true" : "false"}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}
