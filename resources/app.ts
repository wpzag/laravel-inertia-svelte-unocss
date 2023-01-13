// @ts-ignore
import { App, createInertiaApp } from '@inertiajs/inertia-svelte'
import { InertiaProgress } from '@inertiajs/progress'
import './assets/css/app.css'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import Authenticated from '@/layouts/Authenticated.svelte'

const defaultLayout = Authenticated
const pagesWithoutDefaultLayout = [
  ...getPages(import.meta.glob('./pages/Auth/**/*.svelte')),
  'Welcome'
]

InertiaProgress.init()
createInertiaApp({
  resolve,
  setup({ el, App, props }: { el: HTMLElement, App: App, props: any }) {
    new App({ target: el, props })
  }
})

async function resolve(name: string) {
  let component
  const page = resolvePageComponent(`./pages/${name}.svelte`, import.meta.glob('./pages/**/*.svelte'))
  await page
    .then(module => {
      component = pagesWithoutDefaultLayout.includes(name) ?
        module :
        Object.assign({ layout: defaultLayout }, module)
    })
  return component
}

function getPages(pages: Record<string, () => Promise<unknown>>) {
  return Object.keys(pages).map((page) => page.replace('./pages/', '').replace('.svelte', ''))
}
