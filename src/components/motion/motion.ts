import type { Variants } from "framer-motion";

export const revealEmphatic: Variants = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    show: {
        opacity: 1, y: 0, scale: 1,
        transition: { type: "spring", stiffness: 420, damping: 30, mass: 0.6 }
    },
};

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 16 },
    show:   { opacity: 1, y: 0, transition: { duration: .45, ease: [0.22,1,0.36,1] } }
};

export const stagger = (gap = 0.07): Variants => ({
    hidden: {},
    show: { transition: { staggerChildren: gap } }
});

export const scaleIn: Variants = {
    hidden: { opacity:0, scale: .96 },
    show:   { opacity:1, scale: 1, transition: { duration: .35 } }
};

export const floatUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show:   { opacity: 1, y: 0, transition: { duration: .5 } }
};

export const zoomReveal: Variants = {
    hidden: { opacity: 0, scale: 1.15 },
    show:   { opacity: 1, scale: 1.08, transition: { duration: .6, ease: [0.22,1,0.36,1] } }
};

export const featureCard: Variants = {
    hidden: { opacity: 0, y: 16, scale: .98 },
    show:   { opacity: 1, y: 0, scale: 1, transition: { duration: .35 } },
};
