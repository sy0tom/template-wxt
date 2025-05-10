import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { defineConfig, WxtViteConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ["@wxt-dev/module-react"],
  entrypointsDir: "entrypoints/apps",
  manifest: {
    permissions: ["storage"],
  },
  vite: (): WxtViteConfig | Promise<WxtViteConfig> => ({
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "#": path.resolve(__dirname, "entrypoints"),
      },
    },
  }),
});
