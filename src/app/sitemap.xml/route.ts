const HOST = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
const routes = ["/", "/beauty", "/carpentry", "/restaurant"];

export async function GET() {
    const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(r => `<url><loc>${HOST}${r}</loc></url>`).join("")}
</urlset>`;
    return new Response(body, { headers: { "Content-Type": "application/xml" }});
}
