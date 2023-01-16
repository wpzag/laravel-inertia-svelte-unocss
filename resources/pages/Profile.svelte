<script lang='ts'>
  import type { DTProps } from '@/types/DataTableTypes'
  import InertiaDatatable from '@/components/shared/Datatable/InertiaDatatable.svelte'

  export let users
  let headers: DTProps['headers'] = [
    { label: 'Index', value: 'index', width: '90px', align: 'center' },
    { label: 'Name', value: 'name', width: '300px', sortable: true },
    { label: 'Email', value: 'email' },
    {
      label: 'Created At',
      value: 'created_at',
      sortable: true,
      format: (created_at) => new Date(created_at).toLocaleString()
    }

  ]
</script>

<button class='mb-5' use:inertia={{
  href: route('users.store'),
  method: 'post',
    preserveState: true,
      preserveScroll: true,
      only: ['users'],
}}>Plus
</button>

<InertiaDatatable {headers} items={users} let:header let:index let:row routeName='profile'>
  {#if header.value === 'index'}
    {index + 1}
  {:else}
    {row[header.value]}
  {/if}
</InertiaDatatable>



