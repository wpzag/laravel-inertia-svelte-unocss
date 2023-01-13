<script lang='ts'>
  import { useInput } from '@/helpers/InputHelpers.js'
  import { classes } from '@/actions/classes'
  import { getContext } from 'svelte'

  let randomId = Math.random().toString(36).substring(2, 9)
  export let name: string
  export let label: string

  let { computedName, computedLabel, id } = useInput($$props)
  const form = getContext('form')
  $:disabled = $$restProps.disabled
  $:checked = $form.values[computedName]

</script>
<label class='flex gap-x-3 items-center dark:text-slate-3 cursor-pointer' for={randomId}>
  <input
    {...$$restProps}
    bind:checked={$form.values[computedName]}
    class='opacity-0 absolute peer'
    id={randomId}
    name={computedName}
    type='checkbox'
  />

  <span
    class='block h-5 w-5 peer-focus-visible:(ring-2 ring-primary  dark:ring-indigo-9) dark:border-slate-6 border flex-shrink-0   flex items-center justify-center transition duration-200 ease-[cubic-bezier(0.4, 0, 0.2, 1)] rounded'
    use:classes={
      {
       'border-gray-300': !checked && !disabled,
       'bg-primary  border-primary': checked && !disabled,
       'bg-gray-200 dark:bg-gray-9  border-gray-200 ': disabled
     }
    }

  >
      <i
        class='i-bx-check text-white transition duration-150 delay-100 ease-[cubic-bezier(0.57, 1.48, 0.87, 1.09]'
        use:classes={{
                  ' scale-0': !checked,
                  ' scale-full': checked,
                  'text-gray-500':disabled
                }}
      ></i>
    </span>
  <span class='text-sm' class:disabled={$$restProps.disabled}>{computedLabel}</span>
</label>

