<script lang='ts'>
  import { fade } from 'svelte/transition'
  import Spinner from '@/components/shared/Spinner.svelte'

  export let loading: boolean = false
</script>

<button {...$$restProps} on:click>

  <span class='flex justify-center items-center gap-x-4' class:op0={loading}>
    <slot>Submit</slot>
  </span>
  {#if loading}
    <div class='absolute inset-0' transition:fade>
      <div class='flex items-center justify-center h-full'>
        <Spinner size={12} />
      </div>
    </div>
  {/if}
</button
>

<style lang='scss'>
  button {
    --at-apply: 'bg-primary text-slate-2 px-4 py-2 rounded transition duration-300 hover:bg-slate-8 active:scale-90 transform ';

    &:disabled {
      --at-apply: 'bg-slate-2 text-slate-5 cursor-not-allowed';
    }
  }
</style>
