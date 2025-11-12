import * as React from "react";
import Link from "next/link";

export interface ButtonLinkProps {
    href: string;
    children: React.ReactNode;
    variant?: "solid" | "outline";
    className?: string;
}

export default function ButtonLink({ href, children, variant="solid", className }: ButtonLinkProps) {
    const base = "inline-flex items-center justify-center rounded-theme px-5 py-3 text-sm font-medium focus:outline-none focus-visible:ring btn-hover";
    const solid = "bg-brand text-white shadow-soft hover:opacity-90 accent-ring";
    const outline = "border border-base hover:bg-white/5";
    return (
        <Link href={href} className={`${base} ${variant==="solid" ? solid : outline} ${className||""}`}>
            {children}
        </Link>
    );
}
