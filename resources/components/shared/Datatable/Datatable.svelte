<script lang='ts'>
  import DatatableFooter from '@/components/shared/Datatable/DatatableFooter.svelte'
  import DatatableHeader from '@/components/shared/Datatable/DatatableHeader.svelte'
  import type { DTProps, DTProvider } from '@/types/DataTableTypes'
  import DatatableBody from '@/components/shared/Datatable/DatatableBody.svelte'
  import { useDatatable } from '@/components/shared/Datatable/datatable'
  import Spinner from '@/components/shared/Spinner.svelte'
  import TableCards from '@/components/shared/Datatable/TableCards.svelte'

  export let headers: DTProps['headers']
  export let items: DTProps['items']
  export let noWrap: DTProps['noWrap']
  export let loading: DTProps['loading']
  export let headersDraggable: DTProps['headersDraggable']
  export let headersResizable: DTProps['headersResizable']
  export let pagination: DTProps['pagination'] = {}
  export let perPage: DTProps['perPage']
  const dispatch = createEventDispatcher()

  const datatable: DTProvider = useDatatable($$props, dispatch)
  $:
  {
    datatable.reactiveItems.update(() => items)
    datatable.updateTotal(pagination?.total ?? items.length)
  }

  setContext<DTProvider>('datatable', {
    ...datatable,
    props: $$props
  })


</script>

<div class='datatable'>
  <TableCards>
    <slot {header} {index} let:header let:index let:row let:value perPage='4' {row} slot='default' {value}>
      {value}
    </slot>
  </TableCards>
  <table>

    {#if loading}
      <div class='absolute inset-0 bg-transparent dark:bg-slate-8/50 flex justify-center items-center z-50'>
        <div>
          <Spinner color='black' />
        </div>
      </div>
    {/if}
    <DatatableHeader />
    <DatatableBody>
      <slot {header} {index} let:header let:index let:row let:value perPage='4' {row} slot='default' {value}>
        {value}
      </slot>
    </DatatableBody>

  </table>
  {#if items.length}
    <DatatableFooter />
  {:else}
    <div class='p-4 text-center text-slate-500 dark:text-slate-400'>
      No data available
    </div>
  {/if}

</div>
<style lang='scss' >
    .datatable {
      table {
        --at-apply: grid overflow-x-auto  text-left  relative w-full lt-lg:hidden;
        :global(thead), :global(tbody), :global(tr) {
          --at-apply: contents;
        }
        :global(th), :global(td) {
          --at-apply: border-b border-slate-200 p-3 break-words overflow-hidden dark:border-slate-7;
        }
        :global(th) {
          --at-apply: border-t border-r
        }
        :global(th:first-child) {
          --at-apply: border-l
        }

        :global(td) {
              --at-apply: border-r
            }
        :global(td:first-child) {
              --at-apply: border-l
            }
      }
    }


</style>
