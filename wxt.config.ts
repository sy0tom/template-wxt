import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { defineConfig, WxtViteConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ["@wxt-dev/module-react"],
  entrypointsDir: "src/apps",
  vite: (): WxtViteConfig | Promise<WxtViteConfig> => ({
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "#": path.resolve(__dirname, "src"),
      },
    },
  }),
});
