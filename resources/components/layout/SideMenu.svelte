<script lang='ts'>

  import Drawer from '@/components/shared/Drawer.svelte'
  import Button from '@/components/shared/Button.svelte'
  import ApplicationLogo from '@/components/layout/ApplicationLogo.svelte'

  export let activeRoute: string
  export let items: []
</script>
<Drawer let:close let:open position='left'>
  <Button color='transparent' icon='i-carbon-menu' on:click={open} slot='button'></Button>
  <ApplicationLogo class='h-14 w-14 mx-auto mb-10 dark:fill-slate-300' />
  <ul class='flex flex-col gap-y-3 '>
    {#each items as item,index }
      <li in:scale={{
          delay: index * 100,
          duration: 200,
          easing: cubicOut
            }}
          on:click={() => {
            close()
          }}
          use:inertia={{
            href: item.href,
            onfinish: () => {
            }
          }}
          class="flex w-full justify-between  items-center gap-x-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg p-2 cursor-pointer dark:(text-slate-300 hover:text-slate-300 hover:bg-slate-800) {item.href.includes(activeRoute) ? 'text-gray-700 bg-gray-100 dark:(text-slate-300 bg-slate-800)':''}"
      >
        <div class='flex gap-x-4 items-center'>
          <i class='{item.icon} flex-shrink-0'></i>
          {item.name}
        </div>

      </li>
    {/each}
  </ul>
</Drawer>
