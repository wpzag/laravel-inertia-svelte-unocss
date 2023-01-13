// @ts-ignore
import fs from "fs";
import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "path";
import { homedir } from "os";
import Unocss from "unocss/vite";
import { run } from "vite-plugin-run";
import AutoImport from "unplugin-auto-import/vite";

const projectRootDir = resolve(__dirname);

let host = "api.test";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/app.ts"],
            refresh: true,
        }),

        svelte({
            experimental: {
                useVitePreprocess: true,
            },
        }),
        Unocss(),
        // regenerate ziggy routes when any of the files in the routes folder changes
        run([
            {
                name: "ziggy",
                run: [
                    "php",
                    "artisan",
                    "ziggy:generate",
                    "./resources/generated/ziggy-routes.js",
                ],
                condition: (file) =>
                    file.includes("/routes/") && file.endsWith(".php"),
            },
            {
                name: "spatie typescript generator",
                run: ["php", "artisan", "typescript:transform"],
                condition: (file) =>
                    file.includes("/app/Data") && file.endsWith(".php"),
            },
        ]),
        AutoImport({
            imports: [
                "svelte",
                "svelte/store",
                "svelte/transition",
                "svelte/easing",
                "svelte/animate",
                {
                    "@inertiajs/inertia-svelte": [
                        "inertia",
                        "useForm",
                        "InertiaApp",
                    ],
                },
            ],
            dirs: ["resources/helpers/**", "resources/actions/**"],
            dts: "./resources/generated/auto-imports.d.ts",
        }),
    ],
    optimizeDeps: {
        include: ["@inertiajs/inertia", "@inertiajs/inertia-svelte"],
    },
    resolve: {
        alias: {
            "@": resolve(projectRootDir, "resources"),
        },
    },
    server: detectServerConfig(host),
});

// fix : to make valet https work with vite
function detectServerConfig(host: string) {
    let keyPath = resolve(homedir(), `.config/valet/Certificates/${host}.key`);
    let certificatePath = resolve(
        homedir(),
        `.config/valet/Certificates/${host}.crt`
    );

    if (!fs.existsSync(keyPath)) {
        return {};
    }

    if (!fs.existsSync(certificatePath)) {
        return {};
    }

    return {
        hmr: { host },
        host,
        https: {
            key: fs.readFileSync(keyPath),
            cert: fs.readFileSync(certificatePath),
        },
    };
}
