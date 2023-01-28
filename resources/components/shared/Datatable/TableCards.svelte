<script lang='ts'>
  import type { DTProvider } from '@/types/DataTableTypes'

  let { items, props }: DTProvider = getContext('datatable')

</script>

<div class='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden  '>

  {#each $items as row, index (index)}
    <div class='border border-gray-2 dark:border-slate-7 p-4 rounded space-y-4'>
      {#each props.headers as header}
        <div>  {header.label} :
          <slot {row} value={header.format ? header.format(row[header.value]) : row[header.value]} {header} {index}>
            {
              header.format ? header.format(row[header.value]) : row[header.value]
            }
          </slot>
        </div>
      {/each}
    </div>
  {/each}
</div>
