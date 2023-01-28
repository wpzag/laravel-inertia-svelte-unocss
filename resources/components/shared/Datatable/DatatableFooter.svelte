<script lang='ts'>
  import type { DTProvider } from '@/types/DataTableTypes'
  import clsx from 'clsx'

  const { pagination, goToNextPage, goToPrevPage, props, updatePerPage }: DTProvider = getContext('datatable')

  $: nav = [
    {
      icon: 'i-carbon-arrow-left',
      action: goToPrevPage,
      disabled: $pagination.page === 1
    },
    {
      icon: 'i-carbon-arrow-right',
      action: goToNextPage,
      disabled: $pagination.page === $pagination.lastPage
    }
  ]

</script>

<footer class='flex justify-between mt-5 '>
  {#if Array.isArray(props.perPage?.options) }

    <select
      class='px-2 rounded dark:bg-slate-9'
      bind:value={$pagination.perPage}
      on:change={()=>updatePerPage($pagination.perPage)}
    >
      {#each props.perPage.options as option }
        <option value={option}>{option}</option>
      {/each}
    </select>
  {/if}

  <div class='flex gap-x-2 items-center'>
    <div class='mx-2'>
      { $pagination.from ?? 0 } - { $pagination.to ?? $pagination.total } of
      { $pagination.total }
    </div>
    {#each nav as item}
      <button
        class={clsx('rounded bg-slate-2 flex items-center p2 dark:bg-slate-7', item.disabled && 'op20 pointer-events-none')}
        on:click={item.action}
      >
        <i class={item.icon}></i>
      </button>
    {/each}

  </div>
</footer>
