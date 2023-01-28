<script lang='ts'>
  import type { DTProps, DTProvider } from '@/types/DataTableTypes'
  import { useHeadersResizing } from '@/components/shared/Datatable/headerResizeable'
  import DatatableResizableHandler from '@/components/shared/Datatable/DatatableResizableHandler.svelte'
  import { createEventDispatcher } from 'svelte'
  import type{ DTHeader } from '@/types/DataTableTypes'
  import clsx from 'clsx'

  let { props,pagination,sort }: DTProvider = getContext('datatable')
  onMount(() => {
    useHeadersResizing()
  })

</script>
<thead>


<tr>
  {#each props.headers as header }

    <th  scope='col' data-width={header.width} class='relative group'>
      <button
        style="text-align: {header.align ?? 'left'}"
        class={clsx(
          'relative w-full ',
          !header.sortable && 'pointer-events-none' ,
          header.align === 'center' && '-ml-1'
          )}
        on:click={()=>sort(header)}
      >
      {#if props.headersResizable}
        <DatatableResizableHandler />
      {/if}
      {header.label}
        {#if  $pagination.sortDirection !== null &&
        $pagination.sortBy === header.value}

        <div
          class=" absolute inset-0  flex items-center justify-end"

        >
          <i class="i-carbon-arrow-up text-slate-4 dark:text-slate-5"
          class:rotate-180={$pagination.sortDirection === 'desc'}
          class:rotate-0={$pagination.sortDirection !== 'asc'}
        ></i>
        </div>
        {/if}
      </button>
    </th>

  {:else}
    <th>No headers</th>
  {/each}
</tr>

</thead>
