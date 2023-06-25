import { defineConfig } from "umi";
import routes from "./routes";
import antd from './antd'

export default defineConfig({
  routes,
  npmClient: "yarn",
  tailwindcss: {},
  plugins: ["@umijs/plugins/dist/tailwindcss","@umijs/plugins/dist/antd"],
  antd,
});
