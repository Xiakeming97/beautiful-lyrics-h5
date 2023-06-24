import { defineConfig } from "umi";
import routes from "./routes";

export default defineConfig({
  routes,
  npmClient: "yarn",
  tailwindcss: {},
  plugins: ["@umijs/plugins/dist/tailwindcss"],
});
