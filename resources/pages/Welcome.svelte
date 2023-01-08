<script lang='ts'>

  type App = {
    laravel: string;
    php: string;
    name: string;
    env: string;
    debug: boolean;
    url: string;
  };
  export let app: App
</script>
<div class='min-h-screen min-w-screen grid place-items-center bg-gray-1'>
  <div class='bg-white rounded-lg p10 space-y-3'>
    <div class='text-5xl text-center'>🔥</div>
    <h1 class='text-2xl font-bold'>Laravel 9 + Vite + Svelte + Inertia + Unocss</h1>
    <div class='grid grid-cols-2 gap-3 pt-8'>
      <p>Laravel: {app.laravel}</p>
      <p>PHP: {app.php}</p>
      <p>Name: {app.name}</p>
      <p>Env: {app.env}</p>
      <p>Debug: {app.debug}</p>
      <p>URL: {app.url}</p>
    </div>
  </div>

</div>

<style>
    p {
        @apply text-center border border-gray-5 rounded-lg p-4 border-dashed text-gray-5;
    }
</style>
