<script lang='ts'>

  import { route } from '@/helpers/ziggy'
  import Link from '@/components/shared/Link.svelte'
  import UserData = App.Data.UserData

  type App = {
    laravel: string;
    php: string;
    name: string;
    env: string;
    debug: boolean;
    url: string;
  };

  export let app: App
  export let auth: UserData
</script>
<div class='min-h-screen min-w-screen grid place-items-center  '>
  <div>

    <div class='space-x-3 flex justify-end mb-4'>
      {#if !auth}
        <Link href={route('login')}> Login</Link>
        <Link href={route('register')}> Register</Link>
      {:else}
        <Link href={route('dashboard')}> Dashboard</Link>
      {/if}
    </div>

    <div class='bg-white dark:bg-slate-8 rounded-lg p10 space-y-3'>

      <div class='text-5xl text-center'>🔥</div>
      <h1 class='text-2xl font-bold'>Laravel 9 + Vite + Svelte + Inertia + Unocss</h1>
      <div class='grid grid-cols-2 gap-3 pt-8 dark:text-slate-2'>
        <p>Laravel: {app.laravel}</p>
        <p>PHP: {app.php}</p>
        <p>Name: {app.name}</p>
        <p>Env: {app.env}</p>
        <p>Debug: {app.debug}</p>
        <p>URL: {app.url}</p>
      </div>
    </div>
  </div>

</div>

<style>
    p {
        @apply text-center border border-gray-5 rounded-lg p-4 border-dashed ;
    }
</style>
