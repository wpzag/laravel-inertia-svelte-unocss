<script>
  import Form from '@/components/shared/Form/Form.svelte'
  import Field from '@/components/shared/Form/Field.svelte'
  import Button from '@/components/shared/Button.svelte'
  import Guest from '@/layouts/Guest.svelte'

  export let email
  export let token
  // $: {
  //   err = errors
  // }
  // const form = useForm({
  //   token: token,
  //   email: email,
  //   password: null,
  //   password_confirmation: null,
  // })
  // const onSubmit = () => {
  //   $form.post('/reset-password', {
  //     onSuccess: () => $form.reset('password', 'password_confirmation'),
  //   })
  // }
</script>

<svelte:head>
  <title>Reset Password</title>
</svelte:head>

<Guest>
  <Form initialValues={{
    token: token,
    email: email,
    password: null,
    password_confirmation: null,

  }}
        let:form
        url='/password-reset'
  >

    <Field disabled name='token' value={token} />
    <Field disabled name='email' />
    <Field name='password' type='password' />
    <Field label='Confirm Password' name='password_confirmation' type='password' />
    <Button loading={form.processing}> Reset Password</Button>
  </Form>

</Guest>
