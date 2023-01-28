<script lang='ts'>
  import type { DTHeader } from '@/types/DataTableTypes'
  import InertiaDatatable from '@/components/shared/Datatable/InertiaDatatable.svelte'
  import VDialog from '@/components/shared/Dialog.svelte'
  import Button from '@/components/shared/Button.svelte'
  import UserForm from '@/components/users/UserForm.svelte'
  import UpdateUserForm from '@/components/users/UpdateUserForm.svelte'
  import Form from '@/components/shared/Form/Form.svelte'
  import { toast } from '@/components/shared/Toast/toast.ts'

  export let users
  let headers: DTHeader[] = [
    { label: 'Index', value: 'index', width: '90px', align: 'center' },
    { label: 'Name', value: 'name', width: '300px', sortable: true },
    { label: 'Email', value: 'email' },
    {
      label: 'Created At',
      value: 'created_at',
      sortable: true,
      format: (created_at) => new Date(created_at).toLocaleString()
    },
    { label: 'Actions', value: 'actions', align: 'center' }
  ]

</script>
<VDialog let:close let:open>
  <Button class='mb-3' color='btn-light-blue' on:click={open} slot='button'>Add User +</Button>
  <UserForm on:success={(event)=>{
     close()
     toast.success(`User ${event.detail.name} created successfully`)
  }} />
</VDialog>

<InertiaDatatable {headers} items={users} let:header let:index let:row let:value routeName='users.index'>
  {#if header.value === 'index'}
    {index + 1}
  {:else if (header.value === 'actions')}
    <section class='space-x-2 flex justify-center'>
      <VDialog let:close let:open>
        <Button slot='button' color='btn-light-blue' icon='i-carbon-edit' on:click={open}></Button>
        <UpdateUserForm on:success={(event)=>{close()
           toast.success(`User ${event.detail.name} updated successfully !`)
        }} initialValues={row} />
      </VDialog>
      <Form method='delete' on:success={()=>
        toast.error(`User ${row.name} deleted successfully !`)
      } let:form url={route('users.destroy', {user:row.id})}>
        <Button color='btn-light-red' icon='i-carbon-delete' loading={form.processing}></Button>
      </Form>
    </section>
  {:else}
    {value}
  {/if}
</InertiaDatatable>




