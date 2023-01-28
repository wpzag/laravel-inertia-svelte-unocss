<script lang='ts'>
  import Guest from '@/layouts/Guest.svelte'
  import Form from '@/components/shared/Form/Form.svelte'
  import Field from '@/components/shared/Form/Field.svelte'
  import Button from '@/components/shared/Button.svelte'
</script>

<svelte:head>
  <title>Register</title>
</svelte:head>

<Guest>
  <Form initialValues={{
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  }} let:form>
    <Field name='name'></Field>
    <Field name='email'></Field>
    <Field name='password' type='password'></Field>
    <Field name='password_confirmation' type='password'></Field>
    <div class='flex items-center justify-end mt-4'>
      <a class='underline text-sm text-gray-600 hover:text-gray-900' href='/login' use:inertia>
        Already registered?
      </a>

      <Button class='ml-4' disabled={form.processing}>
        Register
      </Button>
    </div>
  </Form>
</Guest>
