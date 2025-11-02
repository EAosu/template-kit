"use client";
import type { Variants, SVGMotionProps } from "framer-motion";
import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

export interface InViewProps extends Omit<SVGMotionProps<SVGElement> & React.ComponentProps<typeof motion.div>, "children" | "variants"> {
    children: ReactNode;
    variants: Variants;
    className?: string;
}

export function InView({ children, variants, className, ...rest }: InViewProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const isIn = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isIn ? "show" : "hidden"}
            variants={variants}
            className={className}
            {...rest}
        >
            {children}
        </motion.div>
    );
}

export default InView;
