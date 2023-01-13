<script lang='ts'>
  import Field from '@/components/shared/Form/Field.svelte'
  import Form from '@/components/shared/Form/Form.svelte'
  import Button from '@/components/shared/Button.svelte'
  import Guest from '@/layouts/Guest.svelte'
  import { route } from '@/helpers/ziggy.js'

  export let status
</script>

<svelte:head>
  <title>Forgot Password</title>
</svelte:head>

<Guest>
  <div class='mb-4 text-sm '>
    Forgot your password? No problem. Just let us know your email address and we will email you a
    password reset link that will allow you to choose a new one.
  </div>

  {#if status}
    <div class='mb-4 font-medium text-sm text-green-600'>
      {status}
    </div>
  {/if}

  <Form let:form url={route('password.email')}>

    <Field autofocus name='email' />
    <div class='text-right'>
      <Button loading={form.processing}>Email Password Reset Link</Button>
    </div>
  </Form>

</Guest>
