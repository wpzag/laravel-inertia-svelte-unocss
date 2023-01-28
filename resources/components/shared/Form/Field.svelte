<script lang='ts'>
  import { getContext } from 'svelte'
  import { slide } from 'svelte/transition'
  import { useInput } from '@/helpers/InputHelpers'

  export let name: string | null
  export let label: string | null = null
  const form = getContext('form')

  let { computedName, computedLabel, id } = useInput($$props)
  $: error = $form.errors[computedName]
  $:disabled = $$restProps.disabled

</script>

<div class='my-5 dark:text-slate-3' class:op50={disabled}>
  <label class='mb-2 block' for={id}>{computedLabel} </label>
  <input
    {...$$restProps}
    bind:value={$form[computedName]}
    class=' w-full border rounded outline-none py-2 px-2 dark:bg-slate-8 dark:border-slate-7 dark:text-slate-3 '
    {id}
    name={computedName}
  />
  {#if error}
		<span transition:slide class='text-red-5 text-xs block mt-1'>
			{error}
		</span>
  {/if}
</div>
