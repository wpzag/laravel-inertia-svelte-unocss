<script lang='ts'>
  import Form from '@/components/shared/Form/Form.svelte'
  import Field from '@/components/shared/Form/Field.svelte'
  import Button from '@/components/shared/Button.svelte'
  import { createEventDispatcher } from 'svelte'

  export let initialValues: {
    id: string,
    name: string,
    email: string
  }
  const dispatch = createEventDispatcher()
  const config = ({ reset }) => ({
    onSuccess: (page) => {
      dispatch('success', page.props.data.user)
      reset()
    }
  })
</script>

<div>
  <h1 class='font-bold mb-3 '>Update an account</h1>
  <div>
    <section class='w-100 mx-auto my-5'>
      <Form {config} {initialValues} let:loading method='patch' url={route('users.update',{user:initialValues.id})}>
        <Field name='name' />
        <Field name='email' />
        <Button loading={loading}> Update User</Button>
        <button class='btn-slate-800 mt-5' on:click|preventDefault={close}>Close</button>
      </Form>
    </section>
  </div>
</div>
