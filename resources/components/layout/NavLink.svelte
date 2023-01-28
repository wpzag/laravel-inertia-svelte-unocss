<script>
  import { inertia } from '@inertiajs/svelte'
  import clsx from 'clsx'

  export let href
  export let active

</script>

<a
  {...$$restProps}
  class={clsx(
     'inline-flex items-center px-1 pt-1 border-b-2 pb-3 ',
     active ? 'text-slate-7 border-indigo dark:text-slate-2' : 'text-slate-4 border-transparent',
   )}
  {href}
  use:inertia
>
  <slot />
</a>
