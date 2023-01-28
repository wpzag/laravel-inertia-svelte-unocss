<script lang='ts'>
  import type { DTProvider } from '@/types/DataTableTypes'
  let { items, props }: DTProvider = getContext('datatable')

</script>

<tbody  >

{#each $items as row, index (index)}
  <tr>
    {#each props.headers as header}
      <td style="text-align: {header.align ?? 'left'}"  >
        <slot {row} value={header.format ? header.format(row[header.value]) : row[header.value]} {header} {index} >
          {
            header.format ? header.format(row[header.value]) : row[header.value]
          }
        </slot>
      </td>
    {/each}
  </tr>
{/each}
</tbody>
