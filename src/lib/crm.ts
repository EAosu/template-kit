export type Lead = {
    template: "beauty" | "carpentry" | "restaurant";
    name: string;
    email: string;
    phone?: string;
    message?: string;
    createdAt?: string;
};

export async function saveLead(lead: Lead): Promise<{ ok: boolean }> {
    const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
    });
    if (!res.ok) return { ok: false };
    return { ok: true };
}
