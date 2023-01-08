// @ts-ignore
import fs from 'fs'
import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'
import { homedir } from 'os'
import Unocss from 'unocss/vite'

const projectRootDir = resolve(__dirname)

let host = 'api.test'

export default defineConfig({
  plugins: [

    laravel({
      input: ['resources/app.ts'],
      refresh: true
    }),
    svelte({
      experimental: {
        useVitePreprocess: true
      }
    }),

    Unocss()
  ],
  optimizeDeps: {
    include: ['@inertiajs/inertia', '@inertiajs/inertia-svelte']
  },
  resolve: {
    alias: {
      '@pages': resolve(projectRootDir, 'resources/pages'),
      '@components': resolve(projectRootDir, 'resources/components')
    }
  },
  server: detectServerConfig(host)
})

function detectServerConfig(host: string) {
  let keyPath = resolve(homedir(), `.config/valet/Certificates/${host}.key`)
  let certificatePath = resolve(homedir(), `.config/valet/Certificates/${host}.crt`)

  if (!fs.existsSync(keyPath)) {
    return {}
  }

  if (!fs.existsSync(certificatePath)) {
    return {}
  }

  return {
    hmr: { host },
    host,
    https: {
      key: fs.readFileSync(keyPath),
      cert: fs.readFileSync(certificatePath)
    }
  }
}
