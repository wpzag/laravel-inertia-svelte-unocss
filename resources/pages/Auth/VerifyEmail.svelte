<script>
  import { Link } from '@inertiajs/inertia-svelte'
  import Guest from '@/layouts/Guest.svelte'
  import Button from '@/components/shared/Button.svelte'
  import Form from '@/components/shared/Form/Form.svelte'

  export let status

  $: verificationLinkSent = status === 'verification-link-sent'

</script>

<svelte:head>
  <title>Email Verification</title>
</svelte:head>

<Guest>
  <div class='mb-4 text-sm text-gray-600'>
    Thanks for signing up! Before getting started, could you verify your email address by clicking
    on the link we just emailed to you? If you didn't receive the email, we will gladly send you
    another.
  </div>

  {#if verificationLinkSent}
    <div class='mb-4 font-medium text-sm text-green-600'>
      A new verification link has been sent to the email address you provided during registration.
    </div>
  {/if}

  <Form as class='flex justify-between items-center mt-10' let:form url={route('verification.send')}>

    <Link
      as='button'
      class='underline text-sm text-gray-600 hover:text-gray-900'
      href={route('logout')}
      method='post'>Log Out
    </Link
    >
    <Button disabled={form.processing}> Resend Verification Email
    </Button>

  </Form>

</Guest>
