import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isVercel = !!process.env.VERCEL;

export default defineConfig({
  // Use Nitro's Vercel preset in Vercel CI while preserving the normal
  // Lovable/local behavior elsewhere.
  nitro: isVercel ? { preset: "vercel" } : true,

  tanstackStart: {
    // SSR/server entry used by TanStack Start.
    server: { entry: "server" },
  },
});
