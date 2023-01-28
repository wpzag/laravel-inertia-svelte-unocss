<script lang='ts'>
  import { Dialog, DialogOverlay } from '@rgossiaux/svelte-headlessui'

  let isOpen = false
  export const close = () => isOpen = false
  const open = () => isOpen = true
  export let position: 'right' | 'left' | 'top' | 'bottom' = 'right'
  export let width = '20rem'
  export let height = '20rem'
  const positionClass = {
    right: 'top-0 right-0 ',
    left: 'top-0 left-0 ',
    top: 'top-0  ',
    bottom: 'bottom-0 '

  }
</script>
<slot name='button' />
{#if isOpen}
  <Dialog
    on:close={() => (isOpen = false)} open={isOpen} static
  >
    <div transition:fade={{duration:200}}>
      <DialogOverlay class='fixed inset-0 bg-black/50 grid place-items-center  z-10  ' />
    </div>
    <div transition:fly={{
        y:position === 'top' ? -100 : position === 'bottom' ? 100 : 0,
        x:position === 'left' ? -100 : position === 'right' ? 100 : 0,
        easing:cubicOut,
        duration:200,
      }}
         style:height={ position === 'top' || position === 'bottom' ? height : '100%'}
         style:width={ position === 'left' || position === 'right' ? width : '100%'}
         class='fixed  {positionClass[position]} h-screen  z-11  p-6   text-left align-middle transition-all transform bg-white dark:bg-slate-7 shadow-xl  '
    >
      <slot {open} {close} />
    </div>
  </Dialog>
{/if}
