// @ts-ignore
import { createInertiaApp } from "@inertiajs/svelte";

import "@unocss/reset/tailwind.css";
import "uno.css";
import "./assets/css/app.scss";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import Authenticated from "@/layouts/Authenticated.svelte";

const defaultLayout = Authenticated;
const pagesWithoutDefaultLayout = [
    ...getPages(import.meta.glob("./pages/Auth/**/*.svelte")),
    "Welcome",
];

createInertiaApp({
    resolve,
    setup({ el, App, props }) {
        new App({ target: el, props });
    },
});

async function resolve(name: string) {
    let component;
    const page = resolvePageComponent(
        `./pages/${name}.svelte`,
        import.meta.glob("./pages/**/*.svelte")
    );
    await page.then((module) => {
        component = pagesWithoutDefaultLayout.includes(name)
            ? module
            : Object.assign({ layout: defaultLayout }, module);
    });
    return component;
}

function getPages(pages: Record<string, () => Promise<unknown>>) {
    return Object.keys(pages).map((page) =>
        page.replace("./pages/", "").replace(".svelte", "")
    );
}
