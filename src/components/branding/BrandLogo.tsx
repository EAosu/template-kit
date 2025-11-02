import Image from "next/image";
import type { Media } from "@/lib/schema";

export interface BrandLogoProps {
    logo?: Media;
    name: string;
    className?: string;
}

export default function BrandLogo({ logo, name, className }: BrandLogoProps) {
    if (!logo) {
        return <span className={`text-lg font-semibold ${className ?? ""}`}>{name}</span>;
    }
    return (
        <Image
            src={logo.src}
            alt={logo.alt || name}
            width={logo.width}
            height={logo.height}
            className={className}
            priority={false}
        />
    );
}
