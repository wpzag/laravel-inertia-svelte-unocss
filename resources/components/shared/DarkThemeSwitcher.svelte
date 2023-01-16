<script lang='ts'>
  let darkTheme = false
</script>

<button

  class='border p2 rounded border-dashed dark:border-slate-6 dark:text-slate-5  '
  on:click={() => {
		darkTheme = !darkTheme;
		document.body.classList.toggle('dark');
	}}
>
  <i class='i-carbon-moon  dark:i-carbon-sun block'></i>
</button>
