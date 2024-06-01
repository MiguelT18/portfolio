import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import icon from "astro-icon"
import react from "@astrojs/react"

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  image: {
    domains: ["astro.build"],
  },
  integrations: [tailwind(), icon(), react()],
})
