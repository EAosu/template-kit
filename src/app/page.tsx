"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import SpotlightCTA from "@/components/marketing/SpotlightCTA";

const cards = [
  { slug:"beauty", title:"Beauty Studio", desc:"ורוד-לבן בהיר, עדין ומדויק." },
  { slug:"carpentry", title:"Carpentry", desc:"כהה-חם עם תחושת חומר." },
  { slug:"restaurant", title:"Catering", desc:"טרי-חגיגי עם תפריט מסודר." },
] as const;

export default function HomePage() {
  return (
      <main className="min-h-[100svh] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,.08),transparent)]">
        <section className="mx-auto max-w-6xl px-4 py-24">
          <motion.h1
              initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.5}}
              className="text-center text-5xl md:text-7xl font-extrabold"
          >
            Ely Template Kit
          </motion.h1>
          <SpotlightCTA />
          <div role="separator" aria-hidden className="fancy-hr mx-auto my-14 max-w-5xl" />
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.1}}
                    className="mt-4 text-center">
            שלוש תבניות מודרניות ומוכרות-מוכנות להדגמה ולסגירת לקוח.
          </motion.p>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {cards.map((c,i)=>(
                <motion.div key={c.slug}
                            initial={{opacity:0,y:18,scale:.98}} animate={{opacity:1,y:0,scale:1}}
                            transition={{duration:.45, delay:i*0.08}}
                            className="rounded-2xl border border-base bg-[linear-gradient(45deg,#070e29,#190729)] p-6 shadow-soft"
                >
                  <div className={`h-36 w-full rounded-2xl mb-5
                ${c.slug==="beauty" ? "bg-[linear-gradient(135deg,#fda4af,#f472b6)]"
                      : c.slug==="carpentry" ? "bg-[linear-gradient(135deg,#8b5a2b,#3f2b1d)]"
                          : "bg-[linear-gradient(135deg,#16a34a,#10b981)]"}`} />
                  <h2 className="text-xl font-semibold text-white">{c.title}</h2>
                  <p className="mt-2 text-sm text-muted">{c.desc}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <Link href={`/${c.slug}`} target={"_blank"} className="btn-hover inline-flex rounded-xl bg-black/40 px-4 py-2 text-white">
                      צפה בתבנית
                    </Link>
                  </div>
                </motion.div>
            ))}
          </div>
        </section>
      </main>
  );
}
