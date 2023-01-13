<script>

  import Checkbox from '@/components/shared/Form/Checkbox.svelte'

  import Guest from '@/layouts/Guest.svelte'
  import Form from '@/components/shared/Form/Form.svelte'
  import Field from '@/components/shared/Form/Field.svelte'
  import Button from '@/components/shared/Button.svelte'
  import { Link } from '@inertiajs/inertia-svelte'

  export let canResetPassword
  export let status


</script>
<svelte:head>
  <title>Log in</title>
</svelte:head>

<Guest>
  {#if status}
    <div class='mb-4 p-3 mt-3 font-medium text-sm text-green-600 bg-green-300/20 rounded '>
      {status}
    </div>
  {/if}
  <Form let:form url={route('login')}>
    <Field autofocus name='email' />
    <Field name='password' type='password' />
    <div class='flex justify-between items-center mb-7'>
      <Checkbox name='remember' />
      <div>
        {#if canResetPassword}
          <Link class='text-blue-500  text-sm' href={route('password.request')}>Forgot Password ?</Link>
        {/if}
      </div>
    </div>
    <Button class='!w-full !bg-blue-600' loading={form.processing}>Login</Button>
  </Form>
</Guest>
