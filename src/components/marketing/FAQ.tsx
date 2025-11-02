"use client";
import * as React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export type FaqItem = { q: string; a: string };
export interface FAQProps { items: FaqItem[]; title?: string }

export default function FAQ({ items, title = "שאלות נפוצות" }: FAQProps) {
    return (
        <section aria-labelledby="faq-heading" className="py-16 md:py-24">
            <div className="mx-auto max-w-3xl px-4">
                <h2 id="faq-heading" className="text-3xl font-bold">{title}</h2>
                <p className="mt-2 text-muted">אספנו תשובות לשאלות שחוזרות.</p>
                <Accordion type="single" collapsible className="mt-8">
                    {items.map((it, i) => (
                        <AccordionItem key={i} value={`item-${i}`}>
                            <AccordionTrigger className="text-right">{it.q}</AccordionTrigger>
                            <AccordionContent>
                                <p className="text-muted">{it.a}</p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
