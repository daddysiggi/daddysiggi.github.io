// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: "https://daddysiggi.github.io/",
  base: process.env.NODE_ENV === "production" ? "/" : "/",
  output: "static",
  integrations: [icon()]
});