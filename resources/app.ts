// @ts-ignore
import { createInertiaApp } from '@inertiajs/inertia-svelte'
import { InertiaProgress } from '@inertiajs/progress'
import './assets/css/app.css'
import '@unocss/reset/tailwind.css'
import 'uno.css'

InertiaProgress.init()
createInertiaApp({
  resolve: (name: string) => importPageComponent(name, import.meta.glob('./pages/**/*.svelte')),
  // @ts-ignore
  setup({ el, App, props }) {
    new App({ target: el, props })
  }
})

function importPageComponent(name: string, pages: Record<string, any>) {
  // eslint-disable-next-line no-restricted-syntax
  for (const path in pages) {
    if (path.endsWith(`${name.replaceAll('.', '/')}.svelte`)) {
      return typeof pages[path] === 'function'
        ? pages[path]()
        : pages[path]
    }
  }

  throw new Error(`Page not found: ${name}`)
}
