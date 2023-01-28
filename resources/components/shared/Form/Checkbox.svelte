<script lang='ts'>
  import { useInput } from '@/helpers/InputHelpers.js'
  import { getContext } from 'svelte'
  import clsx from 'clsx'


  let randomId = Math.random().toString(36).substring(2, 9)
  export let name: string
  export let label: string

  let { computedName, computedLabel, id } = useInput($$props)
  const form = getContext('form')
  $:disabled = $$restProps.disabled
  $:checked = $form[computedName]

</script>
<label
  class={clsx(
        'flex gap-x-3 items-center dark:text-slate-3 cursor-pointer' ,
         disabled && 'op-50 pointer-events-none'
         )}
  for={randomId}
>
  <input
    {...$$restProps}
    bind:checked={$form[computedName]}
    class='opacity-0 absolute peer'
    id={randomId}
    name={computedName}
    type='checkbox'
  />

  <span
    class={clsx(
      'block h-5 w-5 peer-focus-visible:(ring-2 ring-primary  dark:ring-indigo-9) dark:border-slate-6 border flex-shrink-0 flex items-center justify-center transition duration-200 ease-[cubic-bezier(0.4, 0, 0.2, 1)] rounded',
      !checked && !disabled && 'border-gray-300',
      checked && !disabled && 'bg-primary  border-primary',
      disabled && 'bg-gray-200 dark:bg-gray-9  border-gray-200 '
    )}
  >
      <i
        class="i-bx-check text-white transition duration-150 delay-100 ease-[cubic-bezier(0.57, 1.48, 0.87, 1.09] { checked ? 'scale-full': ' scale-0'}"></i>
    </span>
  <span class='text-sm'>{computedLabel}</span>
</label>

