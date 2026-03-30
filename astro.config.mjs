import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.craftbeerandcode.dev",
  output: "static",
  integrations: [sitemap()]
});
