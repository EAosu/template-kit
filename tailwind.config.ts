import type { Config } from "tailwindcss"

export default {
    content: ["./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                bg: "var(--bg)",
                fg: "var(--fg)",
                muted: "var(--muted)",
                brand: "var(--brand)",
                brand2: "var(--brand-2)",
                card: "var(--card)",
                border: "var(--border)",
            },
            boxShadow: {
                soft: "0 10px 40px rgba(0,0,0,0.15)",
            },
        }
    },
} satisfies Config