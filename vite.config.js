import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
export default defineConfig(function (_a) {
    var command = _a.command;
    var isBuild = command === "build";
    var basePath = process.env.BASE_PATH || (isBuild ? "/mypage/" : "/");
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
