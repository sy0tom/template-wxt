import { defineConfig, WxtViteConfig } from "wxt";
import tailwindcss from "@tailwindcss/vite";

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ["@wxt-dev/module-react"],
  vite: (): WxtViteConfig | Promise<WxtViteConfig> => ({
    plugins: [tailwindcss()],
  }),
});
