import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup,
} from "unocss"

// @ts-ignore
import { extractorSvelte } from "@unocss/core"

export default defineConfig({
    extractors: [extractorSvelte],
    theme: {
        colors: {
            primary: "var(--color-primary)",
        },
    },
    shortcuts: [
        // Button
        [
            /^btn-(.*)$/,
            ([, c]) =>
                `bg-${c}-500 text-white hover:bg-${c}-600 dark:(bg-${c}-500 hover:bg-${c}-600)  [&_.btn-spinner]:border-white`,
        ],
        [
            /^btn-outline-(.*)$/,
            ([
                ,
                c,
            ]) => `border border-${c}-500 text-${c}-500 hover:bg-${c}-500 hover:text-white  dark:(border-${c}-500 hover:bg-${c}-500) 
            [&_.btn-spinner]:border-${c}-400 `,
        ],
        [
            /^btn-light-(.*)$/,
            ([, c]) =>
                `bg-${c}-400/10 text-${c}-500  hover:bg-${c}-400/20  [&_.btn-spinner]:border-${c}-400`,
        ],
    ],
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
            scale: 1.2,
            warn: true,
            extraProperties: {
                display: "block",
            },
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
})
