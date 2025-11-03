export function GET() {
    const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://elyasaf-webstudio.vercel.app";
    return new Response(
        `User-agent: *
Allow: /
Sitemap: ${base}/sitemap.xml`,
        { headers: { "Content-Type": "text/plain; charset=utf-8" } }
    );
}
