import Link from "next/link";

export default function Accessibility() {
    return (
        <div className="mx-auto max-w-3xl px-6 py-12">
            <h1 className="text-3xl font-bold">הצהרת נגישות</h1>
            <p className="mt-3">
                אתר זה פועל בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), תשע״ג-2013,
                ובהתאם לתקן הישראלי IS 5568 המבוסס על הנחיות W3C WCAG 2.0 ברמה AA.
            </p>
            <h2 className="mt-6 text-xl font-semibold">מה בוצע באתר</h2>
            <ul className="list-disc ps-6 text-muted">
                <li>ניווט מקלדת מלא ופוקוס נראה</li>
                <li>קונטרסט טקסטים והגדלת גופן</li>
                <li>טקסט חלופי לתמונות ותיאורי קישורים</li>
                <li>מבנה סמנטי וכותרות נכונות</li>
                <li>טפסים נגישים והודעות שגיאה</li>
            </ul>
            <h2 className="mt-6 text-xl font-semibold">יצירת קשר בנושא נגישות</h2>
            <p className="text-muted">
                אם נתקלתם בבעיה או הצעה לשיפור – נשמח לסייע:
                <br/>דוא״ל: <Link className="underline" href="mailto:elyasaf896@gmail.com">elyasaf896@gmail.com</Link>
            </p>
            <p className="mt-6 text-sm text-muted">עודכן: {new Date().toLocaleDateString("he-IL")}</p>
        </div>
    );
}
