import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: 'njnptjj2',
    dataset: "production",
    apiVersion: "v2025-03-24",
    useCdn: true,
})


/*

sette opp en for å skrive til klient

*/