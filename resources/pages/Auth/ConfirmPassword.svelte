<script>
  import Guest from '@/layouts/Guest.svelte'
  import Form from '@/components/shared/Form/Form.svelte'
  import Field from '@/components/shared/Form/Field.svelte'
  import Button from '@/components/shared/Button.svelte'
</script>

<svelte:head>
  <title>Confirm Password</title>
</svelte:head>

<Guest>
  <div class='mb-4 text-sm text-gray-600'>
    This is a secure area of the application. Please confirm your password before continuing.
  </div>


  <Form let:form>
    <Field name='password' type='password' />
    <div class='flex justify-end'>
      <Button disabled='{form.processing}'>Confirm</Button>
    </div>
  </Form>
</Guest>
