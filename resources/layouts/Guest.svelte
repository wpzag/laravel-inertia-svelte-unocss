<script>import { inertia } from '@inertiajs/inertia-svelte'
import ApplicationLogo from '@/components/shared/ApplicationLogo.svelte'
</script>
<!--<div class='fixed top-10% right-10%'>-->

<!--  <DarkThemeSwitcher />-->
<!--</div>-->
<svelte:body></svelte:body>
<div
  class=' flex min-h-screen min-w-screen  sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-slate-9  '>

  <div
    class='w-full   sm:max-w-md  p-8 bg-white shadow-md overflow-hidden sm:rounded-lg dark:bg-slate-8 '

  >

    <div class='flex justify-center mb-5'>
      <a href='/' use:inertia>
        <ApplicationLogo class='w-20 h-20 fill-current text-gray-500' />
      </a>
    </div>


    <div
    >
      <slot />
    </div>
  </div>


</div>
