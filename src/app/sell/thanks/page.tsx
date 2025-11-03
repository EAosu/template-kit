import Link from "next/link";

export default function ThanksPage() {
    return (
        <div className="mx-auto max-w-xl px-6 py-20 text-center">
            <h1 className="text-3xl md:text-4xl font-bold">תודה! ההודעה התקבלה ✅</h1>
            <p className="mt-3 text-muted">אני חוזר אליך בהקדם. בינתיים אפשר לראות דוגמאות בתבניות.</p>
            <div className="mt-8 flex justify-center gap-3">
                <Link href="/" className="rounded-full px-6 py-3 bg-brand text-white hover:brightness-110">חזרה לפורטל</Link>
                <Link href="/sell" className="rounded-full px-6 py-3 border border-base bg-card hover:bg-white/5">חזרה לדף המכירות</Link>
            </div>
        </div>
    );
}
