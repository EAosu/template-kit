import Link from "next/link";
import BackToTemplate from "@/components/sales/BackToTemplate";

export default function ThanksPage() {
    return (
        <div className="mx-auto max-w-xl px-6 py-39 text-center">
            <h1 className="text-3xl md:text-4xl font-bold">תודה! ההודעה התקבלה ✅</h1>
            <p className="mt-3 text-muted">אני חוזר אליך בהקדם. בינתיים אפשר לראות דוגמאות בתבניות.</p>
            <div className="mt-8 flex justify-center gap-3">
                <Link href="/sell" className="rounded-full mb-6 px-6 py-2 border border-base bg-card btn-hover">לדף המכירות</Link>
                <BackToTemplate />
            </div>
        </div>
    );
}
