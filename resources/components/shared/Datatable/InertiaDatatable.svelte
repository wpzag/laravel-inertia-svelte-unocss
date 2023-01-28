<script lang='ts'>
  import Datatable from '@/components/shared/Datatable/Datatable.svelte'
  import type { DTPagination, DTProps } from '@/types/DataTableTypes'

  export let items
  let loading = false
  export let headers: DTProps['headers']
  export let routeName: string
  let pagination: DTPagination = {}
  const buildPagination = () => {
    const { total, current_page, last_page, from, to, per_page } =
      items
    pagination.total = total
    pagination.page = current_page <= last_page ? current_page : last_page
    pagination.lastPage = last_page
    pagination.perPage = per_page
    pagination.from = from
    pagination.to = to
  }
  onMount(() => {
    pagination.sortBy = route().params.sortBy
    pagination.sortDirection = route().params.sortDirection
    buildPagination()
  })

  function update(event) {
    router.get(route(routeName, {
          _query: {
            page: event.detail.page,
            per_page: event.detail.perPage,
            sortBy: event.detail.sortBy,
            sortDirection: event.detail.sortDirection
          }
        }
      ), {},
      {
        preserveState: true,
        preserveScroll: true,
        onStart: () => loading = true,
        onFinish: () => {
          buildPagination()
          loading = false
        }
      })
  }
</script>


<Datatable {headers} items={items.data} let:header let:index let:row {loading} noWrap
           on:paginationUpdated={update}
           {pagination}
           perPage={{default:10,options:[4,10,20,30,40,50]}}
>
  <slot {header} {index} let:header let:index let:row let:value {row} slot='default' {value}>

    {value}
  </slot>
</Datatable>
