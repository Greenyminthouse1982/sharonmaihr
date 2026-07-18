import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "q0csrb8z",
  dataset: "production",
  apiVersion: "2026-07-18",
  useCdn: false,
});