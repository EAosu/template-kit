"use client";

import { useState } from "react";
import { saveLead } from "@/lib/crm";
import Link from "next/link";

type Template = "beauty" | "carpentry" | "restaurant";

export interface ContactFormProps {
    template: Template;
    whatsappHref: string;
    email?: string;
}

export default function ContactForm({ template, whatsappHref, email }: ContactFormProps) {
    const [name, setName] = useState("");
    const [emailAddr, setEmailAddr] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    return (
        <>
            <div className="mt-6 flex flex-wrap gap-3">
                <Link href={whatsappHref} className="btn-hover inline-flex rounded-theme bg-brand px-5 py-3 font-medium text-white accent-ring">
                    הודעת WhatsApp
                </Link>
                {email && (
                    <Link href={`mailto:${email}`} className="btn-hover inline-flex rounded-theme border border-base px-5 py-3 font-medium">
                        שלחו מייל
                    </Link>
                )}
            </div>

            <form
                className="mx-auto mt-8 max-w-xl rounded-2xl border border-base bg-card p-6 shadow-soft"
                onSubmit={async (e) => {
                    e.preventDefault();
                    setStatus("sending");
                    const { ok } = await saveLead({
                        template,
                        name,
                        email: emailAddr,
                        phone,
                        message,
                    });
                    setStatus(ok ? "sent" : "error");
                }}
            >
                <div>
                    <label htmlFor="name" className="block text-sm font-medium">שם מלא</label>
                    <input
                        id="name"
                        name="name"
                        className="mt-1 w-full rounded-md border border-base px-3 py-2"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="mt-4">
                    <label htmlFor="email" className="block text-sm font-medium">אימייל</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="mt-1 w-full rounded-md border border-base px-3 py-2"
                        required
                        value={emailAddr}
                        onChange={(e) => setEmailAddr(e.target.value)}
                    />
                </div>

                <div className="mt-4">
                    <label htmlFor="phone" className="block text-sm font-medium">טלפון</label>
                    <input
                        id="phone"
                        name="phone"
                        className="mt-1 w-full rounded-md border border-base px-3 py-2"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                <div className="mt-4">
                    <label htmlFor="message" className="block text-sm font-medium">הודעה</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className="mt-1 w-full rounded-md border border-base px-3 py-2"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn-hover mt-6 inline-flex rounded-theme bg-brand px-5 py-3 font-medium text-white">
                    שלח/י
                </button>

                {status === "sending" && <p className="mt-2 text-sm">שולח…</p>}
                {status === "sent" && <p className="mt-2 text-sm text-green-500">התקבל! נחזור אליך בקרוב.</p>}
                {status === "error" && <p className="mt-2 text-sm text-red-500">משהו השתבש, נסה שוב.</p>}
                <p className="mt-2 text-xs text-muted">נשמור על פרטיותך. אין שיתוף לצד שלישי.</p>
            </form>
        </>
    );
}
