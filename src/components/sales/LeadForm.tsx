"use client";
import * as React from "react";

export default function LeadForm() {
    return (
        <form
            id="contact"
            className="grid gap-4"
            action="https://formsubmit.co/elyasaf896@gmail.com"
            method="POST"
        >
            {/* FormSubmit */}
            <input type="hidden" name="_subject" value="New lead - Template Kit" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="/sell/thanks" />
            {/* honeypot */}
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid gap-2">
                <label className="text-sm" htmlFor="name">שם</label>
                <input id="name" name="name" required className="rounded-xl border border-base bg-card px-4 py-3" />
            </div>

            <div className="grid gap-2">
                <label className="text-sm" htmlFor="email">אימייל</label>
                <input id="email" name="email" type="email" required className="rounded-xl border border-base bg-card px-4 py-3" />
            </div>

            <div className="grid gap-2">
                <label className="text-sm" htmlFor="phone">טלפון</label>
                <input id="phone" name="phone" className="rounded-xl border border-base bg-card px-4 py-3" />
            </div>

            <div className="grid gap-2">
                <label className="text-sm" htmlFor="message">מה מחפשים?</label>
                <textarea id="message" name="message" rows={5} className="rounded-xl border border-base bg-card px-4 py-3" />
            </div>

            <button className="mt-2 rounded-full px-6 py-3 bg-brand text-white hover:brightness-110 focus-visible:ring">
                שלח
            </button>
        </form>
    );
}
