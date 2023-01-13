import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup,
} from "unocss";

// @ts-ignore
import { extractorSvelte } from "@unocss/core";

export default defineConfig({
    extractors: [extractorSvelte],
    theme: {
        colors: {
            primary: "var(--color-primary)",
        },
    },
    shortcuts: [
        // ['btn', 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ],
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
            scale: 1.2,
            warn: true,
        }),
        presetTypography(),
        presetWebFonts({
            fonts: {
                sans: "DM Sans",
                nunito: "Nunito",
                serif: "DM Serif Display",
                mono: "DM Mono",
            },
        }),
    ],
    transformers: [transformerDirectives(), transformerVariantGroup()],
    safelist: "prose prose-sm m-auto text-left".split(" "),
});
