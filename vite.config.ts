import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(import.meta.dirname, "src"),
        },
    },
    build: {
        outDir: path.resolve(import.meta.dirname, "dist"),
        emptyOutDir: true,
    },
});
