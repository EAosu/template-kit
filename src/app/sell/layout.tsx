import Footer from "@/components/marketing/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html className={"overflow-x-hidden"} lang="he" dir="rtl">
        <body>
        {children}
        <Footer
            name="Ely Asaf • Web Studio"
            links={[
                { label: "צור קשר", href: "/sell" },
                { label: "הצהרת נגישות", href: "/accessibility" },
            ]}
        />
        </body>
        </html>
    );
}
