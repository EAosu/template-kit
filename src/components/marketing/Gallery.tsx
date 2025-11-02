import Image from "next/image";
import Container from "@/components/primitives/Container";
import InView from "@/components/motion/InView";
import { stagger, zoomReveal } from "@/components/motion/motion";

export type GalleryItem = {
    src: string;
    alt?: string;
    w?: number;
    h?: number;
};

type GalleryInput = Array<string | GalleryItem>;

function toItem(entry: string | GalleryItem): GalleryItem | null {
    if (typeof entry === "string") {
        const s = entry.trim();
        return s ? { src: s, alt: "" } : null;
    }
    if (entry && typeof entry.src === "string" && entry.src.trim()) {
        return { alt: "", ...entry, src: entry.src.trim() };
    }
    return null;
}

export default function Gallery({ images }: { images: GalleryInput }) {
    const safe = (images ?? [])
        .map(toItem)
        .filter((x): x is GalleryItem => !!x && !!x.src);

    if (safe.length === 0) {
        return null;
    }

    return (
        <section>
            <Container>
                <InView variants={stagger(0.08)} className="grid gap-6 md:grid-cols-3">
                    {safe.map((img, i) => {
                        const key = `${img.src}#${i}`;
                        return (
                            <InView
                                key={key}
                                variants={zoomReveal}
                                className="group overflow-hidden rounded-2xl border border-base shadow-soft m-2"
                            >
                                <div className="relative aspect-[4/3]">
                                    <InView
                                        variants={{ hidden: { opacity: 0, scale: 1.15 }, show: { opacity: 1, scale: 1.08 } }}
                                        whileHover={{ scale: 1.0 }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={img.src}
                                            alt={img.alt || "Gallery image"}
                                            fill
                                            sizes="(min-width: 768px) 33vw, 100vw"
                                            className="object-cover will-change-transform"
                                            priority={false}
                                        />
                                    </InView>
                                </div>
                            </InView>
                        );
                    })}
                </InView>
            </Container>
        </section>
    );
}
