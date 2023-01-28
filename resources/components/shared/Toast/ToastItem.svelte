<script lang='ts'>
  import type { Toast } from '@/components/shared/Toast/toast.ts'
  import { toast } from '@/components/shared/Toast/toast.ts'
  import { tweened } from 'svelte/motion'
  import clsx from 'clsx'

  export let item: Toast

  const progress = tweened(0, { duration: item.duration, easing: linear })
  const close = () => toast.remove(item.id)

  let interval: number

  onMount(() => {
    interval = setInterval(() => {
      close()
    }, item.duration)
  })
  onDestroy(() => clearTimeout(interval))


  $:icon = clsx(
    item.type === 'success' && 'i-ic:outline-check-circle-outline text-green-500',
    item.type === 'error' && 'i-ion:close-circle-outline text-red-500',
    item.type === 'warning' && 'i-mdi:warning-circle-outline text-yellow-500',
    item.type === 'info' && 'i-material-symbols:info-outline-rounded text-blue-500'
  )
</script>


<div
  class="bg-white dark:bg-slate-700 border dark:border-slate-6 w-100 my-2 rounded-lg p-4  shadow flex justify-between {item.details?'items-start':'items-center'}  gap-4"
  on:click={close}>
  <div class="flex gap-x-3 {clsx(!item.details && 'items-center')}">
    <i class={clsx('flex-shrink-0',icon,item.details&&'mt-1')}></i>
    <div>
      <span class='text-[1rem]'>{item.title}</span>
      {#if item.details}
        <div class='op-60 text-sm py-1'>
          {item.details}
        </div>
      {/if}
    </div>
  </div>

  <button class={clsx(item.details && 'pt-.7')} on:click={close}>
    <i class='i-ic:baseline-close text-gray-400 hover:text-gray-500 cursor-pointer'></i>
  </button>
</div>


