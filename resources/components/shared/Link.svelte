<script lang='ts'>
  import { inertia } from '@inertiajs/inertia-svelte'
</script>

<a {...$$restProps} class='border-b border-dashed dark:border-slate-6 border-black hover:op50 transition-opacity'
   use:inertia>
  <slot></slot>
</a>
