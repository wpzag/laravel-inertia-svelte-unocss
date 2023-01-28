<script lang='ts'>
  import { Dialog, DialogOverlay } from '@rgossiaux/svelte-headlessui'

  let isOpen = false
  export const close = () => isOpen = false
  const open = () => isOpen = true
</script>
<slot name='button' />
{#if isOpen}
  <Dialog
    on:close={() => (isOpen = false)} open={isOpen} static
  >
    <div transition:fade={{duration:200}}>
      <DialogOverlay class='fixed inset-0 bg-black/50 grid place-items-center  z-10  ' />
    </div>
    <div transition:scale={{
        easing:cubicOut,
        duration:250,
      }}
         class='fixed md:w-120 lt-md:w-90%   top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-11  p-6 my-8  text-left align-middle transition-all transform bg-white dark:bg-slate-7 shadow-xl rounded-2xl '
    >
      <slot {open} {close} />
    </div>
  </Dialog>
{/if}
