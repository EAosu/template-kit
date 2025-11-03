import * as React from "react";

export interface FooterProps {
    name: string;
    links?: { label: string; href: string }[];
    year?: number;
}

export default function Footer({ name, links = [], year = new Date().getFullYear() }: FooterProps) {
    const surface = "color-mix(in oklab, var(--bg) 30%, transparent)";

    return (
        <footer className="mt-20 border-t border-base" role="contentinfo"
                style={{ background: surface }}>
            <div className="mx-auto max-w-6xl px-4 py-10">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <p className="text-sm text-muted font-bold">
                        © {year} {name}. כל הזכויות שמורות.
                    </p>
                    {!!links.length && (
                        <nav aria-label="קישורים תחתונים">
                            <ul className="flex flex-wrap gap-4">
                                {links.map((l) => (
                                    <li key={l.href}>
                                        <a className="text-sm hover:underline" href={l.href}>{l.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    )}
                </div>
            </div>
        </footer>
    );
}
