<script lang='ts'>
  import UserData = App.Data.UserData

  export let auth: UserData

</script>
<svelte:head>
  <title>Dashboard</title>
</svelte:head>

<div class='flex flex-col gap-y-4 justify-center items-center'>
  
  <h2> Welcome , {auth.name} .</h2>
  <p class='bg-green/20 text-green-500 inline-block rounded p1 text-sm px-3'>
    {auth.email} .
  </p>

</div>


