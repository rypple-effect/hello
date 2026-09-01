import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

export default defineConfig(({ command }) => {
  const isBuild = command === "build";
  const basePath = process.env.BASE_PATH || (isBuild ? "/mypage/" : "/");

  return {
    base: basePath,
    plugins: [react()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
});
