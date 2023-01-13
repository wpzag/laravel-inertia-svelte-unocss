<script>
  import { inertia } from '@inertiajs/inertia-svelte'
  import { classes } from '@/actions/classes'

  export let href
  export let active

</script>

<a {...$$restProps}
   class='inline-flex items-center px-1 pt-1 border-b-2 pb-3 ' {href} use:classes={{
'text-slate-7 border-indigo dark:text-slate-1' : active,
 'text-slate-4 border-transparent' : !active,

}} use:inertia>
  <slot />
</a>
