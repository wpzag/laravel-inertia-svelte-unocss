<script lang='ts'>
  import Form from '@/components/shared/Form/Form.svelte'
  import Field from '@/components/shared/Form/Field.svelte'
  import Button from '@/components/shared/Button.svelte'
  import { createEventDispatcher } from 'svelte'

  export let initialValues = {
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  }
  const dispatch = createEventDispatcher()
  const config = ({ reset }) => ({
    onSuccess: (page) => {
      console.log(page.props.data.user)
      dispatch('success', page.props.data.user)
      reset()
    }
  })
</script>


<Form {config} {initialValues} let:loading url={route('users.store')}>
  <h1 class='font-bold mb-3 '>Create an account</h1>

  <Field name='name' />
  <Field name='email' />
  <Field name='password' type='password' />
  <Field name='password_confirmation' type='password' />
  <Button loading={loading}> Create User</Button>
  <button class='btn-slate-800 mt-5' on:click|preventDefault={close}>Close</button>
</Form>


